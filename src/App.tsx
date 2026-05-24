import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, Mail, ExternalLink, Download } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* 你的名字 暖色天空背景 */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#FF7B54] via-[#FFB26B] via-[#FFD5A0] via-[#87CEEB] to-[#4A90D9]" />

      {/* CSS 动画层 - 增强版粒子场 */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* 大球体层 - 背景深度 */}
        <FloatBubble className="w-28 h-28 bg-[#FF6B6B]/30 top-[5%] left-[3%]" duration={8} delay={0} />
        <FloatBubble className="w-24 h-24 bg-[#FFD93D]/25 top-[20%] right-[5%]" duration={10} delay={1} />
        <FloatBubble className="w-32 h-32 bg-[#FF8C69]/20 top-[45%] left-[10%]" duration={9} delay={0.5} />
        <FloatBubble className="w-20 h-20 bg-[#FFA07A]/30 top-[60%] right-[15%]" duration={11} delay={2} />
        <FloatBubble className="w-26 h-26 bg-[#87CEEB]/25 top-[75%] left-[40%]" duration={7} delay={3} />
        <FloatBubble className="w-22 h-22 bg-[#FFB6C1]/20 top-[88%] right-[25%]" duration={12} delay={1.5} />

        {/* 中球体层 - 中间层 */}
        <FloatBubble className="w-16 h-16 bg-[#FF6B6B]/50 top-[10%] left-[20%]" duration={6} delay={0.3} />
        <FloatBubble className="w-14 h-14 bg-[#FFD93D]/45 top-[15%] right-[25%]" duration={7} delay={1.2} />
        <FloatBubble className="w-18 h-18 bg-[#FF8C69]/40 top-[30%] left-[55%]" duration={5.5} delay={0.8} />
        <FloatBubble className="w-12 h-12 bg-[#FFA07A]/50 top-[35%] left-[75%]" duration={8} delay={2.5} />
        <FloatBubble className="w-16 h-16 bg-[#FFB6C1]/45 top-[50%] left-[5%]" duration={6.5} delay={1.8} />
        <FloatBubble className="w-14 h-14 bg-[#FFD700]/50 top-[55%] right-[8%]" duration={7.5} delay={0.6} />
        <FloatBubble className="w-12 h-12 bg-[#87CEEB]/40 top-[65%] left-[60%]" duration={5} delay={3.5} />
        <FloatBubble className="w-16 h-16 bg-[#FFA500]/45 top-[70%] left-[25%]" duration={6} delay={2} />
        <FloatBubble className="w-10 h-10 bg-[#FF6B6B]/50 top-[80%] right-[35%]" duration={8.5} delay={1} />
        <FloatBubble className="w-14 h-14 bg-[#FFD93D]/40 top-[90%] left-[70%]" duration={7} delay={2.8} />

        {/* 小球体层 - 前景细节 */}
        <FloatBubble className="w-8 h-8 bg-[#FF6B6B]/60 top-[8%] left-[40%]" duration={5} delay={0.2} />
        <FloatBubble className="w-6 h-6 bg-[#FFD93D]/55 top-[12%] right-[40%]" duration={4} delay={1.5} />
        <FloatBubble className="w-10 h-10 bg-[#FF8C69]/50 top-[22%] left-[85%]" duration={6} delay={0.7} />
        <FloatBubble className="w-7 h-7 bg-[#FFB6C1]/55 top-[28%] left-[30%]" duration={4.5} delay={2.2} />
        <FloatBubble className="w-8 h-8 bg-[#FFD700]/60 top-[42%] right-[30%]" duration={5.5} delay={1} />
        <FloatBubble className="w-6 h-6 bg-[#FFA500]/55 top-[52%] left-[50%]" duration={4} delay={3} />
        <FloatBubble className="w-9 h-9 bg-[#87CEEB]/50 top-[58%] left-[15%]" duration={5} delay={0.5} />
        <FloatBubble className="w-7 h-7 bg-[#FF6B6B]/55 top-[68%] right-[45%]" duration={6} delay={2.5} />
        <FloatBubble className="w-8 h-8 bg-[#FFD93D]/50 top-[78%] left-[80%]" duration={4.5} delay={1.8} />
        <FloatBubble className="w-6 h-6 bg-[#FFB6C1]/60 top-[85%] left-[45%]" duration={5.5} delay={3.2} />

        {/* 发光光点 - 密集版 */}
        <GlowDot className="w-3 h-3 bg-[#FFD700] top-[6%] left-[15%]" duration={3} delay={0} />
        <GlowDot className="w-2 h-2 bg-[#FF6B6B] top-[10%] right-[20%]" duration={4} delay={0.5} />
        <GlowDot className="w-3 h-3 bg-[#FFA500] top-[14%] left-[65%]" duration={3.5} delay={1} />
        <GlowDot className="w-2 h-2 bg-[#FFD93D] top-[18%] left-[35%]" duration={4.5} delay={1.5} />
        <GlowDot className="w-3 h-3 bg-[#FFB6C1] top-[22%] right-[10%]" duration={3} delay={2} />
        <GlowDot className="w-2 h-2 bg-[#87CEEB] top-[26%] left-[80%]" duration={3.8} delay={0.8} />
        <GlowDot className="w-3 h-3 bg-[#FF8C69] top-[30%] left-[45%]" duration={4.2} delay={1.3} />
        <GlowDot className="w-2 h-2 bg-[#FFD700] top-[34%] right-[50%]" duration={3.2} delay={2.5} />
        <GlowDot className="w-3 h-3 bg-[#FF6B6B] top-[38%] left-[10%]" duration={3.6} delay={0.3} />
        <GlowDot className="w-2 h-2 bg-[#FFA500] top-[42%] right-[35%]" duration={4} delay={1.8} />
        <GlowDot className="w-3 h-3 bg-[#FFD93D] top-[46%] left-[70%]" duration={3.4} delay={0.6} />
        <GlowDot className="w-2 h-2 bg-[#FFB6C1] top-[50%] left-[25%]" duration={4.3} delay={2.1} />
        <GlowDot className="w-3 h-3 bg-[#FFD700] top-[54%] right-[15%]" duration={3.1} delay={1.1} />
        <GlowDot className="w-2 h-2 bg-[#FF6B6B] top-[58%] left-[55%]" duration={3.9} delay={0.9} />
        <GlowDot className="w-3 h-3 bg-[#87CEEB] top-[62%] left-[5%]" duration={3.3} delay={2.8} />
        <GlowDot className="w-2 h-2 bg-[#FFA500] top-[66%] right-[25%]" duration={4.1} delay={0.4} />
        <GlowDot className="w-3 h-3 bg-[#FFD93D] top-[70%] left-[40%]" duration={3.7} delay={1.6} />
        <GlowDot className="w-2 h-2 bg-[#FFB6C1] top-[74%] left-[75%]" duration={4.4} delay={2.3} />
        <GlowDot className="w-3 h-3 bg-[#FF6B6B] top-[78%] right-[5%]" duration={3} delay={0.7} />
        <GlowDot className="w-2 h-2 bg-[#FFD700] top-[82%] left-[30%]" duration={3.5} delay={1.9} />
        <GlowDot className="w-3 h-3 bg-[#FF8C69] top-[86%] left-[60%]" duration={4} delay={2.6} />
        <GlowDot className="w-2 h-2 bg-[#FFA500] top-[90%] right-[40%]" duration={3.2} delay={0.2} />
        <GlowDot className="w-3 h-3 bg-[#FFB6C1] top-[94%] left-[20%]" duration={3.8} delay={1.4} />

        {/* 云朵 */}
        <CloudShape className="top-[5%] left-[2%]" scale={1.2} duration={25} />
        <CloudShape className="top-[8%] right-[5%]" scale={1.0} duration={30} delay={5} />
        <CloudShape className="top-[3%] left-[40%]" scale={0.8} duration={28} delay={10} />
        <CloudShape className="top-[12%] left-[70%]" scale={1.1} duration={22} delay={3} />
        <CloudShape className="top-[6%] left-[25%]" scale={0.7} duration={35} delay={8} />
      </div>

      {/* 内容层 */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-center"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-black text-white mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] tracking-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              陈志成
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 font-semibold mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Infra / Streaming + AI
            </motion.p>
            <motion.p
              className="text-base text-white/70 mb-10 drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              广东海洋大学 · 软件工程 · 大二
            </motion.p>
            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <a href="https://github.com/happiness-cheng" target="_blank" rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-black/30 backdrop-blur-xl border-2 border-white/30 text-white font-semibold hover:bg-black/50 hover:border-white/50 transition-all hover:scale-105 flex items-center gap-2 shadow-lg">
                <Code size={18} /> GitHub
              </a>
              <a href="mailto:liuguanyi561@gmail.com"
                className="px-7 py-3.5 rounded-full bg-black/30 backdrop-blur-xl border-2 border-white/30 text-white font-semibold hover:bg-black/50 hover:border-white/50 transition-all hover:scale-105 flex items-center gap-2 shadow-lg">
                <Mail size={18} /> 联系我
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
          >
            <span className="text-white/50 text-sm font-medium drop-shadow">↓ 向下滚动探索</span>
          </motion.div>
        </section>

        {/* 关于我 */}
        <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
          <GlareCard>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow">关于我</h2>
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-5xl shadow-xl shadow-orange-500/40 border-4 border-white/20">

              </div>
              <div className="text-white space-y-2">
                <p className="text-lg font-medium">擅长 C++ 高并发系统，有完整全链路项目经验。</p>
                <p className="text-white/80">能独立从代码到云端部署，方向 Infra / Streaming + AI。</p>
                <div className="flex gap-10 pt-4">
                  <Stat label="项目" value="4+" />
                  <Stat label="峰值 QPS" value="17K+" />
                  <Stat label="测试用例" value="114" />
                </div>
              </div>
            </div>
          </GlareCard>
        </section>

        {/* 项目经历 */}
        <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-white mb-12 text-center drop-shadow-[0_3px_12px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            项目经历
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="event_collector"
              desc="高并发 TCP 事件采集服务"
              tags={['C++17', 'Boost.Asio', 'Protobuf', 'Kafka', 'ClickHouse']}
              metrics={[{ label: '峰值 QPS', value: '17,535' }, { label: '内存', value: '11MB' }, { label: 'P99 延迟', value: '8.25ms' }]}
              href="https://github.com/happiness-cheng/event_collector"
              icon=" "
              delay={0}
            />
            <ProjectCard
              title="event_stream_engine"
              desc="实时事件流处理引擎"
              tags={['C++17', 'gRPC', 'Lambda 架构', '熔断器', 'HMAC']}
              metrics={[{ label: '质量管道', value: '4 阶段' }, { label: '热/冷路径', value: '双路径' }, { label: '自动降级', value: '熔断器' }]}
              href="https://github.com/happiness-cheng/event_stream_engine"
              icon="⚡"
              delay={0.1}
            />
            <ProjectCard
              title="knowledge-base"
              desc="AI 驱动的个人知识库"
              tags={['React', 'FastAPI', 'MySQL', 'ChromaDB', 'RAG', 'Agent']}
              metrics={[{ label: '测试用例', value: '114' }, { label: 'API 接口', value: '29' }, { label: '搜索', value: '向量 RAG' }]}
              href="https://github.com/happiness-cheng/knowledge-base"
              icon=" "
              delay={0.2}
            />
            <ProjectCard
              title="ai-trader"
              desc="AI 自动交易系统"
              tags={['Python', '同花顺模拟盘', 'MiMo API', '飞书推送']}
              metrics={[{ label: '交易', value: '自动下单' }, { label: '通知', value: '飞书推送' }, { label: '分析', value: 'AI 行情' }]}
              href="https://github.com/happiness-cheng/ai-trader"
              icon=" "
              delay={0.3}
            />
          </div>
        </section>

        {/* 时间线 */}
        <section className="py-24 px-4 md:px-8 max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-white mb-12 text-center drop-shadow-[0_3px_12px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            时间线
          </motion.h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-orange-400 via-pink-400 to-transparent rounded-full" />
            <TimelineItem year="2024" title="入学广东海洋大学" desc="软件工程本科，开始系统学习 Infra / Streaming" />
            <TimelineItem year="2025 Q1" title="event_collector" desc="独立完成 17K+ QPS 高并发 TCP 事件采集服务" />
            <TimelineItem year="2025 Q2" title="event_stream_engine" desc="实时流处理引擎，gRPC + Lambda 架构" />
            <TimelineItem year="2025 Q2" title="knowledge-base" desc="AI 驱动个人知识库，React + FastAPI + RAG" />
            <TimelineItem year="2025 Q2" title="ai-trader" desc="同花顺模拟盘 AI 自动交易系统" isLast />
          </div>
        </section>

        {/* 技术栈 */}
        <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <GlareCard>
            <h2 className="text-3xl font-bold text-white mb-8 drop-shadow">技术栈</h2>
            <SkillCategory title="语言">
              <SkillTag name="C++17" color="#3B82F6" />
              <SkillTag name="Python" color="#EAB308" />
              <SkillTag name="JavaScript" color="#F97316" />
              <SkillTag name="SQL" color="#22C55E" />
            </SkillCategory>
            <SkillCategory title="框架">
              <SkillTag name="React" color="#06B6D4" />
              <SkillTag name="FastAPI" color="#22C55E" />
              <SkillTag name="Boost.Asio" color="#3B82F6" />
              <SkillTag name="gRPC" color="#A855F7" />
            </SkillCategory>
            <SkillCategory title="基础设施">
              <SkillTag name="Docker" color="#3B82F6" />
              <SkillTag name="Azure" color="#06B6D4" />
              <SkillTag name="Linux" color="#EAB308" />
              <SkillTag name="Git" color="#F97316" />
            </SkillCategory>
            <SkillCategory title="数据">
              <SkillTag name="MySQL" color="#3B82F6" />
              <SkillTag name="Redis" color="#EF4444" />
              <SkillTag name="Kafka" color="#6B7280" />
              <SkillTag name="ClickHouse" color="#EAB308" />
            </SkillCategory>
          </GlareCard>
        </section>

        {/* 教育背景 */}
        <section className="py-16 px-4 md:px-8 max-w-3xl mx-auto">
          <GlareCard>
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow">教育背景</h2>
            <div className="flex gap-4">
              <div className="w-1.5 bg-gradient-to-b from-orange-400 to-pink-500 rounded-full" />
              <div>
                <span className="text-sm text-orange-200 font-semibold">2024 — 2028</span>
                <h3 className="text-xl font-bold text-white mt-1">广东海洋大学</h3>
                <p className="text-white/80">软件工程 · 本科</p>
                <p className="text-white/60 text-sm mt-1">方向：Infra / Streaming + AI</p>
              </div>
            </div>
          </GlareCard>
        </section>

        {/* 联系我 */}
        <section className="py-24 px-4 md:px-8 max-w-3xl mx-auto pb-32">
          <GlareCard className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8 drop-shadow">联系我</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/happiness-cheng" target="_blank" rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-black/30 border-2 border-white/30 text-white font-semibold hover:bg-black/50 hover:border-white/50 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                <Code size={18} /> GitHub
              </a>
              <a href="mailto:liuguanyi561@gmail.com"
                className="px-7 py-3.5 rounded-full bg-black/30 border-2 border-white/30 text-white font-semibold hover:bg-black/50 hover:border-white/50 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                <Mail size={18} /> 邮箱
              </a>
              <a href="resume.pdf" download
                className="px-7 py-3.5 rounded-full bg-black/30 border-2 border-white/30 text-white font-semibold hover:bg-black/50 hover:border-white/50 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                <Download size={18} /> 下载简历
              </a>
            </div>
            <p className="mt-10 text-white/50 text-sm">感谢访问 </p>
          </GlareCard>
        </section>
      </div>
    </div>
  );
}

