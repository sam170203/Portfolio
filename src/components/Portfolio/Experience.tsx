import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Briefcase, Sparkles, Target, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const Experience = () => {
  const [visibleExperiences, setVisibleExperiences] = useState<Set<number>>(new Set());

  const experiences = [
    {
      title: "Research Intern",
      company: "TCS Research",
      location: "Remote",
      period: "May 2025 - July 2025",
      type: "Internship",
      icon: Target,
      color: "primary",
      description: [
        "Developed a domain-specific RAG chatbot focused on High-Performance Computing (HPC)",
        "Gained extensive exposure to research methodologies, MLOps, and large-scale parallel processing",
        "Collaborated with senior researchers on cutting-edge AI/ML projects"
      ],
      technologies: ["Python", "RAG", "HPC", "MLOps", "Research"],
      achievements: ["AI Research", "HPC Systems", "ML Pipelines"]
    },
    {
      title: "Operations Intern",
      company: "BMW AutoExpo",
      location: "New Delhi",
      period: "January 2025",
      type: "Internship",
      icon: TrendingUp,
      color: "accent",
      description: [
        "Supported management and operations during BMW AutoExpo 2025",
        "Contributed to planning, scheduling, and client engagement activities",
        "Managed logistics and coordination for high-profile automotive events"
      ],
      technologies: ["Project Management", "Operations", "Client Relations"],
      achievements: ["Event Management", "Client Engagement", "Logistics"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.experience-item');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleExperiences(prev => new Set(prev).add(index));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-surface to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Experience Timeline
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gaining <span className="text-primary font-semibold">industry expertise</span> through{' '}
            <span className="text-accent font-semibold">hands-on experience</span> at leading organizations
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line hidden lg:block"></div>
          
          <div className="space-y-12 relative">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isVisible = visibleExperiences.has(index);
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={`${experience.company}-${experience.title}`}
                  className={`experience-item relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 lg:gap-12`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease-out'
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="timeline-dot"></div>
                  </div>

                  {/* Date Badge */}
                  <div className={`flex-shrink-0 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="glass-dark px-4 py-2 rounded-full inline-block">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{experience.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 relative">
                    <Card className={`card-modern group relative overflow-hidden ${
                      isVisible ? 'animate-slide-in-left animate-slide-in-right' : ''
                    }`}>
                      {/* Background Gradient Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${experience.color}/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10 p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="relative group/icon">
                              <div className={`p-3 bg-${experience.color}/10 rounded-xl group-hover/icon:scale-110 transition-all duration-300`}>
                                <Icon className={`h-6 w-6 text-${experience.color}`} />
                              </div>
                              <div className={`absolute -inset-1 bg-${experience.color}/20 rounded-xl blur-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300`}></div>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-gradient transition-colors duration-300">
                                {experience.title}
                              </h3>
                              <p className={`text-lg font-semibold text-${experience.color} mb-2`}>
                                {experience.company}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{experience.location}</span>
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {experience.type}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Description with Enhanced Bullets */}
                        <div className="space-y-4 mb-6">
                          {experience.description.map((item, itemIndex) => (
                            <div 
                              key={itemIndex} 
                              className="flex items-start gap-3 group/item"
                              style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0)' : isEven ? 'translateX(-20px)' : 'translateX(20px)',
                                transition: `all 0.5s ease-out ${0.3 + itemIndex * 0.1}s`
                              }}
                            >
                              <div className="relative">
                                <div className={`w-2 h-2 bg-${experience.color} rounded-full mt-2 group-hover/item:scale-150 transition-transform duration-300`}></div>
                                <div className={`absolute -inset-2 bg-${experience.color}/20 rounded-full blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300`}></div>
                              </div>
                              <p className="text-muted-foreground leading-relaxed flex-1">{item}</p>
                            </div>
                          ))}
                        </div>

                        {/* Technologies and Achievements */}
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Technologies */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Sparkles className={`h-4 w-4 text-${experience.color}`} />
                              <span className="text-sm font-medium text-foreground">Technologies Used</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <Badge 
                                  key={tech} 
                                  variant="secondary" 
                                  className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Key Achievements */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Target className={`h-4 w-4 text-accent`} />
                              <span className="text-sm font-medium text-foreground">Key Achievements</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {experience.achievements.map((achievement) => (
                                <Badge 
                                  key={achievement} 
                                  variant="secondary" 
                                  className="text-xs px-3 py-1 bg-accent/10 text-accent border-accent/20"
                                >
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-${experience.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </Card>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block w-32 flex-shrink-0"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;