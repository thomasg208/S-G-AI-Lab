import { Puzzle, ShieldCheck, Rocket } from "lucide-react"

export default function LimitlessImpact() {
  return (
    <section className="py-24 bg-[#0B1120]">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-16 items-center">
          
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight uppercase">
              ONE PLATFORM.<br/>LIMITLESS IMPACT.
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-xl leading-relaxed">
              Wingman is not just a navigation engine. It's a spatial intelligence platform that adapts to any environment, today and tomorrow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <Puzzle className="w-10 h-10 text-blue-400 mb-4" />
                <h4 className="text-white font-bold tracking-widest text-sm mb-2">REUSABLE</h4>
                <p className="text-gray-400 text-sm">Built to serve any indoor infrastructure.</p>
              </div>
              <div>
                <ShieldCheck className="w-10 h-10 text-cyan-400 mb-4" />
                <h4 className="text-white font-bold tracking-widest text-sm mb-2">SCALABLE</h4>
                <p className="text-gray-400 text-sm">From a single building to an entire city.</p>
              </div>
              <div>
                <Rocket className="w-10 h-10 text-purple-400 mb-4" />
                <h4 className="text-white font-bold tracking-widest text-sm mb-2">FUTURE-READY</h4>
                <p className="text-gray-400 text-sm">AI-powered.<br/>Always evolving.<br/>Always ahead.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Build Smarter Box */}
          <div className="bg-[#1e293b]/50 border border-blue-500/30 rounded-2xl p-8 text-center backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-white font-bold tracking-[0.2em] text-lg mb-6 leading-loose">
                BUILD SMARTER.<br/>DEPLOY FASTER.<br/>IMPACT EVERYWHERE.
              </h3>
              
              <div className="my-8 flex justify-center items-center gap-4">
                <span className="text-4xl font-black text-white italic">WINGMAN</span>
              </div>
              <p className="text-blue-400 text-sm tracking-widest font-semibold uppercase">AI Intelligence Layer</p>
              
              <div className="mt-8 pt-6 border-t border-blue-500/30">
                <p className="text-gray-400 text-xs tracking-widest uppercase">
                  POWERING THE FUTURE<br/>OF SMART INFRASTRUCTURE
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
