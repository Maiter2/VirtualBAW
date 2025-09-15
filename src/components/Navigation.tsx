import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/fleet", label: "Fleet" },
    { href: "/routes", label: "Routes" },
    { href: "/staff", label: "Staff" },
    { href: "/rules", label: "Rules" },
  ];

  const externalLinks = [
    { href: "https://discord.gg/example", label: "Discord" },
    { href: "https://join.virtual-baw.com", label: "Join Now" },
    { href: "https://portal.virtual-baw.com", label: "Log In" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-primary font-bold text-xl">
            <Plane className="h-6 w-6" />
            <span className="font-heading">Virtual BAW</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-3 ml-6 border-l border-border pl-6">
              <a 
                href={externalLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {externalLinks[0].label}
              </a>
              <Button variant="outline" size="sm" asChild>
                <a href={externalLinks[2].href} target="_blank" rel="noopener noreferrer">
                  {externalLinks[2].label}
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={externalLinks[1].href} target="_blank" rel="noopener noreferrer">
                  {externalLinks[1].label}
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-3 border-t border-border">
                <a 
                  href={externalLinks[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-3"
                >
                  {externalLinks[0].label}
                </a>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={externalLinks[2].href} target="_blank" rel="noopener noreferrer">
                      {externalLinks[2].label}
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={externalLinks[1].href} target="_blank" rel="noopener noreferrer">
                      {externalLinks[1].label}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;