/* ─── CSS 动画组件 ─── */

function FloatBubble({ className, duration = 6, delay = 0 }: { className: string; duration?: number; delay?: number }) {
  return (
    <div
      className={`absolute rounded-full ${className}`}
      style={{
        animation: `floatBubble ${duration}s ease-in-out ${delay}s infinite`,
        filter: 'blur(1px)',
        willChange: 'transform',
      }}
    />
  );
}

function GlowDot({ className, duration = 3, delay = 0 }: { className: string; duration?: number; delay?: number }) {
  return (
    <div
      className={`absolute rounded-full shadow-[0_0_12px_4px_currentColor] ${className}`}
      style={{
        animation: `glowFloat ${duration}s ease-in-out ${delay}s infinite`,
        willChange: 'transform, opacity',
      }}
    />
  );
}

function CloudShape({ className, scale = 1, duration = 25, delay = 0 }: { className: string; scale?: number; duration?: number; delay?: number }) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        transform: `scale(${scale})`,
        animation: `cloudDrift ${duration}s linear ${delay}s infinite`,
      }}
    >
      <div className="relative">
        <div className="w-24 h-16 bg-white/70 rounded-full absolute" />
        <div className="w-16 h-12 bg-white/60 rounded-full absolute left-14 top-1" />
        <div className="w-18 h-14 bg-white/65 rounded-full absolute -left-4 top-2" />
        <div className="w-12 h-10 bg-white/50 rounded-full absolute left-6 -top-3" />
      </div>
    </div>
  );
}

