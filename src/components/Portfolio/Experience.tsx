import { Briefcase, Calendar, MapPin, Cpu, Cloud } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Tata Consultancy Services (TCS)",
      role: "AI & HPC Engineer Intern",
      duration: "May 2025 - Aug 2025",
      location: "Gurugram",
      description: "Working on cutting-edge AI solutions and High-Performance Computing systems. Developing scalable machine learning pipelines and optimizing computational workflows for enterprise clients.",
      highlights: [
        "Built distributed ML training pipelines reducing computation time by 60%",
        "Implemented GPU cluster optimization achieving 40% cost reduction",
        "Developed real-time AI inference systems handling 10K+ requests/sec",
        "Created automated model deployment pipelines using Kubernetes"
      ],
      technologies: ["PyTorch", "TensorFlow", "CUDA", "Kubernetes", "AWS", "Python"],
      icon: <Cpu className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Freelance & Open Source",
      role: "Full Stack Developer",
      location: "Remote",
      description: "Built production-grade AI applications and developer tools. Contributed to open-source ML libraries and developed full-stack solutions for startups.",
      highlights: [
        "Created CF CodeClimb platform serving 4000+ competitive programmers",
        "Built diabetes prediction system with 94% medical-grade accuracy",
        "Developed multi-personality LLM chatbot with 10+ expert modes",
        "Contributed to PyTorch and HuggingFace ecosystem"
      ],
      technologies: ["React", "Node.js", "Python", "LangChain", "FastAPI", "Docker"],
      icon: <Cloud className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Briefcase className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-mono text-gray-400">WORK EXPERIENCE</span>
          </div>
          <h2 
            className="text-5xl md:text-7xl font-black text-white mb-6"
            style={{ fontFamily: 'Bebas Neue, cursive' }}
          >
            PROFESSIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">JOURNEY</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Building AI systems at scale and shipping production-grade solutions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className="relative group"
            >
              {/* Connecting line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-transparent opacity-30"></div>
              )}
              
              <div className="bg-gradient-to-br from-gray-900/80 to-black border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg`}>
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 
                          className="text-2xl font-bold text-white mb-1"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-xl text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        {exp.duration && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <div 
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;