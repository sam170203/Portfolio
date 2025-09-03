import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["Python", "C++", "C", "SQL", "Bash/Shell", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks & Libraries",
      icon: "🚀",
      skills: ["Flask", "FastAPI", "Streamlit", "PyTorch", "LangChain", "React", "Node.js", "NumPy", "Pandas", "Scikit-learn"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab", "Linux CLI", "Docker", "AWS"]
    },
    {
      title: "AI/ML & Data Science",
      icon: "🤖",
      skills: ["Machine Learning", "Deep Learning", "MLOps", "RAG", "Transformers", "Model Evaluation", "NLP", "Computer Vision"]
    },
    {
      title: "Concepts & Methodologies",
      icon: "🧠",
      skills: ["Data Structures & Algorithms", "API Integration", "Generative AI", "System Design", "Agile", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface-variant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent and scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 hover-lift bg-card shadow-portfolio animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-card-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="skill-pill"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Competitive Programming Stats */}
        <div className="mt-16 animate-slide-up">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Competitive Programming</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover-lift bg-card shadow-portfolio">
              <div className="text-3xl font-bold text-primary mb-2">Codeforces</div>
              <p className="text-muted-foreground mb-4">Problem Solving & Algorithms</p>
              <a 
                href="https://codeforces.com/profile/mudgalsaksham" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                View Profile →
              </a>
            </Card>
            
            <Card className="p-6 text-center hover-lift bg-card shadow-portfolio">
              <div className="text-3xl font-bold text-accent mb-2">LeetCode</div>
              <p className="text-muted-foreground mb-4">Data Structures & Algorithms</p>
              <a 
                href="https://leetcode.com/u/sakshammudgal17/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
              >
                View Profile →
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;