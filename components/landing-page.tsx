"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Play,
  Users,
  Briefcase,
} from '@phosphor-icons/react';
import { content, Mode } from '@/app/constants';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Button } from '@/components/ui/button';
import LogoIcon from "@/public/logo-icon.svg";
import { HeroParallax } from '@/components/landing/hero-parallax';
import { MockFrame } from '@/components/landing/mock-frame';
import { TiltMockFrame } from '@/components/landing/tilt-mock-frame';
import { HeroMock, LandingMock } from '@/components/landing/mocks';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger, useGSAP);

const signUpHref = (mode: Mode) =>
  `/auth/sign-up?type=${mode === 'recruiter' ? 'asAdmin' : 'asClient'}`;

const spring = { type: "spring" as const, stiffness: 260, damping: 28 };

const ModeToggle = ({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) => (
  <div
    className="flex w-fit items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.04] p-0.5 backdrop-blur-sm sm:gap-1 sm:p-1"
    role="tablist"
    aria-label="Audience"
  >
    {(['recruiter', 'seeker'] as const).map((tab) => {
      const isActive = mode === tab;
      const Icon = tab === 'recruiter' ? Briefcase : Users;
      const label =
        tab === 'recruiter'
          ? { short: 'Recruiters', full: 'For recruiters' }
          : { short: 'Seekers', full: 'For job seekers' };

      return (
        <button
          key={tab}
          role="tab"
          aria-selected={isActive}
          onClick={() => setMode(tab)}
          className={cn(
            "relative rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm",
            isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
          )}
        >
          {isActive && (
            <motion.div
              layoutId="activePill"
              className="absolute inset-0 rounded-full bg-primary/90 shadow-[0_0_20px_-4px_hsl(var(--primary)/0.5)]"
              transition={spring}
            />
          )}
          <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
            <Icon size={15} weight="light" aria-hidden />
            <span className="sm:hidden">{label.short}</span>
            <span className="hidden sm:inline">{label.full}</span>
          </span>
        </button>
      );
    })}
  </div>
);

const PrimaryCTA = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="group inline-flex h-12 items-center gap-3 rounded-full bg-primary pl-6 pr-1.5 text-base font-medium text-primary-foreground transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-primary/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0e14]"
  >
    {children}
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
      <ArrowRight size={16} weight="bold" aria-hidden />
    </span>
  </Link>
);

const HeroSection = ({ mode }: { mode: Mode }) => {
  const data = content[mode].hero;
  const trustData = content[mode].trustBar;

  return (
    <HeroParallax>
      <div className="flex flex-1 flex-col items-center justify-center px-6 pt-20 text-center md:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl"
          >
            <h1 className="font-serif text-balance mb-5 text-[2.25rem] font-medium leading-[1.08] tracking-[-0.03em] text-white md:text-5xl lg:text-[3.25rem]">
              {data.heading}
            </h1>
            <p className="text-pretty mx-auto mb-8 max-w-[38ch] text-base leading-[1.7] text-slate-300 md:text-lg">
              {data.subheading}
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryCTA href={signUpHref(mode)}>{data.ctaPrimary}</PrimaryCTA>
              <Button
                id="landing-live-demo"
                type="button"
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/12 bg-white/[0.03] px-6 text-base text-slate-200 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white active:scale-[0.98]"
              >
                <Play size={18} weight="fill" aria-hidden />
                {data.ctaSecondary}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 px-6 pb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <MockFrame className="max-w-xl">
              <HeroMock mode={mode} />
            </MockFrame>
          </motion.div>
        </AnimatePresence>
      </div>

      <TrustBar items={trustData.items} />
    </HeroParallax>
  );
};

const bentoSpanClass = {
  lg: 'md:col-span-2 lg:row-span-2',
  sm: '',
  md: 'md:col-span-2 lg:col-span-3',
} as const;

