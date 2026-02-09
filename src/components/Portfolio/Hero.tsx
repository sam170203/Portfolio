import { Github, Linkedin, Mail, ArrowDown, Download, Sparkles } from "lucide-react";

// Use direct image URLs from Postimages.org
const heroBg = "https://i.postimg.cc/1RdVfYJ1/saksham-portfolio-pic.jpg";
const profilePicture = "https://i.postimg.cc/1RdVfYJ1/saksham-portfolio-pic.jpg";

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-10"></div>
      </div>
      
      {/* Floating Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float blur-xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full animate-float blur-xl opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-success rounded-full animate-float blur-xl opacity-20" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-20 w-20 h-20 bg-warning rounded-full animate-float blur-xl opacity-20" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up max-w-5xl mx-auto">
          {/* Profile Image with Enhanced Styling */}
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse-glow blur-2xl opacity-30"></div>
            <div className="relative glass-dark p-1 rounded-full">
              <img 
                src={profilePicture} 
                alt="Saksham Mudgal Sharma" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-portfolio-xl border-4 border-primary/20"
                loading="eager"
                onError={(e) => {
                  console.error('Failed to load profile picture:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Enhanced Title with Sparkles */}
          <div className="mb-6 relative inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient leading-tight">
                Saksham Mudgal Sharma
              </h1>
              <Sparkles className="h-6 w-6 text-accent animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Enhanced Subtitle */}
          <div className="text-xl md:text-2xl lg:text-3xl text-foreground mb-8 font-medium">
            <span className="text-primary">ML/AI Developer</span>
            <span className="mx-2 text-muted-foreground">|</span>
            <span className="text-accent">Software Engineer</span>
          </div>

          {/* Enhanced Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            B.Tech ICE student at{' '}
            <span className="text-gradient font-semibold">NSUT</span>
            {' '}with expertise in{' '}
            <span className="text-primary font-semibold">Python</span>
            {', '}
            <span className="text-accent font-semibold">AI/ML</span>
            {', and '}
            <span className="text-gradient font-semibold">Web Development</span>
            . Passionate about building intelligent solutions and creating impactful software that makes a difference.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-modern group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                Get In Touch
              </span>
            </button>
            <button 
              onClick={() => window.open('https://github.com/sam170203', '_blank')}
              className="btn-outline-modern group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Github className="h-5 w-5" />
                View GitHub
              </span>
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="animate-fade-in flex justify-center items-center gap-6" style={{ animationDelay: '0.6s' }}>
            <a 
              href="mailto:mudgalsaksham@gmail.com" 
              className="p-3 glass-dark rounded-full text-muted-foreground hover:text-primary hover:scale-110 transform transition-all duration-300 hover:shadow-glow"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/sam170203" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-dark rounded-full text-muted-foreground hover:text-primary hover:scale-110 transform transition-all duration-300 hover:shadow-glow"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/saksham-mudgal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-dark rounded-full text-muted-foreground hover:text-accent hover:scale-110 transform transition-all duration-300 hover:shadow-glow-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-all duration-300 animate-bounce group"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="h-6 w-6 group-hover:scale-110 transform transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;