/* ─── GlareCard：鼠标跟随倾斜 + 光斑追踪 ─── */

function GlareCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    ref.current.style.setProperty('--glare-x', `${px * 100}%`);
    ref.current.style.setProperty('--glare-y', `${py * 100}%`);
    const dist = Math.sqrt((px - 0.5) ** 2 + (py - 0.5) ** 2);
    ref.current.style.setProperty('--glare-o', `${Math.min(dist * 2, 0.4)}`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (ref.current) {
      ref.current.style.setProperty('--glare-o', '0');
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        '--glare-x': '50%',
        '--glare-y': '50%',
        '--glare-o': '0',
      } as React.CSSProperties}
      className={`relative rounded-2xl bg-black/40 backdrop-blur-2xl border-2 border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.3)] p-8 overflow-hidden ${className}`}
    >
      {/* 光斑追踪 */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-200"
        style={{
          background: `radial-gradient(circle at var(--glare-x) var(--glare-y), rgba(255,255,255,var(--glare-o)), transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

/* ─── 带光斑的 ProjectCard ─── */

function ProjectCard({
  title, desc, tags, metrics, href, icon, delay,
}: {
  title: string; desc: string; tags: string[];
  metrics: { label: string; value: string }[]; href: string; icon: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    ref.current.style.setProperty('--glare-x', `${px * 100}%`);
    ref.current.style.setProperty('--glare-y', `${py * 100}%`);
    const dist = Math.sqrt((px - 0.5) ** 2 + (py - 0.5) ** 2);
    ref.current.style.setProperty('--glare-o', `${Math.min(dist * 2.5, 0.35)}`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (ref.current) {
      ref.current.style.setProperty('--glare-o', '0');
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        '--glare-x': '50%',
        '--glare-y': '50%',
        '--glare-o': '0',
      } as React.CSSProperties}
      className="relative rounded-2xl bg-black/40 backdrop-blur-2xl border-2 border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.3)] p-6 hover:border-white/40 transition-colors cursor-default overflow-hidden"
    >
      {/* 光斑 */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-200"
        style={{
          background: `radial-gradient(circle at var(--glare-x) var(--glare-y), rgba(255,255,255,var(--glare-o)), transparent 55%)`,
        }}
      />
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-xl font-bold text-white drop-shadow">{title}</h3>
      </div>
      <p className="text-white/80 text-sm mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/15 text-white font-medium border border-white/20">
            {tag}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mb-5">
        {metrics.map((m) => (
          <div key={m.label} className="text-center bg-black/20 rounded-lg py-2">
            <div className="text-lg font-bold text-white">{m.value}</div>
            <div className="text-[10px] text-white/50">{m.label}</div>
          </div>
        ))}
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-orange-300 hover:text-orange-200 font-semibold transition-colors">
        <ExternalLink size={14} /> 查看 GitHub
      </a>
    </motion.div>
  );
}

/* ─── 时间线 + 呼吸灯 ─── */

function TimelineItem({ year, title, desc, isLast = false }: { year: string; title: string; desc: string; isLast?: boolean }) {
  return (
    <motion.div
      className="relative pl-12 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`absolute left-[9px] top-1.5 w-4 h-4 rounded-full border-[3px] animate-pulse-glow ${
        isLast
          ? 'bg-pink-400 border-pink-200'
          : 'bg-orange-400 border-orange-200'
      }`} />
      <span className="text-xs text-orange-300 font-bold font-mono">{year}</span>
      <h3 className="text-lg font-bold text-white mt-0.5 drop-shadow">{title}</h3>
      <p className="text-sm text-white/70 mt-1">{desc}</p>
    </motion.div>
  );
}

/* ─── 技术栈标签 stagger 弹出 ─── */

function SkillTag({ name, color }: { name: string; color: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.15, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="inline-block px-3.5 py-1.5 rounded-lg text-sm font-bold text-white cursor-default shadow-md border border-white/20"
      style={{ backgroundColor: color + '99' }}
    >
      {name}
    </motion.span>
  );
}

function SkillCategory({ title, children }: { title: string; children: ReactNode }) {
  return (
    <motion.div
      className="mb-6 last:mb-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-sm font-semibold text-orange-200 mb-3 uppercase tracking-wider">{title}</h3>
      <div className="flex flex-wrap gap-2.5">{children}</div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-black text-white drop-shadow">{value}</div>
      <div className="text-xs text-white/60 font-medium mt-1">{label}</div>
    </div>
  );
}

export default App;