const FeatureGrid = ({ mode }: { mode: Mode }) => {
  const data = content[mode].features[0];

  return (
    <section className="relative border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl md:mb-20">
          <h2 className="font-serif text-balance mb-4 text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
            {data.heading}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-slate-400">
            {data.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.cards?.map((card, i) => (
            <motion.article
              key={card.title + mode}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'group flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0c0e14] transition-all duration-300 hover:border-primary/25',
                card.span && bentoSpanClass[card.span],
                card.span === 'lg' && 'md:min-h-[320px] lg:min-h-[380px]'
              )}
            >
              {'mock' in card && card.mock && card.span === 'lg' ? (
                <div className="flex flex-1 flex-col">
                  <div className="overflow-hidden rounded-t-2xl border-b border-white/[0.06]">
                    <LandingMock mock={card.mock} compact />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
                      {card.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{card.desc}</p>
                  </div>
                </div>
              ) : (
                <div className={cn('p-6', card.span === 'lg' && 'md:p-8')}>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
                    {card.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{card.desc}</p>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = ({ mode }: { mode: Mode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const data = content[mode].features[1];

  useGSAP(() => {
    const steps = gsap.utils.toArray<HTMLElement>('.step-card');

    steps.forEach((step) => {
      gsap.fromTo(
        step,
        { opacity: 0.35, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            end: 'top 55%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, { scope: containerRef, dependencies: [mode] });

  return (
    <section ref={containerRef} className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-balance mb-16 text-center text-3xl font-medium tracking-[-0.02em] text-white md:mb-24 md:text-4xl">
          {data.heading}
        </h2>

        <div className="space-y-24 md:space-y-32">
          {data.steps?.map((step, i) => (
            <div
              key={step.title}
              className="step-card grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              <div className={cn(i % 2 === 1 && 'md:order-2')}>
                <TiltMockFrame tiltDirection={i % 2 === 0 ? 'right' : 'left'}>
                  <LandingMock mock={step.mock} />
                </TiltMockFrame>
              </div>
              <div className={cn('space-y-4', i % 2 === 1 && 'md:order-1')}>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold tabular-nums text-primary ring-1 ring-primary/25">
                  {i + 1}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-white">{step.title}</h3>
                <p className="text-pretty max-w-md text-lg leading-relaxed text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustBar = ({
  items,
}: {
  items: { label: string; icon: React.ReactNode }[];
}) => (
  <div className="relative mt-auto border-t border-white/[0.08] bg-[#0c0e14]/40 py-5 backdrop-blur-sm">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6">
      <span className="text-sm font-medium text-slate-400">Built for</span>
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <span
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-sm font-medium text-slate-200"
          >
            <span className="text-primary" aria-hidden>{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const FooterCTA = ({ mode }: { mode: Mode }) => {
  const data = content[mode].cta;

  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,hsl(var(--primary)/0.08),transparent)]"
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-balance mb-5 text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
          {data.heading}
        </h2>
        <p className="text-pretty mb-10 text-lg leading-relaxed text-slate-400">{data.subheading}</p>
        <PrimaryCTA href={signUpHref(mode)}>{data.button}</PrimaryCTA>
      </div>
    </section>
  );
};

export default function LandingPage() {
  const [mode, setMode] = useState<Mode>('recruiter');

  return (
    <main id="main-content" className="landing-grain relative min-h-dvh bg-[#0c0e14] text-slate-200 selection:bg-primary/30">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <div className="relative z-10">
        <header className="fixed top-0 z-30 w-full px-4 pt-5 md:px-6">
          <nav
            aria-label="Main"
            className="relative mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#0c0e14]/70 px-4 py-2.5 pl-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          >
            <Link href="/" className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-80">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/12 ring-1 ring-primary/20">
                <Image src={LogoIcon} alt="" aria-hidden className="h-4 w-4" />
              </div>
              <span className="hidden text-base font-semibold tracking-tight text-white sm:inline">Prepple</span>
            </Link>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <ModeToggle mode={mode} setMode={setMode} />
            </div>

            <Button
              asChild
              variant="outline"
              className="shrink-0 rounded-full border-white/12 bg-white/[0.04] transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] active:scale-[0.98]"
            >
              <Link href="/auth/login">Log in</Link>
            </Button>
          </nav>
        </header>

        <HeroSection mode={mode} />

        <div className="landing-grid-bg">
          <FeatureGrid mode={mode} />
          <HowItWorks mode={mode} />
          <FooterCTA mode={mode} />

          <footer className="border-t border-white/[0.06] px-6 py-12">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-slate-500 md:flex-row">
              <p>© {new Date().getFullYear()} Prepple. Autonomous first-round interviews.</p>
              <div className="flex gap-6">
                <Link href="/auth/login" className="transition-colors hover:text-slate-300">
                  Log in
                </Link>
                <Link href="#" className="transition-colors hover:text-slate-300">
                  Privacy
                </Link>
                <Link href="#" className="transition-colors hover:text-slate-300">
                  Terms
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
