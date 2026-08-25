import React, { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Lightbox = ({ images, index, onClose, onNavigate }) => {
  const prev = useCallback(() => onNavigate((index - 1 + images.length) % images.length), [index, images.length, onNavigate]);
  const next = useCallback(() => onNavigate((index + 1) % images.length), [index, images.length, onNavigate]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const img = images[index];

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      data-testid="gallery-lightbox"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={img.src}
          alt={img.alt}
          className="lightbox__img"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
        />
      </AnimatePresence>
      <button className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Close" data-testid="lightbox-close">
        <X size={22} />
      </button>
      <button className="lightbox__btn lightbox__prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image" data-testid="lightbox-prev">
        <ChevronLeft size={22} />
      </button>
      <button className="lightbox__btn lightbox__next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image" data-testid="lightbox-next">
        <ChevronRight size={22} />
      </button>
      <div className="lightbox__caption">{img.alt}</div>
      <div className="lightbox__counter" data-testid="lightbox-counter">
        {index + 1} / {images.length}
      </div>
    </motion.div>
  );
};

export default Lightbox;
