'use client';

import Image from 'next/image';
import { Microphone, VideoCamera, PhoneDisconnect } from '@phosphor-icons/react';
import LogoIcon from '@/public/logo-icon.svg';

const barHeights = [0.35, 0.65, 0.9, 0.55, 0.75];

export function MockLiveInterview() {
  return (
    <div className="relative flex min-h-[200px] flex-col items-center justify-between bg-[#161922] px-6 py-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/25">
          <Image src={LogoIcon} alt="" aria-hidden className="h-5 w-5" />
        </div>
        <div className="flex h-12 items-end justify-center gap-1.5">
          {barHeights.map((h, i) => (
            <span
              key={i}
              className="w-1.5 rounded-full bg-primary/80 motion-safe:animate-pulse"
              style={{
                height: `${h * 48}px`,
                animationDelay: `${i * 120}ms`,
              }}
            />
          ))}
        </div>
        <p className="max-w-[28ch] text-center text-xs text-slate-400">
          Tell me about a time you had to make a trade-off under pressure.
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-slate-300">
          <Microphone size={16} weight="fill" aria-hidden />
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-slate-300">
          <VideoCamera size={16} weight="fill" aria-hidden />
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 text-red-400">
          <PhoneDisconnect size={16} weight="fill" aria-hidden />
        </span>
      </div>
    </div>
  );
}
