import { useState } from "react";
import { Github, ExternalLink, ArrowUpRight, Terminal, Activity, Bot } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      title: "CF CodeClimb",
      description: "Competitive programming analytics platform used by 4000+ users. Track ratings, analyze performance, and climb the ranks with data-driven insights.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Redis"],
      liveUrl: "https://cf-codeclimb.vercel.app/",
      githubUrl: "https://github.com/sam170203/Codeclimb-26.git",
      icon: <Terminal className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      stats: "4,000+ Users",
      featured: true
    },
    {
      title: "Diabetes Prediction Web App",
      description: "Machine learning powered diabetes prediction system with 94% accuracy. Uses ensemble methods and medical data analysis.",
      technologies: ["Python", "TensorFlow", "Flask", "React", "Scikit-learn"],
      liveUrl: "https://diabetes-frontend-mu.vercel.app/",
      githubUrl: "https://github.com/sam170203/diabetes-frontend.git",
      icon: <Activity className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "94% Accuracy",
      featured: true
    },
    {
      title: "PersonaGPT",
      description: "Multi-personality LLM chatbot with expert modes. Supports 10+ personas using OpenAI API, FastAPI, and LangChain.",
      technologies: ["Python", "OpenAI", "FastAPI", "LangChain", "React"],
      liveUrl: "https://genai-chatbot-smoky.vercel.app/",
      githubUrl: "https://github.com/sam170203/genai-chatbot.git",
      icon: <Bot className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "10+ Personalities",
      featured: true
    }
  ];

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-mono text-gray-400">FEATURED WORK</span>
          </div>
          <h2 
            className="text-5xl md:text-7xl font-black text-white mb-6"
            style={{ fontFamily: 'Bebas Neue, cursive' }}
          >
            SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">PROJECTS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Building production-ready AI applications and developer tools
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 ${
                hoveredProject === project.title ? 'scale-105 border-white/30 shadow-2xl shadow-blue-500/20' : ''
              }`}>
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                
                {/* Icon container */}
                <div className="relative p-8 pb-0">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  
                  {/* Stats badge */}
                  <div className="absolute top-8 right-8">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-gray-300 border border-white/10">
                      {project.stats}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-6">
                  <h3 
                    className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons - Fixed to be properly clickable */}
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => handleLinkClick(e, project.githubUrl)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
                      type="button"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                    <button
                      onClick={(e) => handleLinkClick(e, project.liveUrl)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl text-white hover:from-blue-500 hover:to-blue-400 transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/25"
                      type="button"
                    >
                      <span className="text-sm font-medium">Live Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => window.open('https://github.com/sam170203', '_blank', 'noopener,noreferrer')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            type="button"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;