import React, { ReactNode } from "react";
import { motion, AnimationProps, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface WhileInViewProps {
  variants: Variants;
  children: ReactNode;
  threshold?: number;
}

const WhileInView: React.FC<WhileInViewProps & AnimationProps> = ({
  variants,
  children,
  threshold = 0.5,
  ...rest
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default WhileInView;
