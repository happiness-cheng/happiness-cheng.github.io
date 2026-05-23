import { motion } from 'framer-motion';

const colorMap: Record<string, string> = {
  blue: 'from-blue-500/30 to-blue-600/10 border-blue-400/30 text-blue-200',
  yellow: 'from-yellow-500/30 to-yellow-600/10 border-yellow-400/30 text-yellow-200',
  orange: 'from-orange-500/30 to-orange-600/10 border-orange-400/30 text-orange-200',
  green: 'from-green-500/30 to-green-600/10 border-green-400/30 text-green-200',
  cyan: 'from-cyan-500/30 to-cyan-600/10 border-cyan-400/30 text-cyan-200',
  purple: 'from-purple-500/30 to-purple-600/10 border-purple-400/30 text-purple-200',
  red: 'from-red-500/30 to-red-600/10 border-red-400/30 text-red-200',
  gray: 'from-gray-500/30 to-gray-600/10 border-gray-400/30 text-gray-200',
};

export default function SkillBadge({ name, color = 'blue' }: { name: string; color?: string }) {
  const cls = colorMap[color] || colorMap.blue;
  return (
    <motion.span
      whileHover={{ scale: 1.1, y: -2 }}
      className={`inline-block px-3 py-1.5 rounded-lg bg-gradient-to-br border text-sm font-medium cursor-default ${cls}`}
    >
      {name}
    </motion.span>
  );
}
