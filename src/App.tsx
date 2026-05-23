import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Code, Mail, ExternalLink, Download } from 'lucide-react';
import Background3D from './components/Background3D';
import GlassCard from './components/GlassCard';
import SkillBadge from './components/SkillBadge';
import TimelineItem from './components/TimelineItem';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1a0533] via-[#2d1b69] to-[#0f0c29]">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <Background3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-[0_0_30px_rgba(255,182,193,0.5)]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              陈志成
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-purple-200 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Infra / Streaming + AI
            </motion.p>
            <motion.p
              className="text-base text-white/60 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              广东海洋大学 · 软件工程 · 大二
            </motion.p>
            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <a href="https://github.com/happiness-cheng" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-2">
                <Code size={18} /> GitHub
              </a>
              <a href="mailto:liuguanyi561@gmail.com"
                className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-2">
                <Mail size={18} /> 联系我
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-white/40 text-sm">↓ 向下滚动探索</span>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold text-white mb-6">关于我</h2>
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-4xl shadow-lg shadow-pink-500/30">
                ‍
              </div>
              <div className="text-white/80 space-y-2">
                <p>擅长 C++ 高并发系统，有完整全链路项目经验。</p>
                <p>能独立从代码到云端部署，方向 Infra / Streaming + AI。</p>
                <div className="flex gap-8 pt-4">
                  <Stat label="项目" value="4+" />
                  <Stat label="峰值 QPS" value="17K+" />
                  <Stat label="测试用例" value="114" />
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white mb-12 text-center"
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
              delay={0.15}
            />
            <ProjectCard
              title="knowledge-base"
              desc="AI 驱动的个人知识库"
              tags={['React', 'FastAPI', 'MySQL', 'ChromaDB', 'RAG', 'Agent']}
              metrics={[{ label: '测试用例', value: '114' }, { label: 'API 接口', value: '29' }, { label: '搜索', value: '向量 RAG' }]}
              href="https://github.com/happiness-cheng/knowledge-base"
              icon=" "
              delay={0.3}
            />
            <ProjectCard
              title="ai-trader"
              desc="AI 自动交易系统"
              tags={['Python', '同花顺模拟盘', 'MiMo API', '飞书推送']}
              metrics={[{ label: '交易', value: '自动下单' }, { label: '通知', value: '飞书推送' }, { label: '分析', value: 'AI 行情' }]}
              href="https://github.com/happiness-cheng/ai-trader"
              icon=" "
              delay={0.45}
            />
          </div>
        </section>

        {/* Timeline / Experience Section */}
        <section className="py-20 px-4 md:px-8 max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            时间线
          </motion.h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />
            <TimelineItem year="2024" title="入学广东海洋大学" desc="软件工程本科，开始系统学习 Infra / Streaming" />
            <TimelineItem year="2025 Q1" title="event_collector" desc="独立完成 17K+ QPS 高并发 TCP 事件采集服务" />
            <TimelineItem year="2025 Q2" title="event_stream_engine" desc="实时流处理引擎，gRPC + Lambda 架构" />
            <TimelineItem year="2025 Q2" title="knowledge-base" desc="AI 驱动个人知识库，React + FastAPI + RAG" />
            <TimelineItem year="2025 Q2" title="ai-trader" desc="同花顺模拟盘 AI 自动交易系统" isLast />
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold text-white mb-8">技术栈</h2>
            <SkillCategory title="语言">
              <SkillBadge name="C++17" color="blue" />
              <SkillBadge name="Python" color="yellow" />
              <SkillBadge name="JavaScript" color="orange" />
              <SkillBadge name="SQL" color="green" />
            </SkillCategory>
            <SkillCategory title="框架">
              <SkillBadge name="React" color="cyan" />
              <SkillBadge name="FastAPI" color="green" />
              <SkillBadge name="Boost.Asio" color="blue" />
              <SkillBadge name="gRPC" color="purple" />
            </SkillCategory>
            <SkillCategory title="基础设施">
              <SkillBadge name="Docker" color="blue" />
              <SkillBadge name="Azure" color="cyan" />
              <SkillBadge name="Linux" color="yellow" />
              <SkillBadge name="Git" color="orange" />
            </SkillCategory>
            <SkillCategory title="数据">
              <SkillBadge name="MySQL" color="blue" />
              <SkillBadge name="Redis" color="red" />
              <SkillBadge name="Kafka" color="gray" />
              <SkillBadge name="ClickHouse" color="yellow" />
            </SkillCategory>
          </GlassCard>
        </section>

        {/* Education Section */}
        <section className="py-20 px-4 md:px-8 max-w-3xl mx-auto">
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold text-white mb-6">教育背景</h2>
            <div className="flex gap-4">
              <div className="w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              <div>
                <span className="text-sm text-purple-300">2024 — 2028</span>
                <h3 className="text-xl font-bold text-white">广东海洋大学</h3>
                <p className="text-white/70">软件工程 · 本科</p>
                <p className="text-white/50 text-sm">方向：Infra / Streaming + AI</p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 md:px-8 max-w-3xl mx-auto mb-20">
          <GlassCard className="p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">联系我</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/happiness-cheng" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Code size={18} /> GitHub
              </a>
              <a href="mailto:liuguanyi561@gmail.com"
                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Mail size={18} /> 邮箱
              </a>
              <a href="resume.pdf" download
                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Download size={18} /> 下载简历
              </a>
            </div>
            <p className="mt-8 text-white/40 text-sm">感谢访问 </p>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-white/50">{label}</div>
    </div>
  );
}

function ProjectCard({
  title, desc, tags, metrics, href, icon, delay,
}: {
  title: string; desc: string; tags: string[];
  metrics: { label: string; value: string }[]; href: string; icon: string; delay: number;
}) {
  return (
    <GlassCard className="p-6" delay={delay}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-white/70 text-sm mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
            {tag}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-lg font-bold text-white">{m.value}</div>
            <div className="text-[10px] text-white/40">{m.label}</div>
          </div>
        ))}
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-purple-300 hover:text-purple-200 transition-colors">
        <ExternalLink size={14} /> 查看 GitHub
      </a>
    </GlassCard>
  );
}

function SkillCategory({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-sm font-semibold text-white/60 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export default App;
