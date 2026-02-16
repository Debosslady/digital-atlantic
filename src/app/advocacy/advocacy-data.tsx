// components/sections/AdvocacySection.tsx

export default function AdvocacyData() {
  const causes = [
    {
      title: "Resource Control",
      icon: "🛢️🌴",
      description:
        "We demand full control over our natural resources so that the wealth generated from oil, gas, and other assets directly benefits Niger Delta communities rather than being siphoned away.",
    },
    {
      title: "Self-Determination",
      icon: "🗺️🏳️",
      description:
        "The people of the Niger Delta have the right to peacefully determine their political status and pursue their economic, social, and cultural development within a just constitutional framework.",
    },
    {
      title: "Peaceful Advocacy",
      icon: "🕊️📢",
      description:
        "Our movement is committed to non-violent, lawful, and constitutional methods — dialogue, education, digital campaigns, and community organizing — to achieve justice and equity.",
    },
  ];

  return (
    <section className="relative py-8 md:py-12 bg-[#e6f3ff] overflow-hidden">
      {/* Subtle wave background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#d1e8ff] to-transparent" />
        <svg
          className="absolute bottom-0 w-full h-32 text-[#cce4ff]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          fill="currentColor"
        >
          <path d="M0,0 C300,60 600,0 900,40 L1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Our Core Causes
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The foundation of the Digital Atlantic Republic movement rests on these three interconnected pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="
                bg-white/80 backdrop-blur-sm 
                rounded-2xl p-8 md:p-10 
                shadow-lg hover:shadow-xl 
                border border-primary/10 
                transition-shadow duration-300
                flex flex-col items-center text-center
              "
            >
              {/* Icon */}
              <div className="text-2xl md:text-3xl mb-4">{cause.icon}</div>

              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-5">
                {cause.title}
              </h3>

              <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                {cause.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}