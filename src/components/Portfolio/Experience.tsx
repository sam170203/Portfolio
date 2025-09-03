import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "TCS Research",
      location: "Remote",
      period: "May 2025 - July 2025",
      type: "Internship",
      description: [
        "Developed a domain-specific RAG chatbot focused on High-Performance Computing (HPC)",
        "Gained extensive exposure to research methodologies, MLOps, and large-scale parallel processing",
        "Collaborated with senior researchers on cutting-edge AI/ML projects"
      ],
      technologies: ["Python", "RAG", "HPC", "MLOps", "Research"]
    },
    {
      title: "Operations Intern",
      company: "BMW AutoExpo",
      location: "New Delhi",
      period: "January 2025",
      type: "Internship",
      description: [
        "Supported management and operations during BMW AutoExpo 2025",
        "Contributed to planning, scheduling, and client engagement activities",
        "Managed logistics and coordination for high-profile automotive events"
      ],
      technologies: ["Project Management", "Operations", "Client Relations"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-surface-variant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on industry experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={`${experience.company}-${experience.title}`}
              className="p-8 hover-lift bg-card shadow-portfolio animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-primary-muted rounded-lg mr-3">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">{experience.title}</h3>
                      <p className="text-lg text-primary font-semibold">{experience.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {experience.type}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {experience.description.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;