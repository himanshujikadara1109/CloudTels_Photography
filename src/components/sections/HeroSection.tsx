import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{
          backgroundImage: "url('https://ext.same-assets.com/1216980263/3978611319.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="absolute inset-0 flex items-end md:items-center justify-center pb-16 md:pb-0">
        <div
          className={cn(
            "container-wide text-center md:text-left transition-all duration-1000 transform",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="max-w-md md:max-w-lg ml-auto mr-auto md:mr-0 md:ml-4 lg:ml-24">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-4">
            The Wizard Behind the Morden Scene
            </h2>
              
          </div>
        </div>
      </div>
    </section>
  );
}
