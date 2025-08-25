import { motion } from "motion/react";

export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.1, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
