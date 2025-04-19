import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Weddings", "Pre-wedding", "Events", "Commercial"];

const portfolioItems = [
  {
    id: 1,
    title: "Reva & Zach, Singapore",
    category: "Weddings",
    image: "https://ext.same-assets.com/1711872006/2113489572.jpeg",
    description: "An evening of love, style and blend of two cultures in the heart of Singapore.",
  },
  {
    id: 2,
    title: "Alia & Ranbir, Mumbai",
    category: "Weddings",
    image: "https://ext.same-assets.com/1711872006/952070374.jpeg",
    description: "Two of the greatest actors of this generation decided to get married in the simplest possible way.",
  },
  {
    id: 3,
    title: "Kiara & Siddharth",
    category: "Weddings",
    image: "https://ext.same-assets.com/1711872006/2130038669.jpeg",
    description: "A royal wedding combined with intimate celebration of love.",
  },
  {
    id: 4,
    title: "Joanna & Matt, Phuket",
    category: "Pre-wedding",
    image: "https://ext.same-assets.com/1711872006/3589021643.jpeg",
    description: "Against the backdrop of a lush resort and on a floral altar adorned with blooms in every shade imaginable.",
  },
  {
    id: 5,
    title: "Raina & Darshan, Greece",
    category: "Pre-wedding",
    image: "https://ext.same-assets.com/1711872006/2322887805.jpeg",
    description: "Surrounded by calm waters with clear skies above, Athens, Greece was a stunning location to host an elegant wedding.",
  },
  {
    id: 6,
    title: "Ananya & Jahan, Delhi",
    category: "Events",
    image: "https://ext.same-assets.com/1711872006/2483604219.jpeg",
    description: "In a beautiful historic monument and century, Ananya and Jahan gave their hand to each other.",
  },
  {
    id: 7,
    title: "Alya and Yahia, Dubai",
    category: "Commercial",
    image: "https://ext.same-assets.com/1711872006/3407641525.jpeg",
    description: "We can't stop thinking our own firsthand to be there for their special day.",
  },
  {
    id: 8,
    title: "Zina and Zain, Kashmir",
    category: "Weddings",
    image: "https://ext.same-assets.com/1711872006/2694507139.jpeg",
    description: "This wedding was surrounded with love amidst the stunning landscapes of Kashmir.",
  },
  {
    id: 9,
    title: "Corporate Event",
    category: "Commercial",
    image: "https://ext.same-assets.com/1711872006/1400140824.jpeg",
    description: "A high-profile corporate event in the heart of Mumbai's financial district.",
  },
  {
    id: 10,
    title: "Fashion Photoshoot",
    category: "Commercial",
    image: "https://ext.same-assets.com/1711872006/1988666452.jpeg",
    description: "A creative fashion photoshoot for a renowned designer's latest collection.",
  },
  {
    id: 11,
    title: "Annual Charity Gala",
    category: "Events",
    image: "https://ext.same-assets.com/1711872006/806206924.jpeg",
    description: "Coverage of the annual charity gala that raised funds for children's education.",
  },
  {
    id: 12,
    title: "Product Launch",
    category: "Commercial",
    image: "https://ext.same-assets.com/1711872006/1715305615.jpeg",
    description: "Capturing the excitement at the launch of a new luxury product line.",
  },
];

export function PhotographyPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container-wide">
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center">Our Photography</h1>
        <p className="text-foreground/80 text-center max-w-3xl mx-auto mb-12">
          Explore our portfolio of beautiful moments captured through our lens. From intimate weddings to grand celebrations,
          each photograph tells a unique story of love, connection, and emotion.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-sm transition-colors ${
                selectedCategory === category
                  ? "bg-accent text-white"
                  : "bg-transparent text-foreground/80 hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <Link to={`/photography/${item.id}`}>
                <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </Link>
              <div className="mt-4">
                <h3 className="text-xl font-serif">{item.title}</h3>
                <p className="text-foreground/60 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
