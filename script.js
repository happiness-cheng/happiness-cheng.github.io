const S = { started: false, x: 100, speed: 0, max: 10, fric: 0.93, worldW: 4200 };
const car = document.getElementById('car');
const road = document.getElementById('road');
const deco = document.getElementById('decorations');
const stopsEl = document.getElementById('stops');
const fill = document.getElementById('progressFill');

const stops = [...document.querySelectorAll('.stop')].map(el => ({
    el, x: parseInt(getComputedStyle(el).getPropertyValue('--stop-x')),
    popup: el.querySelector('.popup'), shown: false
}));

// 开始
document.getElementById('startBtn').onclick = () => {
    S.started = true;
    document.getElementById('startScreen').classList.add('gone');
};

// 键盘
const K = {};
document.addEventListener('keydown', e => { K[e.key] = true; if (!S.started && (e.key === 'Enter' || e.key === ' ')) document.getElementById('startBtn').click(); });
document.addEventListener('keyup', e => K[e.key] = false);

// 移动端
const bL = document.getElementById('btnL'), bR = document.getElementById('btnR');
function bindBtn(btn, key) {
    const on = () => K[key] = true, off = () => K[key] = false;
    btn.addEventListener('touchstart', e => { e.preventDefault(); on(); });
    btn.addEventListener('touchend', off);
    btn.addEventListener('mousedown', on);
    btn.addEventListener('mouseup', off);
    btn.addEventListener('mouseleave', off);
}
bindBtn(bL, 'ArrowLeft'); bindBtn(bR, 'ArrowRight');

// 关闭弹窗
document.querySelectorAll('.popup-close').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        btn.closest('.popup').classList.add('hidden');
    });
});

// 主循环
function loop() {
    if (!S.started) { requestAnimationFrame(loop); return; }

    // 加速/减速
    if (K['ArrowRight'] || K['d'] || K['D']) S.speed += 0.6;
    if (K['ArrowLeft'] || K['a'] || K['A']) S.speed -= 0.4;
    S.speed = Math.max(-S.max * 0.4, Math.min(S.max, S.speed));
    S.speed *= S.fric;
    if (Math.abs(S.speed) < 0.08) S.speed = 0;

    // 移动
    S.x += S.speed;
    S.x = Math.max(50, Math.min(S.worldW, S.x));

    // 小车位置
    car.style.left = S.x + 'px';

    // 车轮动画
    if (Math.abs(S.speed) > 0.5) {
        car.classList.add('moving');
        car.classList.remove('braking');
    } else if (Math.abs(S.speed) > 0) {
        car.classList.remove('moving');
        car.classList.add('braking');
    } else {
        car.classList.remove('moving', 'braking');
    }

    // 世界偏移
    const sw = window.innerWidth;
    let off = S.x - sw * 0.3;
    off = Math.max(0, Math.min(S.worldW - sw, off));

    road.style.transform = `translateX(-${off}px)`;
    deco.style.transform = `translateX(-${off}px)`;
    stopsEl.style.transform = `translateX(-${off}px)`;

    // 进度
    fill.style.width = (S.x / S.worldW * 100) + '%';

    // 站点检测
    let closest = null, closestD = Infinity;
    stops.forEach((s, i) => {
        const sx = s.x - off + sw * 0.3;
        const d = Math.abs(sx - (sw * 0.3 + 40));
        if (d < 180 && d < closestD) { closestD = d; closest = i; }
    });
    stops.forEach((s, i) => {
        if (i !== closest) { s.popup.classList.add('hidden'); s.shown = false; }
    });
    if (closest !== null && closestD < 120 && !stops[closest].shown) {
        stops[closest].shown = true;
        stops[closest].popup.classList.remove('hidden');
    }

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
