import React from 'react';
import {
  ListChecks,
  Wrench,
  CalendarCheck,
  Pulse,
  FileText,
  ChatCircle,
  ArrowsClockwise,
  Code,
  Storefront,
  Headset,
  GraduationCap,
  ChartLineUp,
  Gear,
  FirstAid,
  UsersThree,
  Chalkboard,
  Briefcase,
  TreeStructure,
  Handshake,
  ArrowsLeftRight,
  Student,
  Crown,
} from '@phosphor-icons/react';
import GoogleLogo from '@/public/google-logo.svg';
import Image from 'next/image';
import type { MockKey } from '@/components/landing/types';

export type Mode = 'recruiter' | 'seeker';

const Icon = (component: React.ComponentType<{ size?: number; weight?: 'regular' | 'bold' | 'light' }>) =>
  React.createElement(component, { size: 22, weight: 'light' });

const TrustIcon = (component: React.ComponentType<{ size?: number; weight?: 'regular' | 'bold' | 'light' }>) =>
  React.createElement(component, { size: 16, weight: 'light' });

const BrandIcon = (src: React.ComponentProps<typeof Image>['src']) =>
  React.createElement(Image, { src, alt: 'Google logo', width: 22, height: 22 });

export const content = {
  recruiter: {
    hero: {
      heading: 'Automate your first round. Interview at scale.',
      subheading:
        'Prepple runs conversational first-round screens so your team can focus on finalists, not scheduling bottlenecks. Early access is open now.',
      ctaPrimary: 'Join waitlist',
      ctaSecondary: 'View live demo',
    },
    features: [
      {
        heading: 'The AI interviewer that actually listens',
        subheading:
          'Go beyond keyword matching. Prepple conducts natural, conversational interviews to assess soft skills, technical knowledge, and cultural fit.',
        cards: [
          {
            title: 'Detailed sentiment analysis',
            desc: 'Get a breakdown of confidence, clarity, and tone, not just a transcript.',
            icon: Icon(ListChecks),
            span: 'lg' as const,
            mock: 'ai-report' as MockKey,
          },
          {
            title: 'Full customization',
            desc: "Align the AI's personality and questioning rigor with your company culture.",
            icon: Icon(Wrench),
            span: 'sm' as const,
          },
          {
            title: 'Powered by Gemini & LiveKit',
            desc: "Built on Google's multimodal models and LiveKit's voice infrastructure.",
            icon: BrandIcon(GoogleLogo),
            span: 'sm' as const,
          },
          {
            title: '24/7 availability',
            desc: 'Candidates interview on their schedule, eliminating scheduling conflicts.',
            icon: Icon(CalendarCheck),
            span: 'md' as const,
          },
        ],
      },
      {
        heading: 'Find your next hire in 3 steps',
        steps: [
          {
            title: 'Define the role',
            desc: 'Upload your job description, add AI instructions, and let Prepple handle the rest.',
            mock: 'create-room' as MockKey,
          },
          {
            title: 'Deploy the interview',
            desc: 'Generate a unique invite link. Send it to one candidate or a thousand instantly.',
            mock: 'rooms-pipeline' as MockKey,
          },
          {
            title: 'Review insights',
            desc: 'Receive a ranked dashboard of top performers with scored technical and behavioral insights.',
            mock: 'ranked-candidates' as MockKey,
          },
        ],
      },
    ],
    trustBar: {
      items: [
        { label: 'Junior engineering roles', icon: TrustIcon(Code) },
        { label: 'High-volume retail hiring', icon: TrustIcon(Storefront) },
        { label: 'Customer support screening', icon: TrustIcon(Headset) },
        { label: 'Campus hiring', icon: TrustIcon(GraduationCap) },
        { label: 'Sales SDR screening', icon: TrustIcon(ChartLineUp) },
        { label: 'Ops and back-office', icon: TrustIcon(Gear) },
        { label: 'Healthcare admin', icon: TrustIcon(FirstAid) },
        { label: 'Seasonal surge hiring', icon: TrustIcon(UsersThree) },
      ],
    },
    cta: {
      heading: 'Ready to modernize your hiring pipeline?',
      subheading:
        'Join the waitlist for early access to autonomous first-round screening. Humans still make the final call.',
      button: 'Join waitlist',
    },
  },
  seeker: {
    hero: {
      heading: 'Practice the interview before the real one',
      subheading:
        'Turn nerves into readiness. Simulate role-specific voice interviews and get structured feedback. Join early access to start practicing.',
      ctaPrimary: 'Join early access',
      ctaSecondary: 'See it in action',
    },
    features: [
      {
        heading: 'The toughest interviewer you will ever appreciate',
        subheading:
          'Prepple is not a script reader. It listens to your answers, challenges your logic, and adapts to your skill level.',
        cards: [
          {
            title: 'Real-time feedback',
            desc: 'Get instant scoring on your clarity, technical accuracy, and confidence.',
            icon: Icon(Pulse),
            span: 'lg' as const,
            mock: 'live-interview' as MockKey,
          },
          {
            title: 'Tailored questions',
            desc: 'We parse your resume and the job description to ask relevant questions.',
            icon: Icon(FileText),
            span: 'sm' as const,
          },
          {
            title: 'Human-like interaction',
            desc: "Powered by Gemini's Live API. The conversation flows naturally with low latency.",
            icon: Icon(ChatCircle),
            span: 'sm' as const,
          },
          {
            title: 'Unlimited reps',
            desc: "Nervous about 'Tell me about yourself'? Practice it as many times as you need.",
            icon: Icon(ArrowsClockwise),
            span: 'md' as const,
          },
        ],
      },
      {
        heading: 'From applying to ready in 3 steps',
        steps: [
          {
            title: 'Paste the job',
            desc: 'Paste the LinkedIn or Indeed URL. We analyze the requirements instantly.',
            mock: 'seeker-entry' as MockKey,
          },
          {
            title: 'Add your context',
            desc: 'Upload your resume (PDF). Prepple aligns your experience with the job.',
            mock: 'create-room' as MockKey,
          },
          {
            title: 'Enter the room',
            desc: 'Connect via audio and face the AI. Treat it like the real thing.',
            mock: 'live-interview' as MockKey,
          },
        ],
      },
    ],
    trustBar: {
      items: [
        { label: 'Technical whiteboarding', icon: TrustIcon(Chalkboard) },
        { label: 'Behavioral STAR', icon: TrustIcon(ChatCircle) },
        { label: 'Product management cases', icon: TrustIcon(Briefcase) },
        { label: 'System design', icon: TrustIcon(TreeStructure) },
        { label: 'Customer success', icon: TrustIcon(Handshake) },
        { label: 'Career switchers', icon: TrustIcon(ArrowsLeftRight) },
        { label: 'Fresh graduates', icon: TrustIcon(Student) },
        { label: 'Leadership interviews', icon: TrustIcon(Crown) },
      ],
    },
    cta: {
      heading: 'Ready to walk in prepared?',
      subheading:
        'Join early access to practice voice interviews tailored to your target role. No credit card required.',
      button: 'Join early access',
    },
  },
};
