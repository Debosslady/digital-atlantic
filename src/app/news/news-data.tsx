// components/sections/NewsSection.tsx

import Image from "next/image";
import Link from "next/link";

export default function NewsData() {
  // Sample data – in real project replace with data from CMS / API
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
    // You can add more items here
  ];

  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary">
            Latest News & Updates
          </h2>
          <p className="mt-4 text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Stay informed about our campaigns, community actions, statements, and progress toward justice and equity in the Niger Delta.
          </p>
        </div>

        {/* News Grid */}
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
                {/* Date */}
                <time className="text-sm text-secondary font-medium mb-3 block">
                  {item.date}
                </time>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-4 line-clamp-2">
                  {item.title}
                </h3>

                {/* Snippet */}
                <p className="text-foreground/75 mb-6 line-clamp-3 flex-grow">
                  {item.snippet}
                </p>

                {/* Read More */}
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

        {/* See All News CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/news"
            className="
              inline-flex items-center bg-primary hover:bg-primary/90 
              text-white font-semibold py-4 px-10 rounded-lg 
              text-lg transition-all duration-300 shadow-lg hover:shadow-xl
            "
          >
            See All News
          </Link>
        </div>
      </div>
    </section>
  );
}