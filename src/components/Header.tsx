import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Muhammad Talha
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["about", "experience", "projects", "skills", "resume", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-muted-foreground hover:text-primary transition-smooth capitalize"
              >
                {id}
              </button>
            ))}
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Email Muhammad Talha"
              className="hover:text-primary"
              onClick={() =>
                window.open("mailto:muhammadtalhashahid2005@gmail.com", "_blank")
              }
            >
              <Mail size={18} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="GitHub profile"
              className="hover:text-primary"
              onClick={() =>
                window.open("https://github.com/RanaTalha04", "_blank")
              }
            >
              <Github size={18} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="LinkedIn profile"
              className="hover:text-primary"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/muhammadtaalhaa/",
                  "_blank"
                )
              }
            >
              <Linkedin size={18} />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={18} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {["about", "experience", "projects", "skills", "resume", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left text-muted-foreground hover:text-primary transition-smooth capitalize"
                >
                  {id}
                </button>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Email Muhammad Talha"
                  className="hover:text-primary"
                  onClick={() =>
                    window.open(
                      "mailto:muhammadtalhashahid2005@gmail.com",
                      "_blank"
                    )
                  }
                >
                  <Mail size={18} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="GitHub profile"
                  className="hover:text-primary"
                  onClick={() =>
                    window.open("https://github.com/RanaTalha04", "_blank")
                  }
                >
                  <Github size={18} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="LinkedIn profile"
                  className="hover:text-primary"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/muhammadtaalhaa/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin size={18} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
