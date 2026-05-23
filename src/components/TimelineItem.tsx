import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  desc: string;
  isLast?: boolean;
}

export default function TimelineItem({ year, title, desc, isLast = false }: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-12 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dot on the timeline line */}
      <div className={`absolute left-[11px] top-1.5 w-3 h-3 rounded-full border-2 ${
        isLast
          ? 'bg-pink-500 border-pink-300 shadow-[0_0_12px_rgba(236,72,153,0.6)]'
          : 'bg-purple-500 border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]'
      }`} />

      <span className="text-xs text-purple-300 font-mono">{year}</span>
      <h3 className="text-lg font-bold text-white mt-0.5">{title}</h3>
      <p className="text-sm text-white/60 mt-1">{desc}</p>
    </motion.div>
  );
}
