export const STAGGER_DELAY = 0.15;

export function transition(delay = 0) {
  return {
    duration: 0.5,
    ease: [0.05, 0.76, 0.27, 0.99],
    delay: delay + 0.1,
  };
}

const animations = {
  reveal: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 50,
    opacity: 0,
  },
};

export default animations;
