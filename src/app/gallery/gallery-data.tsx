// components/sections/MediaGallery.tsx

export default function MediaGallery() {
  const mediaItems = [
    {
      type: "image",
      src: "/assets/images/picsum3.jpg",
      alt: "Peaceful march in Port Harcourt calling for resource equity",
      caption: "Thousands join peaceful march in Port Harcourt for resource control",
      aspect: "aspect-[4/3]",
    },
    {
      type: "video",
      src: "/assets/videos/advocacy-workshop.mp4", // or YouTube/Vimeo embed URL
      alt: "Youth advocacy training session in Yenagoa",
      caption: "Young leaders learning digital organizing tools – Bayelsa workshop",
      aspect: "aspect-video",
      isVideo: true,
    },
    {
      type: "image",
      src: "/assets/images/picsum.jpg",
      alt: "Community members during environmental cleanup effort",
      caption: "Local volunteers participate in oil spill awareness and cleanup",
      aspect: "aspect-square",
    },
    {
      type: "image",
      src: "/assets/images/picsum2.jpg",
      alt: "Town hall meeting with representatives from six states",
      caption: "Stakeholders discuss constitutional pathways at unity town hall",
      aspect: "aspect-[3/4]",
    },
    {
      type: "image",
      src: "/assets/images/picsum4.jpg",
      alt: "Participants in digital advocacy training",
      caption: "Hands-on training: social media strategy for peaceful advocacy",
      aspect: "aspect-[4/5]",
    },
    // {
    //   type: "video",
    //   src: "/assets/videos/environmental-forum.mp4",
    //   alt: "Panel discussion on environmental justice",
    //   caption: "Forum highlights need for stronger protection laws – Akwa Ibom",
    //   aspect: "aspect-video",
    //   isVideo: true,
    // },
    // Add more items as needed
  ];

  return (
    <section className="py-8 md:py-14 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Our Vision in Pictures & Videos
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto">
            See the movement in action — peaceful gatherings, community efforts, youth empowerment, and voices from across the Niger Delta.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-3">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`
                group break-inside-avoid mb-6 rounded-2xl overflow-hidden 
                shadow-lg hover:shadow-2xl transition-all duration-300
                border border-primary/10 bg-white
              `}
            >
              <div className={`relative w-full ${item.aspect}`}>
                {item.isVideo ? (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-full object-cover"
                    poster="/assets/images/video-poster-placeholder.jpg" // optional thumbnail
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                )}

                {/* Hover Caption */}
                <div className="
                  absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 flex items-end p-6
                ">
                  <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href=" " 
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center bg-secondary hover:bg-secondary/90 
              text-white font-semibold py-4 px-10 rounded-lg 
              text-lg transition-all duration-300 shadow-lg hover:shadow-xl
            "
          >
            View More Media on Telegram
          </a>
        </div>
      </div>
    </section>
  );
}