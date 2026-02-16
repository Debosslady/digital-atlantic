"use client";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion"; 
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react"; 

const slides = [
  {
    title: "A New Dawn for the Niger Delta",
    subtitle: "Our Right. Our Future.",
    bg: "/assets/images/picsum.jpg",
  },
  {
    title: "Resource Control for Shared Prosperity",
    subtitle: "Empowering Communities, Protecting Our Wealth",
    bg: "/assets/images/picsum1.jpg",
  },
  {
    title: "Peaceful Self-Determination",
    subtitle: "A Constitutional and Digital Movement",
    bg: "/assets/images/picsum2.jpg",
  },
  {
    title: "Unity Across the Niger Delta",
    subtitle: "Bayelsa • Rivers • Delta • Akwa Ibom • Edo • Cross River",
    bg: "/assets/images/picsum3.jpg",
  },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="absolute inset-0 h-full w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full">
              <Image
                src={slide.bg}
                alt={`Background for ${slide.title} - Digital Atlantic Republic`}
                fill
                className="object-cover brightness-[0.75] contrast-[1.05]"
                priority={idx === 0}
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 pointer-events-none" />

              {/* Text Content - animated per slide */}
              <div className="relative z-20 flex h-full items-center justify-center text-center text-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                  <AnimatePresence mode="wait"> {/* Ensures old text exits before new enters */}
                    <motion.div
                      key={idx} // Key change triggers exit/enter animation
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="max-w-5xl mx-auto"
                    >
                      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-6 drop-shadow-2xl">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl lg:text-3xl font-light mb-10 drop-shadow-xl">
                        {slide.subtitle}
                      </p>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                          href=" "
                          className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Join the Movement
                        </Link>
                        <button
                          className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-accent/30"
                        >
                          Watch Our Story
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
 
    </section>
      
  );
}