import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/anim";

export const PageHero = ({ image, title, subtitle, crumb }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section className="page-hero" ref={ref} data-testid="page-hero">
      <motion.div className="page-hero__bg" style={{ y }}>
        <img src={image} alt={title} decoding="async" />
      </motion.div>
      <div className="page-hero__overlay" />
      <div className="page-hero__content container">
        <motion.div
          className="page-hero__crumb"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        >
          <Link to="/" data-testid="breadcrumb-home">Home</Link>
          <span>—</span>
          <span>{crumb}</span>
        </motion.div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            className="page-hero__title"
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: EASE }}
          >
            {title}
          </motion.h1>
        </div>
        <motion.p
          className="page-hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
