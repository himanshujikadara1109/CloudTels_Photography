import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

export function ContactCTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.8;
      const element = document.getElementById("contact-cta-section");

      if (element && scrollPosition > element.offsetTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on first render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact-cta-section" className="bg-background py-20">
      <div className="container-wide">
        <div className="bg-gold-200/20 p-12 md:p-20 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bottom-0 w-1/2 hidden md:block">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://ext.same-assets.com/1711872006/1715305615.jpeg')",
                opacity: 0.8,
              }}
            />
          </div>

          <div className="relative z-10 max-w-lg">
            <h2
              className={cn(
                "text-3xl md:text-4xl font-serif mb-6 transition-all duration-1000 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Let's create memories that last forever
            </h2>
            <p
              className={cn(
                "text-foreground/70 mb-8 transition-all duration-1000 transform",
                isVisible ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8"
              )}
            >
              We're passionate about capturing your special moments in the most beautiful way possible.
              Contact us to discuss how we can turn your vision into timeless memories.
            </p>
            <div
              className={cn(
                "transition-all duration-1000 transform",
                isVisible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"
              )}
            >
              <Link
                to="/contact"
                className="bg-accent text-white px-8 py-3 inline-block rounded-sm hover:bg-gold-500 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
