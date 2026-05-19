"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type RevealOnScrollProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
};

export function RevealOnScroll({
  children,
  delay = 0,
  className,
  once = true,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.21, 0.61, 0.35, 1], delay }}
      variants={defaultVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
