import animations, { transition } from "@constants/animations";
import { motion } from "framer-motion";

export default function Reveal({ delay, children, ...rest }) {
  return (
    <motion.div
      initial={animations.hidden}
      animate={animations.reveal}
      transition={transition(delay)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
