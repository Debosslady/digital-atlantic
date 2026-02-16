// app/events/[slug]/page.tsx
import { pastEvents, upcomingEvents } from "@/lib/data/events";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// This would normally come from DB / API
// For demo, we simulate fetching by slug
const getEventBySlug = (slug: string) => {
  // In real app → fetch from database
  // Example: const event = await db.event.findUnique({ where: { slug } })

  const allEvents = [
    // copy upcomingEvents + pastEvents from above or fetch once
    ...upcomingEvents,
    ...pastEvents,
  ];

  return allEvents.find((e) => e.slug === slug) || null;
};

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Event Not Found</h1>
          <Link href="/events" className="text-secondary hover:underline">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
        {/* Back link */}
        <Link
          href="/events"
          className="inline-flex items-center text-secondary hover:text-secondary/80 mb-8"
        >
          ← Back to All Events
        </Link>

        {/* Hero / Cover Image */}
        <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            quality={85}
          />
        </div>

        {/* Content */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
          {event.title}
        </h1>

        <div className="flex flex-wrap gap-6 mb-10 text-foreground/80">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-secondary" />
            <span>{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span>{event.time}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-secondary" />
            <span>{event.location}</span>
          </div>
          {event.attendees && (
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-secondary" />
              <span>{event.attendees}</span>
            </div>
          )}
        </div>

        <div className="prose prose-lg md:prose-xl max-w-none text-foreground/90 leading-relaxed">
          <p>{event.fullDescription || event.description}</p>
          {/* Add more sections: agenda, speakers, venue map, registration instructions, etc. */}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/join" // or external registration link
            className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-white font-semibold py-4 px-12 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Register / Get Involved
          </Link>
        </div>
      </div>
    </main>
  );
}