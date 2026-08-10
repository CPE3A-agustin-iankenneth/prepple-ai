'use client';

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { MockFrame } from './mock-frame';

type TiltDirection = 'left' | 'right';

const BASE_TILT = {
  left: { rotateX: 5, rotateY: -10 },
  right: { rotateX: 5, rotateY: 10 },
} as const;

export function TiltMockFrame({
  children,
  className,
  tiltDirection = 'left',
}: {
  children: React.ReactNode;
  className?: string;
  tiltDirection?: TiltDirection;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const base = BASE_TILT[tiltDirection];

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const mouseRotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), {
    stiffness: 260,
    damping: 28,
  });
  const mouseRotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-9, 9]), {
    stiffness: 260,
    damping: 28,
  });

  const rotateX = useTransform(mouseRotateX, (value) => value + base.rotateX);
  const rotateY = useTransform(mouseRotateY, (value) => value + base.rotateY);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  if (reduceMotion) {
    return (
      <div className={cn('mx-auto w-full max-w-2xl [perspective:1200px]', className)}>
        <div
          style={{
            transform: `rotateX(${base.rotateX}deg) rotateY(${base.rotateY}deg)`,
          }}
        >
          <MockFrame>{children}</MockFrame>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn('mx-auto w-full max-w-2xl [perspective:1200px]', className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="will-change-transform"
      >
        <MockFrame>{children}</MockFrame>
      </motion.div>
    </div>
  );
}
