import { Trophy, Medal, Flag, Users } from "lucide-react";
import MediaSlider from "./MediaSlider";

// Media items for the roller hockey slider: video first, then image
const rollerHockeyMedia = [
  { type: "video" as const, src: "/src/assets/roller-hockey.mp4" },
  { type: "image" as const, src: "/src/assets/team-india.jpg", alt: "Team India at World Cup 2019" },
];

const BeyondCoding = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Trophy className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-mono text-gray-400">BEYOND THE SCREEN</span>
          </div>
          <h2 
            className="text-5xl md:text-7xl font-black text-white mb-6"
            style={{ fontFamily: 'Bebas Neue, cursive' }}
          >
            BEYOND <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">CODING</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
              <Flag className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-400">Team India</span>
            </div>
            
            <p 
              className="text-2xl md:text-3xl text-white leading-relaxed font-light"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Competing at the highest level demands{" "}
              <span className="text-orange-400 font-semibold">discipline</span>,{" "}
              <span className="text-blue-400 font-semibold">precision</span>, and{" "}
              <span className="text-purple-400 font-semibold">resilience</span>.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              I represented India in Roller Hockey at the World Roller Games, Barcelona 2019. 
              Competing against the world's best teams taught me the value of teamwork, strategy, 
              and performing under pressure.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              The same competitive mindset drives how I build and ship software - 
              with focus, determination, and the drive to excel.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl">
                <Medal className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">2019</div>
                <div className="text-xs text-gray-400">World Games</div>
              </div>
              <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl">
                <Flag className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">🇮🇳</div>
                <div className="text-xs text-gray-400">Team India</div>
              </div>
              <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl">
                <Users className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">U-19</div>
                <div className="text-xs text-gray-400">National Team</div>
              </div>
            </div>
          </div>

          {/* Visual Content - Roller Hockey Media Slider */}
          <div className="relative">
            {/* 
              MediaSlider showing roller hockey video and team image
              - Video shows full body action (object-contain, no cropping)
              - Auto-advances every 4 seconds
              - Manual navigation with arrows
            */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden group">
              <MediaSlider
                media={rollerHockeyMedia}
                autoPlayInterval={4000}
                autoPlay={true}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl shadow-xl z-10">
              <div className="text-sm font-bold">International Athlete</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondCoding;