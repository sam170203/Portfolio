import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cpu, Brain, Zap, Trophy, ExternalLink, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set());

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Bash/Shell", level: 75 }
      ]
    },
    {
      title: "AI/ML Frameworks",
      icon: Brain,
      color: "accent",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "LangChain", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "Hugging Face", level: 85 }
      ]
    },
    {
      title: "Web Development",
      icon: Cpu,
      color: "primary",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "FastAPI", level: 88 },
        { name: "Flask", level: 85 },
        { name: "Streamlit", level: 80 }
      ]
    },
    {
      title: "Data & Cloud",
      icon: Database,
      color: "accent",
      skills: [
        { name: "NumPy/Pandas", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 85 }
      ]
    },
    {
      title: "Core Concepts",
      icon: Zap,
      color: "primary",
      skills: [
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "System Design", level: 85 },
        { name: "MLOps", level: 80 },
        { name: "RAG Systems", level: 85 },
        { name: "API Design", level: 90 }
      ]
    }
  ];

  const competitiveStats = [
    {
      platform: "Codeforces",
      rating: "1600+",
      problems: "500+",
      color: "primary",
      url: "https://codeforces.com/profile/mudgalsaksham"
    },
    {
      platform: "LeetCode",
      rating: "2000+",
      problems: "800+",
      color: "accent",
      url: "https://leetcode.com/u/sakshammudgal17/"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.skill-category');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleCategories(prev => new Set(prev).add(index));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit combining{' '}
            <span className="text-primary font-semibold">traditional software engineering</span> with{' '}
            <span className="text-accent font-semibold">cutting-edge AI/ML technologies</span>
          </p>
        </div>

        {/* Enhanced Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isVisible = visibleCategories.has(categoryIndex);
            
            return (
              <div 
                key={category.title}
                className="skill-category animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <Card className="card-modern h-full group">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-${category.color}/10 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                      <div className="text-sm text-muted-foreground">{category.skills.length} technologies</div>
                    </div>
                  </div>
                  
                  {/* Enhanced Skills with Progress Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill.name} 
                        className="skill-item"
                        style={{ 
                          animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                          transition: 'all 0.5s ease-out'
                        }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className={`progress-fill bg-gradient-to-r from-${category.color} to-${category.color}/80`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Enhanced Competitive Programming Section */}
        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
              <Trophy className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Competitive Programming</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Algorithmic Excellence
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solving complex problems and optimizing algorithms on leading competitive platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {competitiveStats.map((stat, index) => (
              <Card 
                key={stat.platform}
                className={`card-modern group relative overflow-hidden`}
                style={{ animationDelay: `${1.0 + index * 0.1}s` }}
              >
                {/* Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className={`text-2xl font-bold text-${stat.color} group-hover:scale-105 transition-transform duration-300`}>
                      {stat.platform}
                    </h4>
                    <Trophy className={`h-6 w-6 text-${stat.color} animate-pulse`} />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.rating}</div>
                      <div className="text-sm text-muted-foreground">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.problems}</div>
                      <div className="text-sm text-muted-foreground">Problems</div>
                    </div>
                  </div>
                  
                  <a 
                    href={stat.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-${stat.color} hover:text-${stat.color}/80 font-medium group/link transition-colors duration-300`}
                  >
                    <span>View Profile</span>
                    <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;