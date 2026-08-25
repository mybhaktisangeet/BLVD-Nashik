import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.35 });
  const markerTop = useTransform(progress, [0, 1], ["0%", "100%"]);
  const percent = useTransform(progress, (v) => `${Math.round(v * 100)}`);

  return (
    <div className="scroll-rail" aria-hidden="true" data-testid="scroll-progress">
      <div className="scroll-rail__track">
        <motion.div className="scroll-rail__fill" style={{ scaleY: progress }} />
      </div>
      <motion.div className="scroll-rail__marker" style={{ top: markerTop }}>
        <span className="scroll-rail__diamond" />
        <motion.span className="scroll-rail__pct">{percent}</motion.span>
      </motion.div>
    </div>
  );
};

export default ScrollProgress;
