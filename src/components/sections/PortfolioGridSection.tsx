import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    title: "Reva & Zach, Singapore",
    image: "https://ext.same-assets.com/1711872006/2113489572.jpeg",
    description: "An evening of love, style and blend of two cultures in the heart of Singapore.",
  },
  {
    id: 2,
    title: "Alia & Ranbir, Mumbai",
    image: "https://ext.same-assets.com/1711872006/952070374.jpeg",
    description: "Two of the greatest actors of this generation decided to get married in the simplest possible way.",
  },
  {
    id: 3,
    title: "Kiara & Siddharth",
    image: "https://ext.same-assets.com/1711872006/2130038669.jpeg",
    description: "A royal wedding combined with intimate celebration of love.",
  },
  {
    id: 4,
    title: "Joanna & Matt, Phuket",
    image: "https://ext.same-assets.com/1711872006/3589021643.jpeg",
    description: "Against the backdrop of a lush resort and on a floral altar adorned with blooms in every shade imaginable.",
  },
  {
    id: 5,
    title: "Raina & Darshan, Greece",
    image: "https://ext.same-assets.com/1711872006/2322887805.jpeg",
    description: "Surrounded by calm waters with clear skies above, Athens, Greece was a stunning location to host an elegant wedding.",
  },
  {
    id: 6,
    title: "Ananya & Jahan, Delhi",
    image: "https://ext.same-assets.com/1711872006/2483604219.jpeg",
    description: "In a beautiful historic monument and century, Ananya and Jahan gave their hand to each other.",
  },
  {
    id: 7,
    title: "Alya and Yahia, Dubai",
    image: "https://ext.same-assets.com/1711872006/3407641525.jpeg",
    description: "We can't stop thinking our own firsthand to be there for their special day.",
  },
  {
    id: 8,
    title: "Zina and Zain, Kashmir",
    image: "https://ext.same-assets.com/1711872006/2694507139.jpeg",
    description: "This wedding was surrounded with love amidst the stunning landscapes of Kashmir.",
  },
];

export function PortfolioGridSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.6;
      const element = document.getElementById("portfolio-grid-section");

      if (element && scrollPosition > element.offsetTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on first render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="portfolio-grid-section" className="bg-background py-16">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "group cursor-pointer overflow-hidden transition-all duration-700 transform",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12",
                {
                  "transition-delay-100": index === 1 || index === 5,
                  "transition-delay-200": index === 2 || index === 6,
                  "transition-delay-300": index === 3 || index === 7,
                }
              )}
            >
              <Link to={`/photography/${item.id}`}>
                <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
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
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/photography"
            className={cn(
              "inline-block border border-black px-8 py-3 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
