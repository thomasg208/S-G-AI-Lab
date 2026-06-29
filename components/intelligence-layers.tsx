import { Globe, Navigation, Mic, BrainCircuit, ArrowRight } from "lucide-react"

export default function IntelligenceLayers() {
  const layers = [
    {
      title: "Geospatial AI",
      description: "Understands locations, maps, infrastructure and the world around you.",
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      colorClass: "from-purple-500/20 to-transparent border-purple-500/30",
    },
    {
      title: "Smart Navigation",
      description: "Indoor & outdoor navigation for airports, campuses, hospitals, cities and more.",
      icon: <Navigation className="w-6 h-6 text-blue-400" />,
      colorClass: "from-blue-500/20 to-transparent border-blue-500/30",
    },
    {
      title: "Voice AI",
      description: "Talk naturally with Wingman to get answers, directions and recommendations.",
      icon: <Mic className="w-6 h-6 text-pink-400" />,
      colorClass: "from-pink-500/20 to-transparent border-pink-500/30",
    },
    {
      title: "Prompt Intelligence",
      description: "Context-aware intelligence based on location, environment, preferences and intent.",
      icon: <BrainCircuit className="w-6 h-6 text-green-400" />,
      colorClass: "from-green-500/20 to-transparent border-green-500/30",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            One Platform. Multiple Intelligence Layers.
          </h2>
          <p className="text-gray-400 text-lg">
            Wingman combines powerful AI capabilities into one seamless platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((layer, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col bg-gray-900 border ${layer.colorClass} rounded-2xl p-8 hover:bg-gray-800/80 transition-colors bg-gradient-to-br`}
            >
              <div className="w-12 h-12 rounded-full bg-gray-950 border border-gray-800 flex items-center justify-center mb-6 shadow-inner">
                {layer.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{layer.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {layer.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300">
                Explore <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
