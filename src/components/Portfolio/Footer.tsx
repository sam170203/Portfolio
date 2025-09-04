import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Saksham Mudgal Sharma</h3>
            <p className="text-secondary-foreground/80">
              AI Enthusiast
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="mailto:mudgalsaksham@gmail.com"
              className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/sam170203"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/saksham-mudgal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm flex items-center justify-center">
            Made by Saksham Mudgal • {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;