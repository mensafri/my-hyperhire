'use client';

import { motion } from 'framer-motion';

interface TooltipProps {
  text: string;
  icon?: string;
}

const Tooltip = ({ text, icon }: TooltipProps) => {
  return (
    <motion.div
      className="bg-green-100 text-green-700 font-bold text-xs sm:text-sm py-2 px-4 rounded-full shadow-md relative inline-flex items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      {icon && <span className="text-green-500 text-base sm:text-lg mr-2">{icon}</span>}

      <span>{text}</span>

      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-100 rotate-45"></div>
    </motion.div>
  );
};

export default Tooltip;
