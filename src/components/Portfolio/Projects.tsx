import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Bot, Heart, Rocket, Monitor, Zap, Code2, Sparkles } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  const projects = [
    {
      title: "Gen AI Nexus Chatbot",
      subtitle: "Multi-Personality AI Assistant",
      description: "A sophisticated conversational AI featuring multiple personalities, advanced RAG implementation, and intelligent context management. Built with cutting-edge LLM technologies for diverse dialogue experiences.",
      technologies: ["Python", "LangChain", "RAG", "Transformers", "OpenAI", "Vector DB"],
      icon: Bot,
      color: "primary",
      year: "2025",
      github: "https://github.com/sam170203/genai-chatbot",
      live: "https://genai-chatbot-smoky.vercel.app/",
      category: "AI/ML",
      features: ["Multi-personality system", "RAG architecture", "Real-time responses", "Context awareness"]
    },
    {
      title: "Smart Health Monitor",
      subtitle: "Predictive System Analytics",
      description: "Real-time monitoring solution with ML-based predictive analytics. Features automated alert systems, comprehensive dashboard, and intelligent resource optimization for production environments.",
      technologies: ["Python", "ML", "SQL", "Telegram API", "Linux", "React"],
      icon: Monitor,
      color: "accent",
      year: "2025",
      github: "https://github.com/sam170203/health-monitoring",
      live: "/health-monitoring",
      category: "Full Stack",
      features: ["Real-time monitoring", "Predictive analytics", "Automated alerts", "Data visualization"]
    }
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    const Icon = project.icon;
    const isHovered = hoveredProject === project.title;
    
    return (
      <div 
        className="group animate-slide-up"
        style={{ animationDelay: `${index * 0.15}s` }}
        onMouseEnter={() => setHoveredProject(project.title)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <Card className={`card-modern h-full relative overflow-hidden border-2 transition-all duration-500 ${
          isHovered ? 'shadow-glow scale-105' : 'shadow-portfolio-lg'
        }`}>
          {/* Animated Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          
          {/* Content */}
          <div className="relative z-10 p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`relative group/icon`}>
                  <div className={`p-4 bg-${project.color}/10 rounded-2xl group-hover/icon:scale-110 transition-all duration-300`}>
                    <Icon className={`h-8 w-8 text-${project.color}`} />
                  </div>
                  <div className={`absolute -inset-1 bg-${project.color}/20 rounded-2xl blur-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300`}></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">{project.subtitle}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <Badge variant="outline" className="text-xs px-3 py-1">
                  {project.year}
                </Badge>
                <Badge className={`text-xs bg-${project.color}/10 text-${project.color} border-${project.color}/20`}>
                  {project.category}
                </Badge>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              {project.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.features.slice(0, isHovered ? project.features.length : 3).map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-center gap-1 text-sm text-muted-foreground"
                    style={{
                      opacity: isHovered ? 1 : 0.7,
                      transform: isHovered ? 'translateY(0)' : 'translateY(4px)',
                      transition: `all 0.3s ease-out ${featureIndex * 0.05}s`
                    }}
                  >
                    <Sparkles className="h-3 w-3 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, techIndex) => (
                <Badge 
                  key={tech}
                  variant="secondary" 
                  className={`text-xs px-3 py-1 skill-pill-${techIndex % 2 === 0 ? 'primary' : 'accent'}`}
                  style={{
                    opacity: isHovered ? 1 : 0.8,
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    transition: `all 0.3s ease-out ${techIndex * 0.05}s`
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex gap-3">
              <Button 
                className={`flex-1 btn-modern group/btn bg-gradient-to-r from-${project.color} to-${project.color}/80 hover:from-${project.color}/90 hover:to-${project.color}/70`}
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Source Code
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 btn-outline-modern border-2 hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>

          {/* Animated Corner Decor */}
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-${project.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        </Card>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
            <Rocket className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Projects</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Innovation Portfolio
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building <span className="text-primary font-semibold">cutting-edge solutions</span> that solve{' '}
            <span className="text-accent font-semibold">real-world problems</span> with modern technology
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline-modern group"
              asChild
            >
              <a href="https://github.com/sam170203" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="flex items-center gap-2">
                  Explore All Projects
                  <Code2 className="h-4 w-4" />
                </span>
              </a>
            </Button>
            
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-sm">50+ Repositories</span>
              </div>
              <div className="h-4 w-px bg-border"></div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm">Active Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;