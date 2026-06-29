import { ArrowRight, Plane, Map, Heart, Briefcase, MoreHorizontal, LayoutGrid, Compass, BarChart, Users, Code, FileText, Link, Zap } from "lucide-react"

export default function Ecosystem() {
  const marketplaceItems = [
    { icon: <LayoutGrid className="w-5 h-5 text-yellow-400" />, title: "AI Applications", desc: "Smart solutions for every need" },
    { icon: <Compass className="w-5 h-5 text-blue-400" />, title: "Tourism Experiences", desc: "Tours, activities & local discovery" },
    { icon: <BarChart className="w-5 h-5 text-orange-400" />, title: "Business Services", desc: "Promote, sell and grow your business" },
    { icon: <Users className="w-5 h-5 text-red-400" />, title: "Creator Economy", desc: "Monetize content & experiences" },
    { icon: <Code className="w-5 h-5 text-blue-500" />, title: "Developer APIs", desc: "Build with powerful spatial intelligence" },
    { icon: <FileText className="w-5 h-5 text-orange-500" />, title: "Digital Products", desc: "Templates, assets & tools" },
    { icon: <Link className="w-5 h-5 text-teal-400" />, title: "Industry Integrations", desc: "Connect with your existing systems" },
    { icon: <Zap className="w-5 h-5 text-pink-400" />, title: "And Many More", desc: "The possibilities are endless" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-950 border-t border-gray-800">
      <div className="container px-4 md:px-8 mx-auto space-y-16">
        
        {/* The Wingman Ecosystem */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Wingman <span className="text-purple-400">Ecosystem</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Wingman is the foundation of a growing ecosystem of AI-powered solutions. Every product is powered by the Wingman Intelligence Layer.
            </p>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-purple-500/50 rounded-full text-purple-300 font-medium hover:bg-purple-900/30 transition-colors">
              Explore the Ecosystem <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 relative">
             {/* Ecosystem Nodes */}
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center mb-3">
                 <Plane className="w-6 h-6 text-blue-400" />
               </div>
               <span className="text-xs text-gray-300 text-center w-20">Airport AI Concierge</span>
             </div>

             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center mb-3">
                 <Map className="w-6 h-6 text-purple-400" />
               </div>
               <span className="text-xs text-gray-300 text-center w-20">Tourism Intelligence</span>
             </div>

             <div className="flex flex-col items-center mx-4">
               <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-[2px] shadow-[0_0_30px_rgba(147,51,234,0.4)]">
                 <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
                   <img src="/images/logos/wingman_ai_logo.png" alt="Wingman Logo" className="w-16 h-16 object-contain" />
                 </div>
               </div>
               <span className="text-sm font-bold text-white text-center mt-4">Wingman Intelligence<br/>Layer</span>
             </div>

             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-red-900/40 border border-red-500/30 flex items-center justify-center mb-3">
                 <Heart className="w-6 h-6 text-red-400" />
               </div>
               <span className="text-xs text-gray-300 text-center w-20">Creator Marketplace</span>
             </div>

             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-orange-900/40 border border-orange-500/30 flex items-center justify-center mb-3">
                 <Briefcase className="w-6 h-6 text-orange-400" />
               </div>
               <span className="text-xs text-gray-300 text-center w-20">Enterprise APIs</span>
             </div>

             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mb-3">
                 <MoreHorizontal className="w-6 h-6 text-gray-400" />
               </div>
               <span className="text-xs text-gray-400 text-center w-20">And More Coming Soon</span>
             </div>
          </div>
        </div>

        {/* Wingman Marketplace */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Wingman Marketplace</h2>
              <span className="bg-purple-900/50 text-purple-300 text-xs font-bold px-2 py-1 rounded border border-purple-500/30">COMING SOON</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              The Wingman Marketplace will connect businesses, creators, developers, tourism organizations and enterprises through a unified AI-powered platform.
            </p>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-purple-500/50 rounded-full text-purple-300 font-medium hover:bg-purple-900/30 transition-colors">
              Join the Waitlist <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {marketplaceItems.map((item, idx) => (
              <div key={idx} className="bg-gray-950 border border-gray-800 p-4 rounded-xl flex items-start gap-3">
                <div className="mt-1 bg-gray-900 p-2 rounded-lg">{item.icon}</div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
