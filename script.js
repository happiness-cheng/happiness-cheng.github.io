// ===== 游戏状态 =====
const state = {
    started: false,
    carX: 100,
    speed: 0,
    maxSpeed: 12,
    friction: 0.92,
    currentStop: null,
    worldWidth: 4200,
};

// ===== DOM 元素 =====
const startScreen = document.getElementById('startScreen');
const startBtn = document.getElementById('startBtn');
const car = document.getElementById('car');
const road = document.querySelector('.road');
const roadDecor = document.querySelector('.road-decor');
const progressFill = document.getElementById('progressFill');

const stops = document.querySelectorAll('.stop');
const stopPositions = [];
stops.forEach((stop, i) => {
    stopPositions.push({
        el: stop,
        x: parseInt(getComputedStyle(stop).getPropertyValue('--stop-x')),
        content: document.getElementById('content' + (i + 1)),
        triggered: false,
    });
});

// ===== 开始游戏 =====
startBtn.addEventListener('click', () => {
    state.started = true;
    startScreen.classList.add('fade-out');
    setTimeout(() => startScreen.style.display = 'none', 800);
});

// ===== 键盘控制 =====
const keys = {};

document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    if (!state.started) {
        if (e.key === 'Enter' || e.key === ' ') startBtn.click();
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// ===== 移动端控制 =====
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

btnLeft.addEventListener('touchstart', (e) => { e.preventDefault(); keys['ArrowLeft'] = true; });
btnLeft.addEventListener('touchend', () => { keys['ArrowLeft'] = false; });
btnRight.addEventListener('touchstart', (e) => { e.preventDefault(); keys['ArrowRight'] = true; });
btnRight.addEventListener('touchend', () => { keys['ArrowRight'] = false; });

btnLeft.addEventListener('mousedown', () => { keys['ArrowLeft'] = true; });
btnLeft.addEventListener('mouseup', () => { keys['ArrowLeft'] = false; });
btnRight.addEventListener('mousedown', () => { keys['ArrowRight'] = true; });
btnRight.addEventListener('mouseup', () => { keys['ArrowRight'] = false; });

// ===== 游戏主循环 =====
function gameLoop() {
    if (!state.started) {
        requestAnimationFrame(gameLoop);
        return;
    }

    // 加速
    if (keys['ArrowRight'] || keys['d'] || keys['D']) {
        state.speed += 0.8;
    }
    if (keys['ArrowLeft'] || keys['a'] || keys['A']) {
        state.speed -= 0.6;
    }

    // 限速
    state.speed = Math.max(-state.maxSpeed * 0.5, Math.min(state.maxSpeed, state.speed));

    // 摩擦力
    state.speed *= state.friction;

    // 停止阈值
    if (Math.abs(state.speed) < 0.1) state.speed = 0;

    // 移动小车
    state.carX += state.speed;

    // 边界限制
    if (state.carX < 50) { state.carX = 50; state.speed = 0; }
    if (state.carX > state.worldWidth) { state.carX = state.worldWidth; state.speed = 0; }

    // 更新小车位置
    car.style.left = state.carX + 'px';

    // 更新世界偏移（让小车保持在屏幕左侧 1/3 处）
    const screenW = window.innerWidth;
    let worldOffset = state.carX - screenW * 0.3;
    if (worldOffset < 0) worldOffset = 0;
    if (worldOffset > state.worldWidth - screenW) worldOffset = state.worldWidth - screenW;

    // 移动道路和装饰
    road.style.transform = `translateX(-${worldOffset}px)`;
    roadDecor.style.transform = `translateX(-${worldOffset}px)`;

    // 移动站点
    stops.forEach(stop => {
        stop.style.transform = `translateX(-${worldOffset}px)`;
    });

    // 进度条
    const progress = (state.carX / state.worldWidth) * 100;
    progressFill.style.width = progress + '%';

    // 检测站点
    checkStops();

    requestAnimationFrame(gameLoop);
}

// ===== 站点检测 =====
function checkStops() {
    const screenW = window.innerWidth;
    let closestStop = null;
    let closestDist = Infinity;

    stopPositions.forEach((stop, i) => {
        const stopScreenX = stop.x - (state.carX - screenW * 0.3) + screenW * 0.3;
        const dist = Math.abs(stopScreenX - (screenW * 0.3 + 50));

        if (dist < 200 && dist < closestDist) {
            closestDist = dist;
            closestStop = i;
        }
    });

    // 隐藏非最近站点的内容
    stopPositions.forEach((stop, i) => {
        if (i !== closestStop) {
            stop.content.classList.add('hidden');
            stop.triggered = false;
        }
    });

    // 显示最近站点的内容
    if (closestStop !== null && closestDist < 150) {
        const stop = stopPositions[closestStop];
        if (!stop.triggered) {
            stop.triggered = true;
            stop.content.classList.remove('hidden');
        }
    }

    state.currentStop = closestStop;
}

// ===== 启动游戏循环 =====
requestAnimationFrame(gameLoop);
