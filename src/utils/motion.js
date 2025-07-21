// transition object with less bounce and shorter duration
export const transition = { type: "tween", ease: "easeOut", duration: 0.4 };

// Simple slide animation (minimal offset, subtle effect)
export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition,
    },
    exit: {
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      opacity: 0,
      transition,
    },
  };
};

// Soft fade-in with reduced delay
export const fadeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition },
  exit: { opacity: 0, transition },
};

// Subtle header text slide in
export const headTextAnimation = {
  initial: { x: 30, opacity: 0 },
  animate: { x: 0, opacity: 1, transition },
};

// Slight upward motion for content block
export const headContentAnimation = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition },
};

// Minimal container slide
export const headContainerAnimation = {
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1, transition },
  exit: { x: -30, opacity: 0, transition },
};
