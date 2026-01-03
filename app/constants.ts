// app/constants.ts

import React from 'react';
import Image from 'next/image';
import FeatureRecruiter1 from '@/public/images/feature-recruiter-1.png';
import FeatureRecruiter2 from '@/public/images/feature-recruiter-2.png';
import FeatureRecruiter3 from '@/public/images/feature-recruiter-3.png';
import FeatureSeeker1 from '@/public/images/feature-seeker-1.png';
import FeatureSeeker2 from '@/public/images/feature-seeker-2.png';
import FeatureSeeker3 from '@/public/images/feature-seeker-3.png';

import { 
  ListChecks, 
  Wrench, 
  CalendarCheck, 
  Activity, 
  FileText, 
  MessageCircle, 
  Repeat 
} from 'lucide-react';
import GoogleLogo from '@/public/google-logo.svg';

export type Mode = 'recruiter' | 'seeker';

const Icon = (component: any) => React.createElement(component, { size: 20 });
const BrandIcon = (src: any) => React.createElement(Image, { src, alt: "Brand Logo", width: 20, height: 20});

export const content = {
  recruiter: {
    hero: {
      badge: "For Recruiters",
      heading: "Automate your first round. Interview at scale.",
      subheading: "PreppleAI conducts autonomous, conversational technical screens so you can focus on the final candidates. Reduce time-to-hire by 70%.",
      ctaPrimary: "Request a Demo",
      ctaSecondary: "View Live Demo"
    },
    features: [
      {
        heading: "The AI Interviewer That Actually Listens",
        subheading: "Go beyond keyword matching. Prepple AI conducts natural, conversational interviews to assess soft skills, technical knowledge and cultural fit.",
        cards: [
          { title: "Detailed Sentiment Analysis", desc: "Get a breakdown of confidence, clarity, and tone—not just a transcript.", icon: Icon(ListChecks) },
          { title: "Full Customization", desc: "Align the AI's personality and questioning rigor with your specific company culture.", icon: Icon(Wrench) },
          { title: "Powered By Gemini & LiveKit", desc: "Built on Google’s latest multimodal models and LiveKit’s voice infrastructure.", icon: BrandIcon(GoogleLogo) },
          { title: "24/7 Availability", desc: "Candidates interview on their schedule, eliminating scheduling conflicts.", icon: Icon(CalendarCheck) }
        ]
      },
      {
        heading: "Find your next hire in 3 steps",
        steps: [
          { title: "Define the Role", desc: "Upload your Job Description, input AI instructions, and let Prepple handle the rest.", img: FeatureRecruiter1 },
          { title: "Deploy the Interview", desc: "Generate a unique invite link. Send it to one candidate or a thousand instantly.", img: FeatureRecruiter2 },
          { title: "Review Insights", desc: "Receive a ranked dashboard of top performers with scored technical and behavioral insights.", img: FeatureRecruiter3 }
        ]
      }
    ],
    trustBar: {
      header: "Engineered for high-volume and technical hiring",
      items: ["Junior Engineering Roles", "High-Volume Retail", "Customer Support Screening", "Internship Batches", "Remote/Global Teams", "University Admissions"]
    },
    cta: {
      heading: "Ready to modernize your hiring pipeline?",
      subheading: "Join the waitlist to get early access to unbiased, 24/7 automated screening.",
      button: "Join Waitlist"
    }
  },
  seeker: {
    hero: {
      badge: "For Job Seekers",
      heading: "Ace your next interview before you even step in the room",
      subheading: "Turn anxiety into confidence. Simulate real-world interviews customized to your target job, and get instant AI feedback.",
      ctaPrimary: "Start Practice Interview",
      ctaSecondary: "See it in Action"
    },
    features: [
      {
        heading: "The Toughest Interviewer You’ll Ever Love.",
        subheading: "Prepple isn’t just a script reader. It listens to your answers, challenges your logic, and adapts to your skill level.",
        cards: [
          { title: "Real-Time Feedback", desc: "Get instant scoring on your clarity, technical accuracy, and confidence.", icon: Icon(Activity) },
          { title: "Tailored Questions", desc: "We parse your specific Resume and the Job Description to ask exact questions.", icon: Icon(FileText) },
          { title: "Human-Like Interaction", desc: "Powered by Gemini 2.0 Flash, the conversation flows naturally with low latency.", icon: Icon(MessageCircle) },
          { title: "Unlimited Reps", desc: "Nervous about the 'Tell me about yourself' question? Practice it 50 times.", icon: Icon(Repeat) }
        ]
      },
      {
        heading: "From 'Applying' to 'Ready' in 3 Steps",
        steps: [
          { title: "1. Paste the Job", desc: "Paste the LinkedIn or Indeed URL. We analyze the requirements instantly.", img: FeatureSeeker1 },
          { title: "2. Add Your Context", desc: "Upload your Resume (PDF). Prepple aligns your experience with the job.", img: FeatureSeeker2 },
          { title: "3. Enter the Room", desc: "Connect via audio and face the AI. Treat it like the real thing.", img: FeatureSeeker3 }
        ]
      }
    ],
    trustBar: {
      header: "Perfect for practicing any interview style",
      items: ["Technical Whiteboarding", "Behavioral (STAR Method)", "Product Management Cases", "Marketing & Sales Pitch", "Junior Developer Roles", "Management Scenarios"]
    },
    cta: {
      heading: "Ready to crush your interview?",
      subheading: "No credit card required. No account needed to try. Just pure practice.",
      button: "Start Practicing Now"
    }
  }
};