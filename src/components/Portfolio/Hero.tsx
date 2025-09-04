import { Github, Linkedin, Mail } from "lucide-react";

// Use direct image URLs from Postimages.org
const heroBg = "https://i.postimg.cc/1RdVfYJ1/saksham-portfolio-pic.jpg";
const profilePicture = "https://i.postimg.cc/1RdVfYJ1/saksham-portfolio-pic.jpg";



const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-success rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <div className="mb-8">
            <img 
              src={profilePicture} 
              alt="Saksham Mudgal Sharma" 
              className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto object-cover shadow-xl border-4 border-white/20"
              loading="eager"
              onError={(e) => {
                console.error('Failed to load profile picture:', e);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Saksham Mudgal Sharma
          </h1>
          <div className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
            ML/AI Developer | Software Developer
          </div>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            B.Tech ICE student at NSUT with expertise in Python, AI/ML, and web development. 
            Passionate about building intelligent solutions and creating impactful software.
          </p>
        </div>


        <div className="animate-fade-in flex justify-center space-x-6" style={{ animationDelay: '0.6s' }}>
          <a 
            href="mailto:mudgalsaksham@gmail.com" 
            className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/sam170203" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/saksham-mudgal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;