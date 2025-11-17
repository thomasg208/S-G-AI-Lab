import Image from "next/image"

export default function Founders() {
  const founders = [
    {
      name: "Thomas Gaye",
      role: "Co-Founder, Chief AI Architect",
      bio: "U.S. Navy Veteran | Elite AI Systems Engineer | Architect of 35+ AI/AGI Systems across startups and enterprise sectors. Thomas commands the strategic design and deployment of self-optimizing intelligent systems that operate autonomously at scale. With a mission-first mindset forged in military precision, he architects AI/ML infrastructure, leads full-stack AGI execution, and advances sovereign AI operations that serve enterprise and public missions alike.",
      quote: "We don't just deploy models — we weaponize intelligence to create autonomous systems that adapt, evolve, and dominate their domains.",
      avatar: "/assets/founders/thomas-gaye.png",
    },
    {
      name: "Henry Slebo",
      role: "Co-Founder, Executive Strategist & Ops Lead",
      bio: "Ops Commander | Strategy Architect | Growth Execution Specialist. Henry drives organizational strategy, internal systems, and tactical execution across every client engagement. With deep expertise in startup operations, business development, and systems alignment, Henry ensures that each AGI deployment moves with precision, delivers enterprise value, and scales on demand.",
      quote: "Behind every system is precision ops, forward strategy, and a mandate to win.",
      avatar: "/assets/founders/henry-slebo.png",
    },
  ]

  return (
    <section id="founders" className="relative py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="container relative px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Meet The Founders</h2>
          <p className="mb-8 text-lg text-gray-400">
            The visionaries behind S & G AI Lab's autonomous intelligence revolution
          </p>
          <div className="mb-12 p-4 rounded-lg border border-green-900/30 bg-green-950/20 max-w-2xl mx-auto">
            <p className="text-sm text-green-300 font-medium mb-2">🎯 Why Invest Now</p>
            <p className="text-gray-300 text-sm">
              Military-grade AI expertise • Enterprise deployment experience • Production-ready platforms • $1.8T market opportunity
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm"
            >
              <div className="flex items-start gap-6 mb-6">
                <Image
                  src={founder.avatar || "/placeholder.svg"}
                  alt={founder.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover border-2 border-purple-500"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{founder.role}</p>
                  <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-purple-500">
                    <p className="text-gray-300 italic">"{founder.quote}"</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
