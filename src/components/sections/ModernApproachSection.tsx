import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export function ModernApproachSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.75;
      const element = document.getElementById("modern-approach-section");

      if (element && scrollPosition > element.offsetTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="modern-approach-section"
      className="relative  py-24 overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center">
          {/* Left Image */}
          <div
            className={cn(
              "hidden md:block absolute left-0 w-1/3 -translate-x-1/4 z-0 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <img
              src="https://ext.same-assets.com/1216980263/3486571883.jpeg"
              alt="Wedding couple"
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* Right Image */}
          <div
            className={cn(
              "hidden md:block absolute right-0 w-1/3 translate-x-1/4 z-0 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <img
              src="https://ext.same-assets.com/1216980263/2629619107.jpeg"
              alt="Bride portrait"
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* Center Text */}
          <div
            className={cn(
              "relative z-10 bg-background/80 backdrop-blur-lg p-6 md:px-16 md:py-12 max-w-3xl text-center transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6 uppercase tracking-wider text-gray-800">
            "With a modern approach - bring your imagination into reality." <br />
              {/* <span className="text-2xl md:text-3xl font-serif italic text-accent">
              - bring your imagination into reality."
              </span> */}
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              "Cloud Tales stands as a benchmark in modern photography and cinematic storytelling, redefining the Indian wedding scene with every project. For nearly a decade, we've captured stories through timeless visuals — photographs and films that live on in the hearts and memories of thousands. Our work isn’t just about moments, it's about crafting legacy through every frame."
            </p>
            {/* <div className="flex justify-center mt-6">
              <img
                src="https://ext.same-assets.com/1216980263/2624008875.png"
                alt="Featured in Vogue"
                className="h-6"
              />
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
} 