// app/news/page.tsx

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "News & Updates | Digital Atlantic Republic",
  description:
    "Latest news, statements, campaigns, and progress reports from the Digital Atlantic Republic – peaceful advocacy for resource control and justice in the Niger Delta.",
  openGraph: {
    title: "News & Updates – Digital Atlantic Republic",
    description: "Stay informed about our peaceful movement for equity and self-determination.",
    images: ["/assets/images/news-hero-bg.jpg"], // optional OG image
  },
};

export default function NewsPage() {
  // Sample news data – replace with real CMS/API data in production
  const newsItems = [
    {
      id: 1,
      title: "Niger Delta Leaders Call for Urgent Resource Control Dialogue",
      snippet:
        "Community representatives from six states met in Port Harcourt to discuss constitutional pathways toward greater local control over natural resources...",
      image: "/assets/images/picsum.jpg",
      date: "February 10, 2026",
      link: "/news/resource-control-dialogue-2026",
    },
    {
      id: 2,
      title: "Digital Atlantic Republic Launches New Advocacy Training Series",
      snippet:
        "Free virtual and in-person workshops begin next month to equip youth with tools for peaceful, effective online and offline organizing...",
      image: "/assets/images/picsum3.jpg",
      date: "February 5, 2026",
      link: "/news/advocacy-training-series-launch",
    },
    {
      id: 3,
      title: "Environmental Groups Demand Accountability After Recent Oil Spill",
      snippet:
        "Joint statement calls for immediate cleanup, compensation, and stronger enforcement of environmental protection laws in affected communities...",
      image: "/assets/images/oilcovered-mangrove.webp",
      date: "January 28, 2026",
      link: "/news/oil-spill-accountability-statement",
    },
    // Add more real items here
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero/Header with background image + overlay */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/picsum.jpg" // ← Replace with a strong news-related image
            alt="Niger Delta community gathering or advocacy action"
            fill
            className="object-cover brightness-[0.60] contrast-[1.1]"
            priority
            quality={85}
            sizes="100vw"
          />
          {/* Dark overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />
        </div>

        {/* Content on top */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold mb-6 drop-shadow-2xl">
            Latest News & Updates
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-light drop-shadow-lg leading-relaxed">
            Stay informed about our campaigns, community actions, statements, and progress toward 
            justice, equity, and shared prosperity in the Niger Delta.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="
                  group bg-white rounded-2xl overflow-hidden 
                  shadow-md hover:shadow-xl border border-primary/10 
                  transition-all duration-300 flex flex-col h-full
                "
              >
                {/* Thumbnail */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={82}
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <time className="text-sm text-secondary font-medium mb-3 block">
                    {item.date}
                  </time>

                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-4 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-foreground/75 mb-6 line-clamp-3 flex-grow">
                    {item.snippet}
                  </p>

                  <Link
                    href={item.link}
                    className="
                      inline-flex items-center text-secondary hover:text-secondary/80 
                      font-medium transition-colors mt-auto
                    "
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* See All News CTA (optional if this is already the full news page) */}
          {/* <div className="mt-12 md:mt-16 text-center">
            <Link
              href="/news/archive" // or remove if this is the main news page
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Older News
            </Link>
          </div> */}
        </div>
      </section>
    </main>
  );
}