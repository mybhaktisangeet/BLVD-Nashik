export const EASE = [0.16, 1, 0.3, 1];

export const fadeUp = (delay = 0, y = 50) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, amount: 0.15 },
};

export const staggerItem = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const pageTransition = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
  transition: { duration: 0.6, ease: EASE },
};
