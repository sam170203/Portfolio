import { Card } from "@/components/ui/card";
import { Trophy, GraduationCap, Code2, Sparkles, Target, Zap } from "lucide-react";

// Use direct image URL from Postimages.org
const rollerHockeyPhoto = "https://i.postimg.cc/mrdCVZNt/team-india-roller-hockey.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-background to-surface">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Beyond the Code
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A unique blend of <span className="text-primary font-semibold">technical expertise</span> and{' '}
            <span className="text-accent font-semibold">athletic excellence</span>, driven by passion and purpose
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content Section */}
          <div className="space-y-8 animate-slide-up">
            <div className="glass-dark p-8 rounded-2xl border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary to-primary/50 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Engineering Excellence</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Currently pursuing <span className="text-primary font-semibold">B.Tech in Instrumentation and Control Engineering</span> at{' '}
                    <span className="text-gradient font-semibold">NSUT</span>. My journey in technology is driven by an insatiable curiosity for artificial intelligence, machine learning, and innovative full-stack development.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-dark p-8 rounded-2xl border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-accent to-accent/50 rounded-xl">
                  <Trophy className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">World-Class Athlete</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Honored to represent <span className="text-accent font-semibold">India in the U-19 Roller Hockey World Cup 2019</span> at the prestigious World Roller Games in Barcelona. This experience instilled discipline, teamwork, and the relentless pursuit of excellence - values I bring to every technical challenge.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-dark p-8 rounded-2xl border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
                  <Code2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Cutting-Edge Innovation</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Currently exploring revolutionary technologies including <span className="text-gradient font-semibold">Retrieval-Augmented Generation (RAG)</span>, <span className="text-primary font-semibold">Large Language Models</span>, and building intelligent systems that solve real-world problems with measurable impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Section */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Enhanced Image Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative glass-dark p-1 rounded-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={rollerHockeyPhoto} 
                    alt="Team India Roller Hockey at World Cup 2019" 
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Failed to load roller hockey image:', e);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="h-5 w-5 text-accent" />
                      <span className="text-accent font-bold text-lg">International Achievement</span>
                    </div>
                    <p className="text-white/90 text-sm font-medium">
                      World Roller Games, Barcelona 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card-modern text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              
              <div className="card-modern text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gradient">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              
              <div className="card-modern text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gradient">15+</div>
                <div className="text-sm text-muted-foreground">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;