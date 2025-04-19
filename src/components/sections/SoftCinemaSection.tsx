import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

export function SoftCinemaSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.7;
      const element = document.getElementById("soft-cinema-section");
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
      id="soft-cinema-section"
      className="relative  text-white py-20"
      style={{
        backgroundImage: "url('/path-to-your-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Top Zigzag SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          className="w-full h-10"
        >
        </svg>
      </div>

      {/* Full-Width Video Frame with 21:9 Aspect Ratio */}
      <div
        className={cn(
          "relative w-full aspect-[21/9] transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        <video
          src="/videos/wedding-highlight.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Zigzag SVG */}
      <div className="w-full overflow-hidden leading-none -mb-1 rotate-180">
        <svg
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          className="w-full h-10"
        >
        </svg>
      </div>

      {/* Awards */}
      <div
        className={cn(
          "py-16 flex justify-center transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src="https://ext.same-assets.com/1216980263/3896730895.png"
              alt="Award"
              className="h-16 w-auto filter brightness-0 invert opacity-70"
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div
        className={cn(
          "pb-16 text-center transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"
        )}
      >
        <Link
          to="/films"
          className="inline-block border border-white px-8 py-3 text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          View All Films
        </Link>
      </div>
    </section>
  );
}
