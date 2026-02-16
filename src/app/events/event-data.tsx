// app/events/page.tsx
import { CalendarDays, MapPin, Clock, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Events & Campaigns | Digital Atlantic Republic",
  description: "Join upcoming events, town halls, awareness campaigns, and advocacy actions across the Niger Delta states.",
};

const upcomingEvents = [
  {
    id: 1,
    slug: "unity-town-hall-2026",
    title: "Niger Delta Unity Town Hall",
    date: "March 15, 2026",
    time: "10:00 AM – 3:00 PM WAT",
    location: "Port Harcourt, Rivers State (Hybrid)",
    description:
      "Community leaders, youth groups, and stakeholders discuss constitutional pathways to resource control and equitable development. Guest speakers from across the six states.",
    fullDescription: `Detailed agenda:\n- 10:00 AM: Opening remarks\n- 10:30 AM: Keynote on constitutional rights\n- ... (expand as needed)`,
    image: "/assets/images/Youth-Arise.jpg",
    cta: "Read More & Register",
  },
  {
    id: 2,
    slug: "youth-conference-2026",
    title: "Niger Delta Youth Conference",
    date: "March 15, 2026",
    time: "10:00 AM – 4:00 PM WAT",
    location: "Port Harcourt, Rivers State (Hybrid)",
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

const pastEvents = [
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
  // ...
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section – same improved style as About & News */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/events-hero-bg.jpg"
            alt="Niger Delta advocacy event gathering"
            fill
            className="object-cover brightness-[0.60] contrast-[1.1]"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold mb-6 drop-shadow-2xl">
            Events & Campaigns
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-light drop-shadow-lg leading-relaxed">
            Join peaceful gatherings, workshops, town halls, and advocacy actions uniting the Niger Delta people.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-12 text-center">
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    {event.title}
                  </h3>

                  <div className="space-y-3 mb-6 text-foreground/80 text-sm md:text-base">
                    <div className="flex items-center gap-3">
                      <CalendarDays className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="line-clamp-2">{event.location}</span>
                    </div>
                    {/* {event.attendees && (
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span>{event.attendees}</span>
                      </div>
                    )} */}
                  </div>

                  <p className="text-foreground/70 mb-8 flex-grow line-clamp-4">
                    {event.description}
                  </p>

                  <Link
                    href={`/events/${event.slug}`}
                    className="
                      mt-auto bg-secondary hover:bg-secondary/90 
                      text-white font-semibold py-4 px-8 rounded-lg 
                      text-center transition-all duration-300 shadow-md hover:shadow-lg
                    "
                  >
                    {event.cta || "Read More"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 md:py-24 bg-secondary/5 border-t border-secondary/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-12 text-center">
            Past Campaigns & Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    quality={80}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-2">{event.date}</p>
                  <p className="text-foreground/80 line-clamp-3 mb-4">
                    {event.description}
                  </p>
                  <Link
                    // href='{`/events/${event.slug}`}'
                    href=''
                    className="text-secondary hover:text-secondary/80 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Don't Miss the Next Milestone
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Subscribe to stay updated on upcoming town halls, workshops, marches, and digital campaigns.
          </p>
          <Link
            href="/join"
            className="bg-accent hover:bg-accent/90 text-primary font-bold py-5 px-12 rounded-lg text-lg transition-all shadow-xl hover:shadow-2xl"
          >
            Get Updates & Join
          </Link>
        </div>
      </section>
    </main>
  );
}