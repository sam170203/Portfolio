import { Github, Linkedin, Mail, Heart, Code, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 
              className="text-2xl font-black text-white mb-2"
              style={{ fontFamily: 'Bebas Neue, cursive' }}
            >
              SAKSHAM SHARMA
            </h3>
            <p className="text-gray-400 text-sm flex items-center gap-2 justify-center md:justify-start">
              <Terminal className="w-4 h-4 text-blue-500" />
              AI Engineer & Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Mail, href: "mailto:mudgalksaksham@gmail.com", label: "Email" },
              { icon: Github, href: "https://github.com/sam170203", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/saksham-mudgal-0670ab296", label: "LinkedIn" }
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Built with React, TypeScript & Tailwind</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>by Saksham • {currentYear}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;