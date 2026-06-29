"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export default function WingmanTeaser() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <section className="py-16 md:py-24 relative bg-gray-950">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
          
          <div className="relative w-full aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
             
             {/* Video Element */}
             {isPlaying && (
               <iframe 
                 className="absolute inset-0 w-full h-full relative z-20"
                 src="https://www.youtube.com/embed/Lm6EIjSqarE?autoplay=1&rel=0&modestbranding=1"
                 title="Wingman Demonstration"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowFullScreen
               ></iframe>
             )}

             {/* Mockup Background Image Area */}
             {!isPlaying && (
               <>
                 <div className="absolute inset-0 bg-[url('/images/wingmanv1.png')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
                 
                 {/* Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center z-10">
                    <button 
                      onClick={handlePlay}
                      className="w-20 h-20 md:w-24 md:h-24 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600/20 hover:border-purple-500/50 transition-all group"
                    >
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-2 group-hover:text-purple-400 transition-colors" />
                    </button>
                 </div>

                 {/* Text Overlay matching the mockup */}
                 <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-2xl z-10 flex flex-col items-start">
                   <div className="bg-[#2D31A6] px-4 py-2 mb-1">
                     <h3 className="text-2xl md:text-4xl font-bold text-white m-0 leading-none">
                       Wingman Platform
                     </h3>
                   </div>
                   <div className="bg-[#2D31A6] px-4 py-2 mb-4">
                     <h3 className="text-2xl md:text-4xl font-bold text-white m-0 leading-none">
                       Demonstration
                     </h3>
                   </div>
                   <div className="bg-[#2D31A6] px-3 py-1 mb-1">
                     <p className="text-gray-100 text-sm md:text-base m-0 leading-none">
                       Experience how Wingman transforms the way people navigate, discover,
                     </p>
                   </div>
                   <div className="bg-[#2D31A6] px-3 py-1">
                     <p className="text-gray-100 text-sm md:text-base m-0 leading-none">
                       and interact with the world.
                     </p>
                   </div>
                 </div>
               </>
             )}
          </div>
          
        </div>
      </div>
    </section>
  )
}
