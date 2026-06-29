import { Plane, PlusSquare, GraduationCap, Ship, ShoppingBag, ShieldCheck, Check } from "lucide-react"

export default function Environments() {
  const industries = [
    {
      title: "AIRPORTS",
      subtitle: "Smart wayfinding for every traveler.",
      icon: <Plane className="w-8 h-8 text-white mb-4" />,
      features: ["Gate Navigation", "Real-time Updates", "Accessibility Routes", "Flight Integration"],
      bgClass: "from-blue-900/80 to-gray-900",
      bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "HOSPITALS",
      subtitle: "Better navigation. Better care.",
      icon: <PlusSquare className="w-8 h-8 text-white mb-4" />,
      features: ["Department Finder", "Patient Guidance", "EMERGENCY Routing", "Staff Efficiency"],
      bgClass: "from-teal-900/80 to-gray-900",
      bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "UNIVERSITIES",
      subtitle: "Navigate campuses with ease.",
      icon: <GraduationCap className="w-8 h-8 text-white mb-4" />,
      features: ["Building Finder", "Classroom Routes", "Event Guidance", "Campus Safety"],
      bgClass: "from-amber-900/80 to-gray-900",
      bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "CRUISE PORTS",
      subtitle: "Seamless journeys from dock to destination.",
      icon: <Ship className="w-8 h-8 text-white mb-4" />,
      features: ["Terminal Navigation", "Shore Excursions", "Service Discovery", "Multi-terminal Support"],
      bgClass: "from-cyan-900/80 to-gray-900",
      bgImage: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "SHOPPING MALLS",
      subtitle: "Find it. Love it. Every time.",
      icon: <ShoppingBag className="w-8 h-8 text-white mb-4" />,
      features: ["Store Navigation", "Offers & Promotions", "Parking Guidance", "Interactive Maps"],
      bgClass: "from-pink-900/80 to-gray-900",
      bgImage: "https://images.unsplash.com/photo-1519567281028-095bb4f89d6e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "MILITARY BASES",
      subtitle: "Mission-ready navigation.",
      icon: <ShieldCheck className="w-8 h-8 text-white mb-4" />,
      features: ["Secure Wayfinding", "Facility Access", "Personnel Guidance", "Operational Efficiency"],
      bgClass: "from-green-900/80 to-gray-900",
      bgImage: "https://images.unsplash.com/photo-1605634674064-16b1e60dc3da?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="container px-4 md:px-8 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          ONE PLATFORM. EVERY ENVIRONMENT.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-auto xl:h-[600px]">
          {industries.map((ind, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b ${ind.bgClass} flex flex-col items-center justify-end p-6 text-center group transition-all hover:scale-[1.02] hover:z-10`}
            >
              {/* Background Image overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-15 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${ind.bgImage})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>

              <div className="relative z-10 w-full flex flex-col items-center">
                {ind.icon}
                <h3 className="text-xl font-bold text-white tracking-widest mb-2">{ind.title}</h3>
                <p className="text-gray-300 text-sm mb-6 min-h-[40px]">{ind.subtitle}</p>
                
                <div className="w-full space-y-3 border-t border-gray-700 pt-4">
                  {ind.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center text-left">
                      <Check className="w-4 h-4 text-cyan-400 mr-2 shrink-0" />
                      <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
