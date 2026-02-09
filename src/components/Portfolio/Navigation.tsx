import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#about", label: "About", icon: Code },
    { href: "#skills", label: "Skills", icon: Sparkles },
    { href: "#projects", label: "Projects", icon: Code },
    { href: "#experience", label: "Experience", icon: Code },
    { href: "#achievements", label: "Achievements", icon: Sparkles },
    { href: "#contact", label: "Contact", icon: Code }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        element: document.querySelector(item.href)
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection("home");
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.substring(1));
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-dark shadow-portfolio-lg border-b border-border/50' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-lg font-bold text-gradient hover:scale-105 transform transition-all duration-300"
            >
              <div className="relative">
                <Code className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="hidden sm:inline">Saksham Mudgal</span>
              <span className="sm:hidden">SMS</span>
            </button>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`group relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                    }`}
                  >
                    <Icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{item.label}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Compact Desktop Navigation */}
            <div className="hidden md:flex lg:hidden items-center space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                    }`}
                    title={item.label}
                  >
                    <item.icon className="h-4 w-4" />
                  </button>
                );
              })}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden glass-dark hover:scale-110 transition-transform duration-300 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-foreground group-hover:scale-110 transition-transform" />
                ) : (
                  <Menu className="h-5 w-5 text-foreground group-hover:scale-110 transition-transform" />
                )}
                <div className="absolute -inset-2 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-background/95 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 glass-dark border-b border-border/50 shadow-portfolio-xl animate-slide-up">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`group flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-primary bg-primary/10 border border-primary/20' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                      }`}
                    >
                      <div className="relative">
                        <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        {isActive && (
                          <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-md"></div>
                        )}
                      </div>
                      <span className="text-lg">{item.label}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;