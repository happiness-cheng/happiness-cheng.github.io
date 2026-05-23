# 陈志成的个人网站

动漫风 · 玻璃拟态 · 3D交互

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS v4
- **3D**: Three.js / React Three Fiber
- **动画**: Framer Motion
- **图标**: Lucide React

## 本地开发

```bash
npm install
npm run dev
```

或双击 `start.bat` 启动开发服务器。

## 构建

```bash
npm run build
```

构建产物在 `dist/` 目录。

## 部署

项目配置了 GitHub Actions 自动部署。推送到 main 分支后会自动构建并部署到 GitHub Pages。

## 功能

- 新海诚风格的 3D 背景（漂浮球体、云朵、星星）
- 玻璃拟态卡片，鼠标悬停 3D 倾斜效果
- 视差滚动体验
- 响应式设计
