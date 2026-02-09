import { Code, Zap } from "lucide-react";

const CurrentlyBuilding = () => {
  const currentProjects = [
    {
      name: "PersonaGPT v2.0",
      description: "Multi-modal AI with voice and vision capabilities",
      status: "In Development"
    },
    {
      name: "LLM Log Analyzer",
      description: "Intelligent log analysis using large language models",
      status: "Beta Testing"
    },
    {
      name: "Explainable Multi-Disease Prediction",
      description: "Medical AI with interpretable predictions",
      status: "Research Phase"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
            <span className="text-sm font-mono text-gray-400">ACTIVE DEVELOPMENT</span>
          </div>
          <h2 
            className="text-5xl md:text-7xl font-black text-white mb-6"
            style={{ fontFamily: 'Bebas Neue, cursive' }}
          >
            CURRENTLY <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">BUILDING</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Pushing boundaries with cutting-edge AI research and development
          </p>
        </div>

        {/* Projects List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {currentProjects.map((project, index) => (
            <div 
              key={project.name}
              className="group relative bg-gradient-to-r from-gray-900/50 to-black border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-7 h-7 text-blue-400" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {project.name}
                    </h3>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400">{project.description}</p>
                </div>

              </div>

              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000" 
                style={{ width: `${(index + 1) * 33}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;