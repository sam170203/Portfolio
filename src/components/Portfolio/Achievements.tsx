import { Trophy } from "lucide-react";

const Achievements = () => {
  const competitiveStats = [
    {
      platform: "Codeforces",
      metric: "Max Rating",
      value: "1430",
      description: "Expert level competitive programmer"
    },
    {
      platform: "Codeforces",
      metric: "Problems Solved",
      value: "600+",
      description: "Consistent problem solving across diverse categories"
    },
    {
      platform: "LeetCode",
      metric: "Problems Solved",
      value: "400+",
      description: "Strong algorithmic and data structure foundation"
    }
  ];

  return (
    <section id="achievements" className="py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Competitive Programming</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Achievements
          </h2>
        </div>

        {/* Premium Stat Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {competitiveStats.map((stat, index) => (
            <div 
              key={`${stat.platform}-${stat.metric}`}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <h3 className="text-lg font-medium text-muted-foreground mb-2">{stat.platform}</h3>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-foreground">{stat.metric}</div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;