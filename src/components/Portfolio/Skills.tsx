import { useState } from "react";
import { Code, Sparkles, Cpu, Database, Globe, Layers } from "lucide-react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "AI & ML",
      icon: <Sparkles className="w-5 h-5" />,
      color: "from-red-500 to-orange-500",
      skills: ["PyTorch", "TensorFlow", "LangChain", "HuggingFace", "Scikit-learn", "OpenAI", "RAG", "CUDA"]
    },
    {
      category: "Languages",
      icon: <Code className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "Bash"]
    },
    {
      category: "Frameworks",
      icon: <Layers className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      skills: ["React", "FastAPI", "Flask", "Node.js", "Next.js", "Express"]
    },
    {
      category: "Infrastructure",
      icon: <Cpu className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      skills: ["Docker", "Kubernetes", "AWS", "Linux", "Git", "CI/CD"]
    },
    {
      category: "Data & Cloud",
      icon: <Database className="w-5 h-5" />,
      color: "from-yellow-500 to-orange-500",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Pandas", "NumPy", "Spark"]
    },
    {
      category: "Core Concepts",
      icon: <Globe className="w-5 h-5" />,
      color: "from-indigo-500 to-purple-500",
      skills: ["System Design", "MLOps", "API Design", "Distributed Systems", "Gen AI", "HPC"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Cpu className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-mono text-gray-400">TECH ARSENAL</span>
          </div>
          <h2 
            className="text-5xl md:text-7xl font-black text-white mb-6"
            style={{ fontFamily: 'Bebas Neue, cursive' }}
          >
            SKILLS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-purple-500">TECHNOLOGIES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Full-stack AI engineer with expertise across the entire ML lifecycle
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.category}
              className="group relative"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {category.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default ${
                        hoveredSkill === skill ? 'scale-110 bg-white/10' : ''
                      }`}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{ 
                        fontFamily: 'Space Grotesk, sans-serif',
                        transform: hoveredSkill === skill ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-px bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: "3+", label: "Years Coding" },
            { value: "20+", label: "Projects Built" },
            { value: "∞", label: "Coffee Consumed" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2"
                style={{ fontFamily: 'Bebas Neue, cursive' }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;