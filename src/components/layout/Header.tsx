import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "../../lib/utils";

const navLinks = [
  { label: "Photography", to: "/photography" },
  { label: "Films", to: "/films" },
  { label: "Contact Us", to: "/contact" },
  { label: "Editorial", to: "/editorial" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-0 bg-transparent">
      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="relative z-50 pl-4">
          <img
            src="src/img/logo/1.png"
            alt="Cloud Tales Logo"
            className="w-[40%] h-[40%] object-contain"
          />
        </Link>


        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-foreground/90 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-4 ml-4">
            {/* Instagram, Facebook, Twitter icons */}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="bg-gold-400 text-white px-5 py-2 rounded-sm hover:bg-gold-500 transition-colors ml-4"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center p-6 transition-all duration-300 ease-in-out lg:hidden",
            mobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center gap-8 text-xl">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/90 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Social icons */}
            <div className="flex items-center gap-6 mt-4">
              {/* Instagram, Facebook, Twitter icons */}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="bg-gold-400 text-white px-6 py-3 rounded-sm hover:bg-gold-500 transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get In Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
