import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Star, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "International Athlete - Team India",
      description: "Represented India at the U-19 Roller Hockey World Cup 2019 during the World Roller Games in Barcelona, Spain. Competed against top international teams and developed exceptional discipline and teamwork skills.",
      year: "2019",
      category: "Sports",
      icon: <Trophy className="h-6 w-6" />,
      importance: "Major"
    },
    {
      title: "Research Publication Ready",
      description: "Developed innovative RAG-based chatbot solutions with potential for academic publication in AI/ML conferences.",
      year: "2025",
      category: "Research",
      icon: <Star className="h-6 w-6" />,
      importance: "Significant"
    },
    {
      title: "Technical Leadership",
      description: "Led multiple AI/ML projects demonstrating strong technical leadership and problem-solving capabilities in cutting-edge technologies.",
      year: "2024-2025",
      category: "Leadership",
      icon: <Award className="h-6 w-6" />,
      importance: "Significant"
    },
    {
      title: "International Exposure",
      description: "Gained valuable international experience through sports competition, enhancing cultural awareness and global perspective.",
      year: "2019",
      category: "Personal Development",
      icon: <Medal className="h-6 w-6" />,
      importance: "Significant"
    }
  ];

  const getIconColor = (category: string) => {
    switch (category) {
      case "Sports": return "text-accent";
      case "Research": return "text-primary";
      case "Leadership": return "text-secondary";
      default: return "text-muted-foreground";
    }
  };

  const getBackgroundColor = (category: string) => {
    switch (category) {
      case "Sports": return "bg-accent-muted";
      case "Research": return "bg-primary-muted";
      case "Leadership": return "bg-secondary-muted";
      default: return "bg-muted";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognitions and milestones that define my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className={`p-8 hover-lift bg-card shadow-portfolio animate-fade-in ${
                achievement.importance === "Major" ? "ring-2 ring-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-6">
                <div className={`p-3 rounded-lg mr-4 ${getBackgroundColor(achievement.category)}`}>
                  <div className={getIconColor(achievement.category)}>
                    {achievement.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-card-foreground">{achievement.title}</h3>
                    {achievement.importance === "Major" && (
                      <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {achievement.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{achievement.year}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-slide-up">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <Trophy className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold text-foreground">International Recognition</h3>
              </div>
              <p className="text-lg text-muted-foreground max-w-md">
                Proudly represented <span className="font-semibold text-accent">India</span> on the world stage, 
                bringing the same dedication and excellence to technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;