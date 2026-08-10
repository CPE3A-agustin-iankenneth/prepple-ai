'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.85, 0.4]);

  return (
    <section ref={ref} className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={reduceMotion ? undefined : { y, opacity }}
      >
        <Image
          src="/images/landing-hero-nature.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0c0e14]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0e14]/40 via-[#0c0e14]/20 to-[#0c0e14]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,hsl(var(--primary)/0.12),transparent_60%)]" />
      </motion.div>

      <div className="relative z-10 flex min-h-[100dvh] flex-col">{children}</div>
    </section>
  );
}
