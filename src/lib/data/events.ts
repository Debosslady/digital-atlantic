// data/events.ts

export interface Event {
  id: number;
  slug: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  fullDescription?: string;
  image: string;
  cta?: string;
  link?: string;
  attendees?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: 1,
    slug: "unity-town-hall-2026",
    title: "Niger Delta Unity Town Hall",
    date: "March 15, 2026",
    time: "10:00 AM – 3:00 PM WAT",
    location: "Port Harcourt, Rivers State (Hybrid: In-person & Virtual)",
    description:
      "Community leaders, youth groups, and stakeholders discuss constitutional pathways to resource control and equitable development. Guest speakers from across the six states.",
    fullDescription: `Detailed agenda:\n- 10:00 AM: Opening remarks\n- 10:30 AM: Keynote on constitutional rights\n...`,
    image: "/assets/images/Youth-Arise.jpg",
    cta: "Read More & Register",
  },
  {
    id: 2,
    slug: "youth-conference-2026",
    title: "Niger Delta Youth Conference",
    date: "March 15, 2026",
    time: "10:00 AM – 4:00 PM WAT",
    location: "Port Harcourt, Rivers State (Hybrid: In-person & Virtual)",
    description:
      "Empowering the next generation with skills for peaceful advocacy, digital organizing, and leadership.",
    fullDescription: `Program includes:\n- Leadership panels\n- Digital tools workshop\n- Networking session\n...`,
    image: "/assets/images/picsum5.jpg",
    cta: "Read More & Register",
  },
  {
    id: 3,
    slug: "advocacy-workshop-apr-2026",
    title: "Peaceful Advocacy Workshop Series",
    date: "April 5–7, 2026",
    time: "9:00 AM daily",
    location: "Yenagoa, Bayelsa State",
    description:
      "Three-day training on non-violent advocacy, digital organizing, and constitutional rights.",
    fullDescription: `Day 1: Theory & rights education\nDay 2: Digital tools & strategy\nDay 3: Action planning & certification\n...`,
    image: "/assets/images/oilcovered-mangrove.webp",
    cta: "Read More & Register",
  },
];

export const pastEvents: Event[] = [
  {
    id: 1,
    slug: "resource-equity-march-2026",
    title: "Resource Equity Awareness March",
    date: "January 20, 2026",
    location: "Warri, Delta State",
    description:
      "Over 2,000 participants marched peacefully to highlight the need for fair resource distribution.",
    image: "/assets/images/picsum4.jpg",
  },
  // ... more past events
];