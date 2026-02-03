import { Transition } from "framer-motion";

export const animationTransition = (duration = 2): Transition<any> => ({
  duration,
  ease: "easeInOut",
});
export const animationViewPort = { once: true };
