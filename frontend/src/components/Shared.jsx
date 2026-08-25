import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, animate } from "framer-motion";
import { EASE } from "@/lib/anim";

export const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }
  }, [title, description]);
};

export const SectionLabel = ({ children, center }) => (
  <div className={`s-label ${center ? "s-label--center" : ""}`}>{children}</div>
);

export const GoldDivider = () => (
  <div className="gold-divider" aria-hidden="true">
    <span className="gold-divider__diamond" />
  </div>
);

export const SectionHead = ({ label, title, sub, center }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      className={`s-head ${center ? "s-head--center" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {label && <SectionLabel center={center}>{label}</SectionLabel>}
      <h2 className="s-head__title" dangerouslySetInnerHTML={{ __html: title }} />
      {sub && <p className="s-head__sub">{sub}</p>}
    </motion.div>
  );
};

export const CTAButton = ({ to, href, variant = "gold", children, testId, className = "", onClick }) => {
  const cls = `btn btn--${variant} ${className}`;
  if (href) {
    const external = href.startsWith("http");
    return (
      <a className={cls} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} data-testid={testId}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link className={cls} to={to} data-testid={testId}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} onClick={onClick} data-testid={testId}>
      {children}
    </button>
  );
};

export const AnimatedCounter = ({ value, suffix = "", duration = 2.2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20px 0px" });
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString("en-IN") + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, duration]);
  return <span ref={ref}>0{suffix}</span>;
};

export const ImageReveal = ({ src, alt, className = "", style }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <div ref={ref} className={`img-reveal ${className}`} style={style}>
      <motion.div
        className="img-reveal__mask"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          initial={{ scale: 1.18 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: EASE }}
        />
      </motion.div>
    </div>
  );
};

export const Reveal = ({ children, delay = 0, y = 50, className = "", ...rest }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const WhatsAppIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
