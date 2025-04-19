import { useState } from "react";

// Example video items
const videoItems = [
  {
    id: 1,
    title: "Joanna & Matt",
    location: "Phuket, Thailand",
    thumbnail: "https://ext.same-assets.com/1711872006/1988666452.jpeg",
    description: "A beautiful beach wedding with intimate moments captured from dawn to dusk."
  },
  {
    id: 2,
    title: "Raina & Darshan",
    location: "Athens, Greece",
    thumbnail: "https://ext.same-assets.com/1711872006/1400140824.jpeg",
    description: "A destination wedding surrounded by Mediterranean beauty and cultural richness."
  },
  {
    id: 3,
    title: "Love & Second Endings",
    location: "Goa, India",
    thumbnail: "https://ext.same-assets.com/1711872006/3407641525.jpeg",
    description: "The beautiful journey of finding love again and celebrating it by the ocean."
  },
  {
    id: 4,
    title: "Forever Yours",
    location: "Udaipur, India",
    thumbnail: "https://ext.same-assets.com/1711872006/806206924.jpeg",
    description: "A royal celebration of love in the city of lakes and palaces."
  },
  {
    id: 5,
    title: "Zara & Kabir",
    location: "Delhi, India",
    thumbnail: "https://ext.same-assets.com/1711872006/2483604219.jpeg",
    description: "A grand celebration that blended traditional customs with modern aesthetics."
  },
  {
    id: 6,
    title: "Maya & Arjun",
    location: "Bali, Indonesia",
    thumbnail: "https://ext.same-assets.com/1711872006/2322887805.jpeg",
    description: "An exotic destination wedding among lush rice terraces and ocean views."
  },
];

export function FilmsPage() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container-wide">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-center">Cinematic Films</h1>
        <p className="text-foreground/80 text-center max-w-3xl mx-auto mb-16">
          Our cinematic approach captures the story, emotions, and atmosphere that makes each celebration unique.
          Experience the magic of your special day through our artistic lens.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {videoItems.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/40 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-serif">{video.title}</h3>
                <p className="text-accent mt-1">{video.location}</p>
                <p className={`text-foreground/70 mt-3 transition-opacity duration-500 ${hoveredVideo === video.id ? 'opacity-100' : 'opacity-80'}`}>
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl font-serif mb-8">Want to book a custom cinematography package?</p>
          <a
            href="/contact"
            className="bg-accent text-white px-8 py-3 inline-block rounded-sm hover:bg-gold-500 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
