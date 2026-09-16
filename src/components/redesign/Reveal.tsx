'use client';

import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'section' | 'span' | 'li';
};

/**
 * Lightweight scroll-reveal wrapper.
 * Fades + lifts content into view once, respecting reduced-motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
