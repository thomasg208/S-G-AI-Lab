import { Box, Puzzle, BarChart3 } from "lucide-react"

export default function ArchitectureStack() {
  return (
    <section className="py-20 md:py-32 bg-[#0B1120] relative overflow-hidden border-t border-gray-800">
      {/* Background glow for the stack */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <div>
            <div className="mb-4">
              <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Wingman AI Intelligence Layer</span>
              <p className="text-gray-400 text-sm tracking-widest uppercase mt-1">For Smart Infrastructure</p>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              ONE PLATFORM.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">ANY SPACE.</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-lg leading-relaxed">
              Wingman's Spatial Intelligence Platform powers navigation and location intelligence across any indoor environment.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Box className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">BUILT ONCE</h4>
                  <p className="text-gray-400">A powerful spatial engine designed for any indoor environment.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-900/30 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Puzzle className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">PROVIDER AGNOSTIC</h4>
                  <p className="text-gray-400">Swap mapping providers without changing your application.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">INFINITE POSSIBILITIES</h4>
                  <p className="text-gray-400">One platform. Unlimited industries. Endless impact.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Architecture Stack */}
          <div className="relative w-full max-w-[600px] mx-auto perspective-1000">
             <div className="flex flex-col gap-4 transform-gpu rotate-x-12">
               
               {/* Layer 1 */}
               <div className="w-[60%] mx-auto bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-blue-500/50 rounded-xl p-4 text-center shadow-[0_10px_30px_rgba(59,130,246,0.3)] transform transition-transform hover:-translate-y-2">
                 <h4 className="text-white font-bold tracking-widest text-sm">AGENT ORCHESTRATOR</h4>
                 <p className="text-blue-400 text-xs mt-1">AI INTELLIGENCE</p>
               </div>

               {/* Layer 2 */}
               <div className="w-[80%] mx-auto bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-blue-500/40 rounded-xl p-5 text-center shadow-[0_10px_30px_rgba(59,130,246,0.2)] transform transition-transform hover:-translate-y-2">
                 <h4 className="text-white font-bold tracking-widest text-sm">NAVIGATION DOMAIN</h4>
                 <p className="text-blue-400 text-xs mt-1">BUSINESS LOGIC</p>
               </div>

               {/* Layer 3 */}
               <div className="w-[100%] mx-auto bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-2 border-cyan-400 rounded-xl p-6 text-center shadow-[0_0_40px_rgba(34,211,238,0.4)] transform transition-transform hover:-translate-y-2 relative overflow-hidden">
                 <div className="absolute inset-0 bg-cyan-400/10"></div>
                 <h4 className="text-white font-bold tracking-widest text-lg mb-2 relative z-10">SPATIAL INTELLIGENCE PLATFORM</h4>
                 <p className="text-cyan-300 text-xs flex justify-center gap-3 flex-wrap relative z-10">
                   <span>POSITIONING</span> | <span>ROUTING</span> | <span>POI</span> | <span>FLOORS</span> | <span>GEOFENCING</span><br/>
                   <span>ACCESSIBILITY</span> | <span>ANALYTICS</span> | <span>EVENTS</span>
                 </p>
               </div>

               {/* Layer 4 */}
               <div className="w-[100%] mx-auto bg-[#0f172a] border-t border-b border-gray-700 p-4 text-center">
                 <h4 className="text-gray-300 font-bold tracking-widest text-sm mb-1">PROVIDER REGISTRY</h4>
                 <p className="text-gray-500 text-xs">HEALTH CHECK | PRIORITIZATION | FAILOVER</p>
               </div>

               {/* Layer 5 */}
               <div className="w-[100%] mx-auto bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                 <h4 className="text-gray-400 font-bold tracking-widest text-xs mb-4">SPATIAL PROVIDERS</h4>
                 <div className="flex justify-center items-center gap-6 flex-wrap opacity-70">
                    <span className="text-white font-bold text-lg">SITUM</span>
                    <span className="text-white font-bold text-lg">Mapbox</span>
                    <span className="text-white font-bold text-lg">Apple Indoor Maps</span>
                    <span className="text-white font-bold text-lg">Google Indoor</span>
                    <span className="text-white font-bold text-sm border border-gray-600 px-2 py-1 rounded">CUSTOM</span>
                 </div>
               </div>

             </div>
          </div>
          
        </div>

        {/* Banner at bottom */}
        <div className="mt-24 text-center border-t border-b border-gray-800 py-6">
          <p className="text-xl md:text-2xl font-bold tracking-widest text-gray-400">
            THE POWER STAYS THE SAME. <span className="text-blue-400">ONLY THE PROVIDER CHANGES.</span>
          </p>
        </div>

      </div>
    </section>
  )
}
