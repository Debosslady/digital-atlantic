"use client";

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Digital Atlantic Republic",
  description:
    "Learn about the Digital Atlantic Republic – a peaceful, people-driven movement advocating for constitutional rights, resource control, and self-determination in the Niger Delta.",
  openGraph: {
    title: "About the Digital Atlantic Republic",
    description:
      "A modern digital movement for the Niger Delta people: unity, justice, and shared prosperity.",
    images: ["/assets/images/og-about.jpg"],
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-background">
   
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
        <div className="container mx-auto py-10 md:py-12 px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto">
            The Digital Atlantic Republic is a peaceful movement for the Niger Delta people, advocating 
            constitutional rights, resource control, and self-determination. Our mission spans Bayelsa, Rivers, Delta, Akwa Ibom, Edo, and Cross River States.
          </p>
        </div>
      </section>

      {/* Main Content – Two Column Layout */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="space-y-4 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">
                Our Story & Mission
              </h2>

              <div className="prose prose-lg md:prose-xl text-foreground/90 leading-relaxed">
                <p>
                  The Digital Atlantic Republic is a peaceful movement for the Niger Delta people,
                  advocating constitutional rights, resource control, and self-determination.
                </p>
                <p>
                  Our mission spans Bayelsa, Rivers, Delta, Akwa Ibom, Edo, and Cross River States.
                  We are built by and for the communities of the region — focused on unity,
                  progress, justice, equity, and fair representation.
                </p>
                <p>
                  Through a modern digital platform, we connect local voices to global
                  conversations, ensuring our demands for shared prosperity and environmental
                  protection are heard loud and clear — always through non-violent, lawful, and
                  constitutional means.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/join"
                  className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Join the Movement Today
                  <span className="ml-3">→</span>
                </Link>
              </div>
            </div>

            {/* Map Illustration Column */}
            <div className="relative w-full min-h-[350px] md:min-h-[450px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-primary/20 order-1 lg:order-2">
              <Image
                src="/assets/images/ndelta-map.jpg"
                alt="Outline map of Nigeria highlighting the Niger Delta region including Bayelsa, Rivers, Delta, Akwa Ibom, Edo, and Cross River States"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Commitment Callout */}
      <section className="py-16 bg-secondary/5 border-t border-secondary/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-8">
            Our Core Commitment
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 leading-relaxed">
            We stand for peace, constitutional advocacy, resource equity, and a future where the
            wealth of the Niger Delta benefits its people first.
          </p>
        </div>
      </section>
    </main>
  );
}