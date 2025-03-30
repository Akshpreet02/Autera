import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItem {
  label: string;
  href: string;
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems: NavItem[] = [
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-gray-100 font-bold text-xl tracking-tight">Autera</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-gray-100 hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-normal transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-4">
              <Button 
                variant="default" 
                size="sm"
                className="btn-cta font-normal shadow-sm hover:shadow transition-all duration-200"
              >
                Get Started
              </Button>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background/95 backdrop-blur-sm transform transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 translate-y-0 shadow-lg" : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="px-4 pt-3 pb-5 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-normal text-gray-300 hover:text-gray-100 hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full text-center px-4 py-2 text-base font-normal rounded-md text-white btn-cta mt-6 shadow-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
