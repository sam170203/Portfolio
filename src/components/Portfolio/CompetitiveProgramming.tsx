import { useState, useEffect } from "react";
import { Trophy, Target, Zap, Code2, ExternalLink, Play } from "lucide-react";

const CompetitiveProgramming = () => {
  const [count, setCount] = useState(0);
  const targetCount = 1000;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const platforms = [
    {
      name: "Codeforces",
      rating: "1430",
      maxRating: "1430",
      solved: "600+",
      rank: "Specialist",
      color: "from-red-500 to-orange-500",
      url: "https://codeforces.com/profile/mudgalsaksham",
      icon: <Target className="w-6 h-6" />
    },
    {
      name: "LeetCode",
      rating: "1530",
      maxRating: "1530",
      solved: "400+",
      rank: "Knight",
      color: "from-yellow-500 to-orange-500",
      url: "https://leetcode.com/u/sakshammudgal17/",
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "YouTube",
      rating: "Content",
      maxRating: "Creator",
      solved: "Videos",
      rank: "Subscribe",
      color: "from-red-600 to-red-500",
      url: "https://youtube.com/@sakshammudgalll17",
      icon: <Play className="w-6 h-6" />,
      isYoutube: true
    }
  ];

  return (
    <section id="cp" className="py-32 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-mono text-gray-400">ALGORITHMIC EXCELLENCE</span>
          </div>
          <h2 
            className="text-5xl md:text-7xl font-black text-white mb-6"
            style={{ fontFamily: 'Bebas Neue, cursive' }}
          >
            COMPETITIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">PROGRAMMING</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Solving complex problems at scale. Precision. Speed. Optimization.
          </p>

          {/* Total problems counter */}
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-2xl">
            <Code2 className="w-8 h-8 text-green-500" />
            <div>
              <div 
                className="text-4xl font-black text-white"
                style={{ fontFamily: 'Bebas Neue, cursive' }}
              >
                {count}+
              </div>
              <div className="text-sm text-gray-400">Problems Solved</div>
            </div>
          </div>
        </div>

        {/* Platform Cards - 3 columns now with YouTube */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:scale-105 overflow-hidden">
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Platform header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {platform.icon}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Platform name */}
                <h3 
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {platform.name}
                </h3>

                {/* Stats - different for YouTube */}
                <div className="space-y-3">
                  {platform.isYoutube ? (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Channel</span>
                        <span 
                          className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400"
                          style={{ fontFamily: 'Bebas Neue, cursive' }}
                        >
                          @sakshammudgalll17
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Content</span>
                        <span className="text-base font-bold text-white">LeetCode & CP</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Action</span>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-600 to-red-500 text-white flex items-center gap-1">
                          <Play className="w-3 h-3" /> Watch
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Max Rating</span>
                        <span 
                          className={`text-xl font-black text-transparent bg-clip-text bg-gradient-to-r ${platform.color}`}
                          style={{ fontFamily: 'Bebas Neue, cursive' }}
                        >
                          {platform.maxRating}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Problems Solved</span>
                        <span className="text-lg font-bold text-white">{platform.solved}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Rank</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${platform.color} text-white`}>
                          {platform.rank}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Progress bar - only for non-YouTube */}
                {!platform.isYoutube && (
                  <div className="mt-4">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${platform.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${Math.min(parseInt(platform.maxRating) / 20, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* YouTube specific tag */}
                {platform.isYoutube && (
                  <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <p className="text-xs text-red-400 text-center">
                      🎥 Watch me solve LeetCode & Codeforces problems live!
                    </p>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Achievements row - updated */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: "🎯", label: "Specialist", platform: "Codeforces" },
            { icon: "⚔️", label: "Knight", platform: "LeetCode" },
            { icon: "💻", label: "1000+", platform: "Problems" },
            { icon: "🏆", label: "Top 10%", platform: "Global" }
          ].map((achievement, index) => (
            <div 
              key={achievement.label}
              className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{achievement.icon}</div>
              <div className="text-lg font-bold text-white mb-1">{achievement.label}</div>
              <div className="text-sm text-gray-400">{achievement.platform}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;