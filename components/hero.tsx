"use client"

import { ArrowRight, Play, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-24">
      {/* Background gradients representing space/globe glow */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-blue-900/20 blur-[120px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[100px]"></div>
      </div>

      <div className="container relative px-4 md:px-8 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-purple-300 uppercase">
              AI POWERED. HUMAN CENTRIC.
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl leading-tight">
              The World's First <span className="text-purple-500">Geospatial Intelligence Platform</span><br />
              that Understands Places, People and Possibilities.
            </h1>
            
            <p className="mb-8 text-lg text-gray-300 leading-relaxed max-w-xl">
              Navigate smarter, discover more, and connect anywhere in the world with the world's first global intelligence concierge.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-16">
              <Button 
                onClick={() => window.open("https://calendly.com/thomasg208/30min?month=2026-06", "_blank")}
                className="bg-purple-600 text-white hover:bg-purple-700 h-12 px-8 text-base font-semibold shadow-lg shadow-purple-600/25 rounded-full"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white h-12 px-8 text-base font-semibold rounded-full bg-gray-900/50 backdrop-blur-sm"
              >
                Watch Wingman in Action
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-800/50">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-purple-400">🏢</span>
                  <h4 className="text-2xl font-bold text-white">200+</h4>
                </div>
                <p className="text-sm text-gray-400">Cities</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-purple-400">✈️</span>
                  <h4 className="text-2xl font-bold text-white">50+</h4>
                </div>
                <p className="text-sm text-gray-400">Airports</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-purple-400">👥</span>
                  <h4 className="text-2xl font-bold text-white">10M+</h4>
                </div>
                <p className="text-sm text-gray-400">Users (Soon)</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-purple-400">⏱️</span>
                  <h4 className="text-2xl font-bold text-white">24/7</h4>
                </div>
                <p className="text-sm text-gray-400">AI Concierge</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup Area */}
          <div className="relative h-[600px] hidden lg:block">
            {/* The Globe representation - using an actual image */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-screen overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000&auto=format&fit=crop" 
                alt="Digital Earth Globe" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent rounded-full border border-gray-800/50 flex items-center justify-center">
              <div className="w-32 h-32 rounded-lg border-2 border-cyan-400 bg-cyan-950/50 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.3)] relative z-10">
                <img src="/images/logos/wingman_ai_logo.png" alt="Wingman Logo" className="w-20 h-20 object-contain" />
              </div>
            </div>

            {/* Floating Location Pins */}
            <div className="absolute top-[10%] left-[20%] bg-gray-900/80 border border-gray-700 backdrop-blur-md rounded-lg p-3 flex items-center gap-3">
              <div className="bg-blue-500/20 p-2 rounded-full text-blue-400">✈️</div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">Airports</p>
                <p className="text-xs text-gray-400">Smarter Journeys</p>
              </div>
            </div>

            <div className="absolute top-[30%] right-[10%] bg-gray-900/80 border border-gray-700 backdrop-blur-md rounded-lg p-3 flex items-center gap-3">
              <div className="bg-green-500/20 p-2 rounded-full text-green-400">🏝️</div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">Tourism</p>
                <p className="text-xs text-gray-400">Unique Experiences</p>
              </div>
            </div>

            <div className="absolute bottom-[40%] left-[10%] bg-gray-900/80 border border-gray-700 backdrop-blur-md rounded-lg p-3 flex items-center gap-3">
              <div className="bg-purple-500/20 p-2 rounded-full text-purple-400">🏙️</div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">Smart Cities</p>
                <p className="text-xs text-gray-400">Better Living</p>
              </div>
            </div>

            <div className="absolute bottom-[20%] right-[20%] bg-gray-900/80 border border-gray-700 backdrop-blur-md rounded-lg p-3 flex items-center gap-3">
              <div className="bg-teal-500/20 p-2 rounded-full text-teal-400">🏢</div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">Enterprise</p>
                <p className="text-xs text-gray-400">Intelligent Operations</p>
              </div>
            </div>

            {/* Voice UI Widget */}
            <div className="absolute bottom-[5%] right-[5%] flex items-center gap-4">
              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-xl backdrop-blur-md">
                <p className="text-sm font-medium text-white mb-2">Wingman, take me<br/>to Gate A16</p>
                <div className="flex gap-1 items-end h-4">
                   {/* Fake Audio Waveform */}
                   {[...Array(15)].map((_, i) => (
                     <div key={i} className={`w-1 bg-purple-500 rounded-full animate-pulse`} style={{ height: `${Math.random() * 100 + 20}%`, animationDelay: `${i * 0.1}s`}}></div>
                   ))}
                </div>
              </div>
              <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                <Mic className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
