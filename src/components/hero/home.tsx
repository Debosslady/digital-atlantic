"use client";

import { motion } from "framer-motion";
import Hero from "./HeroSection";

export default function HomeData() {
  return (
    <main>
      <Hero />

      {/* New Value Section - close to / overlapping hero */}
      <section className="relative z-10 mt-2 md:mt-2 lg:mt-3 pb-16 md:pb-24 bg-gradient-to-b from-transparent to-background/80">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                icon: "👥",
                title: "People-Driven Movement",
                desc: "Built by and for the people of the Niger Delta, focused on unity and progress.",
              },
              {
                icon: "🕊️",
                title: "Peaceful & Constitutional",
                desc: "A non-violent, lawful advocacy for justice, equity, and representation.",
              },
              {
                icon: "🌍",
                title: "Digital & Global Vision",
                desc: "A modern digital movement connecting local voices to global platforms.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="bg-black/80 backdrop-blur-xl p-6 md:p-8 lg:p-10 rounded-2xl border border-white/15 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              >
                <div className="text-4xl md:text-5xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-accent text-center text-white">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg  text-center leading-relaxed text-white">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next sections like About, Advocacy, News, etc. */}
      {/* <AboutSection /> */}
      {/* ... */}
    </main>
  );
}