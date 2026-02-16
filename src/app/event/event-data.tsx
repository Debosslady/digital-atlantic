// app/events/page.tsx
import { CalendarDays, MapPin, Clock, Users } from "lucide-react"; // Install: npm install lucide-react
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Events & Campaigns | Digital Atlantic Republic",
  description:
    "Join upcoming events, town halls, awareness campaigns, and advocacy actions across the Niger Delta states. Stay informed and get involved in the movement for resource control and self-determination.",
  openGraph: {
    title: "Events & Campaigns – Digital Atlantic Republic",
    description: "Peaceful advocacy events uniting communities in Bayelsa, Rivers, Delta, Akwa Ibom, Edo, and Cross River.",
    images: ["/assets/images/events-og.jpg"], // Add a real hero image later
  },
};

const upcomingEvents = [
  {
    id: 1,
    title: "Niger Delta Unity Town Hall",
    date: "March 15, 2026",
    time: "10:00 AM – 3:00 PM WAT",
    location: "Port Harcourt, Rivers State (Hybrid: In-person & Virtual)",
    description:
      "Community leaders, youth groups, and stakeholders discuss constitutional pathways to resource control and equitable development. Guest speakers from across the six states.",
    image: "/assets/images/Youth-Arise.jpg",  
    cta: "Register Now",
    link: "/events/register/town-hall-2026",
    attendees: "Expected 500+",
  },
  {
    id: 2,
    title: "Niger Delta Youth Conference",
    date: "March 15, 2026",
    time: "10:00 AM – 4:00 PM WAT",
    location: "Port Harcourt, Rivers State (Hybrid: In-person & Virtual)",
    description:
      "Community leaders, youth groups, and stakeholders discuss constitutional pathways to resource control and equitable development. Guest speakers from across the six states.",
    image: "/assets/images/picsum5.jpg",  
    cta: "Register Now",
    link: "/events/register/town-hall-2026",
    attendees: "Expected 500+",
  },
  {
    id: 3,
    title: "Peaceful Advocacy Workshop Series",
    date: "April 5–7, 2026",
    time: "9:00 AM daily",
    location: "Yenagoa, Bayelsa State",
    description:
      "Three-day training on non-violent advocacy, digital organizing, and constitutional rights. Open to youth, women, and community organizers.",
    image: "/assets/images/oilcovered-mangrove.webp",
    cta: "Secure Your Spot",
    link: "/events/register/workshop-apr-2026",
    attendees: "Limited to 150 participants",
  },
];

const pastEvents = [
  {
    id: 1,
    title: "Resource Equity Awareness March",
    date: "January 20, 2026",
    location: "Warri, Delta State",
    description:
      "Over 2,000 participants marched peacefully to highlight the need for fair resource distribution and environmental protection.",
    image: "/assets/images/picsum4.jpg",
  }, 
  {
    id: 2,
    title: "Resource Equity Awareness March",
    date: "January 20, 2026",
    location: "Warri, Delta State",
    description:
      "Over 2,000 participants marched peacefully to highlight the need for fair resource distribution and environmental protection.",
    image: "/assets/images/picsum.jpg",
  }, 
];

export default function EventsData() {
  return (
    <main className="min-h-screen bg-background">
      
      <section className="relative py-10 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Events & Campaigns
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto">
            Join peaceful gatherings, workshops, town halls, and advocacy actions uniting the Niger Delta people for justice, equity, and shared prosperity.
          </p>
        </div>
      </section>
 
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-12 text-center">
            Upcoming Events
          </h2>

          {upcomingEvents.length === 0 ? (
            <p className="text-center text-xl text-foreground/70">
              No upcoming events scheduled yet. Check back soon or subscribe to our updates.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-primary/10 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative h-48 md:h-56">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                      {event.title}
                    </h3>

                    <div className="space-y-3 mb-6 text-foreground/80">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="w-5 h-5 text-secondary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-secondary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-secondary" />
                        <span>{event.location}</span>
                      </div>
                      {event.attendees && (
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-secondary" />
                          <span>{event.attendees}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-foreground/70 mb-8 flex-grow">
                      {event.description}
                    </p>

                    <Link
                      href={event.link}
                      className="
                        mt-auto bg-secondary hover:bg-secondary/90 
                        text-white font-semibold py-4 px-8 rounded-lg 
                        text-center transition-all duration-300 shadow-md hover:shadow-lg
                      "
                    >
                      {event.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events (Optional – Collapsible or separate) */}
      <section className="py-8 md:py-12 bg-secondary/5 border-t border-secondary/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-12 text-center">
            Past Campaigns & Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-primary/10"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={80}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-2">{event.date}</p>
                  <p className="text-foreground/80">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Don't Miss the Next Movement Milestone
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Subscribe to stay updated on all upcoming town halls, workshops, marches, and digital campaigns across the Niger Delta.
          </p>
          <Link
            href=""
            className="
              bg-accent hover:bg-accent/90 
              text-primary font-bold py-5 px:10 md:px-12 rounded-lg 
              text-md md:text-lg transition-all shadow-xl hover:shadow-2xl
            "
          >
            Get Event Updates & Join
          </Link>
        </div>
      </section>
    </main>
  );
}