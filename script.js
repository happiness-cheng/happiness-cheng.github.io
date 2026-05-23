// ===== 第 1 屏：开场交互 =====
const avatar = document.getElementById('avatar');
const speechBubble = document.getElementById('speechBubble');
const speechText = document.getElementById('speechText');
const clickHint = document.getElementById('clickHint');
const scrollHint = document.getElementById('scrollHint');

const introMessages = [
    '你好！我是陈志程，广东海洋大学软件工程大二学生~',
    '方向是 Infra / Streaming + AI',
    '会 C++、Python、React、FastAPI、Docker...',
    '有自己的服务器和域名 czcheng.me',
    '往下滑，探索更多关于我的秘密~'
];

let introIndex = 0;
let introStarted = false;

function showIntroMessage() {
    if (!introStarted) {
        introStarted = true;
        clickHint.classList.add('hidden');
    }

    speechText.textContent = introMessages[introIndex];
    speechBubble.classList.remove('hidden');
    speechBubble.style.animation = 'none';
    void speechBubble.offsetHeight;
    speechBubble.style.animation = '';

    introIndex++;
    if (introIndex >= introMessages.length) {
        scrollHint.classList.remove('hidden');
        introIndex = 0;
    }
}

avatar.addEventListener('click', showIntroMessage);
avatar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') showIntroMessage();
});

// 浮动气泡点击
document.querySelectorAll('.float-item').forEach(item => {
    item.addEventListener('click', () => {
        const msg = item.dataset.msg;
        speechText.textContent = msg;
        speechBubble.classList.remove('hidden');
        speechBubble.style.animation = 'none';
        void speechBubble.offsetHeight;
        speechBubble.style.animation = '';
    });
});

// ===== 第 2 屏：点击冒险 =====
const adventureBubble = document.getElementById('adventureBubble');
const adventureText = document.getElementById('adventureText');
let bubbleTimeout;

document.querySelectorAll('.click-zone').forEach(zone => {
    zone.addEventListener('click', () => {
        const msg = zone.dataset.msg;
        adventureText.textContent = msg;
        adventureBubble.classList.remove('hidden');
        adventureBubble.style.animation = 'none';
        void adventureBubble.offsetHeight;
        adventureBubble.style.animation = '';

        clearTimeout(bubbleTimeout);
        bubbleTimeout = setTimeout(() => {
            adventureBubble.classList.add('hidden');
        }, 5000);
    });
});

// 点击空白处关闭冒险气泡
document.addEventListener('click', (e) => {
    if (!e.target.closest('.click-zone') && !e.target.closest('.adventure-bubble')) {
        adventureBubble.classList.add('hidden');
    }
});

// ===== 第 3 屏：项目展示 =====
const projectDetail = document.getElementById('projectDetail');
const detailContent = document.getElementById('detailContent');
const detailClose = document.getElementById('detailClose');
const detailLink = document.getElementById('detailLink');

const projectLinks = {
    'event_collector': 'https://github.com/happiness-cheng/event_collector',
    'event_stream_engine': 'https://github.com/happiness-cheng/event_stream_engine',
    'knowledge-base': 'https://github.com/happiness-cheng/knowledge-base',
    'ai-trader': 'https://github.com/happiness-cheng/ai-trader',
};

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const detail = card.dataset.detail;
        const title = card.querySelector('h3').textContent;
        detailContent.textContent = detail.replace(/\\n/g, '\n');
        detailLink.href = projectLinks[title] || '#';
        projectDetail.classList.remove('hidden');
    });
});

detailClose.addEventListener('click', () => {
    projectDetail.classList.add('hidden');
});

projectDetail.addEventListener('click', (e) => {
    if (e.target === projectDetail) {
        projectDetail.classList.add('hidden');
    }
});

// ESC 关闭弹窗
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        projectDetail.classList.add('hidden');
        adventureBubble.classList.add('hidden');
    }
});

// ===== 滚动检测：显示已发现区域 =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.screen').forEach(screen => {
    screen.style.opacity = '0';
    screen.style.transform = 'translateY(30px)';
    screen.style.transition = 'opacity 0.8s, transform 0.8s';
    observer.observe(screen);
});

// 第一屏直接显示
document.querySelector('.screen-intro').style.opacity = '1';
document.querySelector('.screen-intro').style.transform = 'translateY(0)';
