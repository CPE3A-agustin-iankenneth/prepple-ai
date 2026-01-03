// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import LogoIcon from "@/public/logo-icon.svg"
// import { ThemeSwitcher } from "@/components/theme-switcher";

// import HeroImage from "@/public/images/7.png";
// import SectionImage1 from "@/public/images/5.png";
// import SectionImage2 from "@/public/images/4.png";
// import SectionImage3 from "@/public/images/2.png";
// import GetStarted from "@/public/images/1.png";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen flex-col bg-background text-foreground">
//       <nav className="border-b text-white sticky top-0 z-40 bg-background/80 backdrop-blur-sm">
//         <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
//           <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
//             <Image src={LogoIcon} alt="Logo" className="h-8 w-8" />
//             <span className="text-foreground">Prepple AI</span>
//           </Link>
//           <nav className="flex items-center gap-3 text-sm font-medium">
//             <ThemeSwitcher />
//             <Button asChild variant="outline">
//               <Link href="/auth/login" className="text-foreground">Log In</Link>
//             </Button>
//             <Button asChild>
//               <Link href="/auth/sign-up">Sign Up</Link>
//             </Button>
//           </nav>
//         </div>
//       </nav>

//       <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-24 px-6 py-16">
//         <section className="flex flex-col items-center gap-6 text-center">
//           <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Prepple AI</h1>
//           <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
//             Automate first-round interviews with an AI HR partner that screens candidates, scores
//             performance, and delivers actionable insights to your hiring team.
//           </p>
//           <div className="mt-4 h-64 w-full max-w-4xl rounded-3xl shadow-2xl shadow-accent-foreground bg-muted sm:h-80 lg:h-96" >
//             <Image src={HeroImage} alt="Prepple AI demonstration" width={768} height={432} className="h-full w-full rounded-3xl object-cover"/>
//           </div>
//         </section>

//         <section id="features" className="flex flex-col gap-8">
//           <h2 className="text-center text-2xl font-semibold tracking-tight">Built for modern HR teams</h2>
//           <div className="grid gap-6 md:grid-cols-3">
//             <div className="flex flex-col gap-4 rounded-3xl border-2 border-border shadow-md p-8">
//               <div className="h-32 rounded-2xl bg-muted">
//                 <Image src={SectionImage1} alt="AI-Led Screening" className="h-full w-full rounded-2xl object-cover"/> 
//               </div>
//               <h3 className="text-xl font-semibold">AI-Led Screening</h3>
//               <p className="text-sm text-muted-foreground">
//                 Launch autonomous interview rooms that qualify applicants before your team steps in.
//               </p>
//             </div>
//             <div className="flex flex-col gap-4 rounded-3xl border-2 border-border shadow-md p-8">
//               <div className="h-32 rounded-2xl bg-muted">
//                 <Image src={SectionImage2} alt="In-Depth Analysis" className="h-full w-full rounded-2xl object-cover"/>
//               </div>
//               <h3 className="text-xl font-semibold">Actionable Reports</h3>
//               <p className="text-sm text-muted-foreground">
//                 Receive summaries with tone analysis, performance metrics, and recommended next steps.
//               </p>
//             </div>
//             <div className="flex flex-col gap-4 rounded-3xl border-2 border-border shadow-md p-8">
//               <div className="h-32 rounded-2xl bg-muted">
//                 <Image src={SectionImage3} alt="Candidate Experience" className="h-full w-full rounded-2xl object-cover"/>
//               </div>
//               <h3 className="text-xl font-semibold">Candidate Experience</h3>
//               <p className="text-sm text-muted-foreground">
//                 Offer jobseekers personalized feedback and preparation tools that keep them engaged.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section id="about" className="rounded-3xl w-3xl mx-auto bg-muted/60 p-10">
//           <div className="flex flex-col gap-16 md:flex-row md:items-center">
//             <div className="h-32 w-full rounded-2xl md:h-40 md:w-40">
//               <Image src={LogoIcon} alt="About Us" className="h-full w-full rounded-2xl object-fit"/>
//             </div>
//             <div className="flex-1 space-y-4">
//               <h2 className="text-2xl font-semibold tracking-tight">About Us</h2>
//               <p className="text-sm text-muted-foreground text-justify">
//                 Prepple AI is built for teams balancing high-volume hiring with candidate care. We combine
//                 real-time voice interviews, AI-powered analysis, and secure workflows so you can
//                 focus on conversations that matter most.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section id="cta" className="flex flex-col items-center gap-6 text-center">
//           <h2 className="text-2xl font-semibold tracking-tight">Get Started</h2>
//           <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
//             Create your first Prepple Room in minutes and start screening with AI-backed insights tailored to
//             your roles and company voice.
//           </p>
//           <div className="w-full max-w-3xl h-64 rounded-3xl bg-muted sm:h-90 shadow-xl shadow-accent-foreground/50 mb-4">
//             <Image src={GetStarted} alt="Get Started with Prepple AI" width={512} height={256} className="h-full w-full rounded-3xl object-contain"/> 
//           </div>
//           <Button asChild size="lg" >
//             <Link href="/auth/sign-up">Get Started</Link>
//           </Button>
//         </section>
//       </main>

