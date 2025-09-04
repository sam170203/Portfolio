import { Card } from "@/components/ui/card";
import { Trophy, GraduationCap, Code2 } from "lucide-react";

// Use direct image URL from Postimages.org
const rollerHockeyPhoto = "https://i.postimg.cc/mrdCVZNt/team-india-roller-hockey.jpg";



const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a unique blend of technical expertise and athletic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm currently pursuing B.Tech in Instrumentation and Control Engineering at 
              <span className="text-primary font-semibold"> NSUT (Netaji Subhas University of Technology)</span>. 
              My journey in technology is driven by a passion for artificial intelligence, machine learning, 
              and full-stack development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Beyond coding, I'm a dedicated athlete who had the honor of representing 
              <span className="text-accent font-semibold"> India in the U-19 Roller Hockey World Cup 2019 </span>
              at the World Roller Games in Barcelona. This experience taught me discipline, 
              teamwork, and the pursuit of excellence - values I bring to every project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Currently exploring cutting-edge technologies like Retrieval-Augmented Generation (RAG), 
              Large Language Models, and building intelligent systems that solve real-world problems.
            </p>
            
            <div className="mt-8">
              <img 
                src={rollerHockeyPhoto} 
                alt="Team India Roller Hockey at World Cup 2019" 
                className="rounded-lg shadow-xl w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  console.error('Failed to load roller hockey image:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="text-sm text-muted-foreground/80 italic text-center mt-3">
                Represented India in U-19 Roller Hockey World Cup 2019, Barcelona
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="p-6 hover-lift bg-card shadow-portfolio">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-muted rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">Education</h3>
                  <p className="text-muted-foreground">B.Tech ICE at NSUT</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Specializing in control systems with focus on AI/ML applications
              </p>
            </Card>

            <Card className="p-6 hover-lift bg-card shadow-portfolio">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-accent-muted rounded-lg mr-4">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">International Athlete</h3>
                  <p className="text-muted-foreground">Team India Roller Hockey</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Represented India at U-19 World Cup 2019, Barcelona
              </p>
            </Card>

            <Card className="p-6 hover-lift bg-card shadow-portfolio">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-secondary-muted rounded-lg mr-4">
                  <Code2 className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">Tech Focus</h3>
                  <p className="text-muted-foreground">AI/ML & Full Stack</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Building intelligent systems with modern web technologies
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;