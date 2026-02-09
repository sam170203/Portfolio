import { useEffect, useState } from "react";
import { Sparkles, Terminal, Code } from "lucide-react";
import InteractiveGrid from "./InteractiveGrid";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [textReveal, setTextReveal] = useState(false);

  useEffect(() => {
    // Netflix-style loading sequence
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
      
      // Staggered text reveal
      setTimeout(() => setTextReveal(true), 300);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('projects');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Netflix-style opening sequence */}
        <div className="relative">
          {/* Animated logo formation */}
          <div className="relative">
            {/* Background pulses */}
            <div className="absolute inset-0 w-32 h-32 bg-red-600 rounded-full blur-3xl animate-ping opacity-20"></div>
            <div className="absolute inset-0 w-24 h-24 bg-red-500 rounded-full blur-2xl animate-ping opacity-30 animation-delay-200"></div>
            <div className="absolute inset-0 w-16 h-16 bg-red-400 rounded-full blur-xl animate-ping opacity-40 animation-delay-400"></div>
            
            {/* Central icon */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <Terminal className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
          </div>
          
          {/* Loading text */}
          <div className="mt-8 text-center">
            <div className="text-red-500 text-sm font-mono animate-pulse">INITIALIZING...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Cinematic background effects */}
      <div className="absolute inset-0">
        {/* Interactive grid that glows on hover */}
        <InteractiveGrid />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-red-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-40 right-32 w-3 h-3 bg-blue-500 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {showContent && (
          <div className={`transition-all duration-1000 ${textReveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Cinematic name reveal */}
            <div className="mb-8">
              <h1 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-blue-500 leading-tight tracking-tight"
                style={{ fontFamily: 'Bebas Neue, cursive' }}
              >
                SAKSHAM
              </h1>
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 leading-tight tracking-tight mt-2"
                style={{ fontFamily: 'Bebas Neue, cursive' }}
              >
                SHARMA
              </h2>
            </div>

            {/* Animated subtitle */}
            <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${textReveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-red-500 animate-pulse" />
                <span className="text-red-400 font-mono text-sm">AI ENGINEER</span>
                <Code className="h-5 w-5 text-blue-500 animate-pulse" />
              </div>
              <p 
                className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Building intelligent systems, developer tools, and 
                <span className="text-blue-400 font-semibold"> real-world AI</span> applications
              </p>
            </div>

            {/* Premium CTA buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-500 ${textReveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={scrollToNext}
                className="group relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold text-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 overflow-hidden"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Code className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  VIEW PROJECTS
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                  CONTACT ME
                </span>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Ambient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>
    </section>
  );
};

export default Hero;