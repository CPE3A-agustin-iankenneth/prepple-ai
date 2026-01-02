// app/constants.ts

export type Mode = 'recruiter' | 'seeker';

export const content = {
  recruiter: {
    hero: {
      badge: "For Recruiters",
      heading: "Automate your first round. Interview at scale.",
      subheading: "Prepple AI conducts autonomous, conversational technical screens so you can focus on the final candidates. Reduce time-to-hire by 70%.",
      ctaPrimary: "Request a Demo",
      ctaSecondary: "View Live Demo"
    },
    features: [
      {
        heading: "The AI Interviewer That Actually Listens",
        subheading: "Go beyond keyword matching. Prepple AI conducts natural, conversational interviews to assess soft skills, technical knowledge and cultural fit.",
        cards: [
          { title: "Detailed Sentiment Analysis", desc: "Get a breakdown of confidence, clarity, and tone—not just a transcript." },
          { title: "Full Customization", desc: "Align the AI's personality and questioning rigor with your specific company culture." },
          { title: "Powered By Gemini & LiveKit", desc: "Built on Google’s latest multimodal models and LiveKit’s voice infrastructure." },
          { title: "24/7 Availability", desc: "Candidates interview on their schedule, eliminating scheduling conflicts." }
        ]
      },
      {
        heading: "Find your next hire in 3 steps",
        steps: [
          { title: "Define the Role", desc: "Upload your Job Description, input AI instructions, and let Prepple handle the rest." },
          { title: "Deploy the Interview", desc: "Generate a unique invite link. Send it to one candidate or a thousand instantly." },
          { title: "Review Insights", desc: "Receive a ranked dashboard of top performers with scored technical and behavioral insights." }
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
          { title: "Real-Time Feedback", desc: "Get instant scoring on your clarity, technical accuracy, and confidence." },
          { title: "Tailored Questions", desc: "We parse your specific Resume and the Job Description to ask exact questions." },
          { title: "Human-Like Interaction", desc: "Powered by Gemini 2.0 Flash, the conversation flows naturally with low latency." },
          { title: "Unlimited Reps", desc: "Nervous about the 'Tell me about yourself' question? Practice it 50 times." }
        ]
      },
      {
        heading: "From 'Applying' to 'Ready' in 3 Steps",
        steps: [
          { title: "1. Paste the Job", desc: "Paste the LinkedIn or Indeed URL. We analyze the requirements instantly.", img: "/step1.png" },
          { title: "2. Add Your Context", desc: "Upload your Resume (PDF). Prepple aligns your experience with the job.", img: "/step2.png" },
          { title: "3. Enter the Room", desc: "Connect via audio and face the AI. Treat it like the real thing.", img: "/step3.png" }
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