//       <footer className="border-t bg-muted/50">
//         <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 py-6 text-center text-xs text-muted-foreground">
//           <Image src={LogoIcon} alt="Logo" className="h-4 w-4" />
//           <p>Prepple AI. Developed by GENI Solutions.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }


"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Play, Users, Briefcase } from 'lucide-react';
import { content, Mode } from './constants';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Button } from '@/components/ui/button';
import LandingHeroRecuiter  from '@/public/images/landing-hero-recruiter.png'
import LandingHeroSeeker from '@/public/images/landing-hero-seeker.png'
import LogoIcon from "@/public/logo-icon.svg"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger, useGSAP);


// 1. The Toggle Switch
const ModeToggle = ({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) => {
  return (
    <div className="relative flex items-center bg-slate-900/50 border border-slate-800 rounded-full p-1 w-fit mx-auto mb-8 backdrop-blur-sm">
      <button
        onClick={() => setMode('recruiter')}
        className={cn(
          "relative px-6 py-2 rounded-full text-sm font-medium transition-colors z-10",
          mode === 'recruiter' ? "text-white" : "text-slate-400 hover:text-slate-200"
        )}
      >
        {mode === 'recruiter' && (
          <motion.div
            layoutId="activePill"
            className="absolute inset-0 bg-blue-600 rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2"><Briefcase size={14} /> Recruiter Mode</span>
      </button>

      <button
        onClick={() => setMode('seeker')}
        className={cn(
          "relative px-6 py-2 rounded-full text-sm font-medium transition-colors z-10",
          mode === 'seeker' ? "text-white" : "text-slate-400 hover:text-slate-200"
        )}
      >
        {mode === 'seeker' && (
          <motion.div
            layoutId="activePill"
            className="absolute inset-0 bg-emerald-600 rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2"><Users size={14} /> Job Seeker Mode</span>
      </button>
    </div>
  );
};

// 2. Hero Section
const Hero = ({ mode }: { mode: Mode }) => {
  const data = content[mode].hero;
  
  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center pt-12 px-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.5 }}
        >
          <span className={cn(
            "inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 border",
            mode === 'recruiter' ? "bg-blue-900/30 border-blue-800 text-blue-300" : "bg-emerald-900/30 border-emerald-800 text-emerald-300"
          )}>
            {data.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            {data.heading}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {data.subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/auth/sign-up?type=${mode === 'recruiter' ? 'asAdmin' : 'asClient'}`}>
              <button className={cn(
                "px-8 py-4 rounded-lg font-semibold text-white transition-all transform hover:scale-105 flex items-center gap-2",
                mode === 'recruiter' ? "bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]" : "bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_30px_-5px_rgba(5,150,105,0.4)]"
              )}>
                {data.ctaPrimary} <ArrowRight size={18} />
              </button>
            </Link>
            <button className="px-8 py-4 rounded-lg font-semibold text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white transition-all flex items-center gap-2">
              <Play size={18} /> {data.ctaSecondary}
            </button>
          </div>
          <div className='mt-16'>
            <Image src={mode === 'recruiter' ? LandingHeroRecuiter : LandingHeroSeeker} alt="Hero Image" className='lg:rounded-t-2xl rounded-t-lg' />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// 3. Feature Grid
const FeatureGrid = ({ mode }: { mode: Mode }) => {
  const data = content[mode].features[0]; // First feature block

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.heading}</h2>
          <p className="text-slate-400 text-lg">{data.subheading}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.cards?.map((card, i) => (
            <motion.div
              key={card.title + mode} // Force re-render on mode switch
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 transition-colors group"
            >
              <div className={cn(
                "w-10 h-10 rounded-lg mb-4 flex items-center justify-center",
                mode === 'recruiter' ? "bg-blue-900/20 text-blue-400" : "bg-emerald-900/20 text-emerald-400"
              )}>
                {card.icon}
              </div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-blue-200 transition-colors">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. How It Works (ScrollTrigger)
const HowItWorks = ({ mode }: { mode: Mode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const data = content[mode].features[1];

  useGSAP(() => {
    const steps = gsap.utils.toArray<HTMLElement>('.step-card');
    
    steps.forEach((step, i) => {
      gsap.fromTo(step, 
        { opacity: 0.3, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, { scope: containerRef, dependencies: [mode] });

  return (
    <section ref={containerRef} className="py-24 bg-black relative overflow-hidden">
        {/* Background Glow */}
        <div className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none",
            mode === 'recruiter' ? "bg-blue-900" : "bg-emerald-900"
        )} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-20">
          {data.heading}
        </h2>

        <div className="space-y-24">
          {data.steps?.map((step, i) => (
            <div key={i} className="step-card flex flex-col md:flex-row items-center gap-12 group">
              <div className={cn("flex-1", i % 2 === 1 ? "md:order-2" : "")}>
                 {/* Placeholder for the Image/UI representation */}
                 <Image src={step.img} alt={step.title} className={cn("rounded-2xl shadow-lg w-full h-[200px] md:h-[350px] object-cover", mode === 'recruiter' ? "object-top-left": "object-top")} />
              </div>
              <div className={cn("flex-1 space-y-4", i % 2 === 1 ? "md:order-1" : "")}>
                <div className={cn(
                    "text-6xl font-black opacity-20",
                    mode === 'recruiter' ? "text-blue-500" : "text-emerald-500"
                )}>0{i + 1}</div>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Trust Bar
const TrustBar = ({ mode }: { mode: Mode }) => {
  const data = content[mode].trustBar;
  return (
    <div className="py-12 border-y border-slate-900 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-8">
          {data.header}
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-50">
           {data.items.map((item, i) => (
             <span key={i} className="text-slate-300 font-semibold text-lg">{item}</span>
           ))}
        </div>
      </div>
    </div>
  );
};

// 6. CTA Footer
const FooterCTA = ({ mode }: { mode: Mode }) => {
  const data = content[mode].cta;
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{data.heading}</h2>
        <p className="text-xl text-slate-400 mb-10">{data.subheading}</p>
        <Link href={`/auth/sign-up?type=${mode === 'recruiter' ? 'asAdmin' : 'asClient'}`}>
          <button className={cn(
            "px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1",
            mode === 'recruiter' 
              ? "bg-white text-blue-900 hover:bg-blue-50" 
              : "bg-white text-emerald-900 hover:bg-emerald-50"
          )}>
            {data.button}
          </button>
        </Link>
      </div>
    </section>
  );
};


// --- Main Page Component ---
export default function LandingPage() {
  const [mode, setMode] = useState<Mode>('recruiter');

  return (
    <main className="min-h-screen bg-black text-slate-200 selection:bg-blue-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={cn(
            "absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[128px] opacity-20 transition-colors duration-1000",
             mode === 'recruiter' ? "bg-blue-600" : "bg-emerald-600"
        )} />
        <div className={cn(
            "absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[128px] opacity-20 transition-colors duration-1000",
             mode === 'recruiter' ? "bg-indigo-600" : "bg-teal-600"
        )} />
      </div>

      <div className="relative z-10">
        <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
          <div className='flex gap-2 items-center'>
            <Image src={LogoIcon} alt="Prepple AI Logo" className="inline-block w-6 h-6 mr-2" />
            <div className="text-xl font-bold text-white">Prepple<span className="text-slate-500">AI</span></div>
          </div>
           <Button asChild variant={"outline"}><Link href="/auth/login">Login</Link></Button>
        </nav>

        <div className="pt-8">
            <ModeToggle mode={mode} setMode={setMode} />
            <Hero mode={mode} />
            <TrustBar mode={mode} />
            <FeatureGrid mode={mode} />
            <HowItWorks mode={mode} />
            <FooterCTA mode={mode} />
        </div>

        <footer className="border-t border-slate-900 py-12 text-center text-slate-600 text-sm">
            © 2024 Prepple AI. Engineered for the future of work.
        </footer>
      </div>
    </main>
  );
}
