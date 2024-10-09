/* Framer Variants */
export const variants = {
  // Scale animation
  scale: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  },

  // Move up animation
  moveUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },

  // move down animation
  moveDown: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },

  // Move left animation
  moveLeft: {
    initial: { x: 860, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },

  // Move right animation
  moveRight: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },

  // Rise animation
  rise: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
};

/* Framer transition */
export const transition = {
  scale: { duration: 0.9 },
  moveUp: { duration: 0.9, delay: 1 },
  moveDown: { duration: 0.9, delay: 1 },
  moveLeft: { duration: 0.9 },
  moveRight: { duration: 0.9 },
  rise: { duration: 2 },
};
