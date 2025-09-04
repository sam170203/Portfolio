import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Bot, Heart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gen AI Nexus Chatbot with Personalities",
      description: "A sophisticated multi-personality GenAI chatbot built using Retrieval-Augmented Generation (RAG). Features LangChain integration, Transformers, and advanced prompt engineering for diverse dialogue experiences.",
      technologies: ["Python", "LangChain", "RAG", "Transformers", "NLP"],
      icon: <Bot className="h-6 w-6" />,
      year: "2025",
      github: "#",
      live: "https://genai-chatbot-smoky.vercel.app/",
      category: "AI/ML"
    },
    {
      title: "Smart Health Monitoring System",
      description: "Real-time system monitoring solution with predictive analytics. Monitors CPU/RAM usage, implements regression-based prediction models, and features automated Telegram alerts with SQL data storage.",
      technologies: ["Linux", "Python", "ML", "SQL", "Telegram API", "Monitoring"],
      icon: <Heart className="h-6 w-6" />,
      year: "2025",
      github: "#",
      live: "/health-monitoring",
      category: "Full Stack"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions with cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden hover-lift bg-card shadow-portfolio-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary-muted rounded-lg mr-4">
                      {project.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {project.year}
                        </Badge>
                      </div>
                      <Badge className="text-xs bg-primary-muted text-primary">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/sam170203" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;