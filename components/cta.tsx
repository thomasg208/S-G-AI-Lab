import { ArrowRight } from "lucide-react"

export default function Cta() {
  return (
    <section className="py-12 md:py-16 bg-[#0B1120]">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="bg-gray-900 border border-purple-500/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(147,51,234,0.15)] relative overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent pointer-events-none"></div>

          <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
            <div className="w-20 h-20 shrink-0 rounded-xl bg-gray-950 border border-purple-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.4)] overflow-hidden">
              <img src="/images/logos/wingman_ai_logo.png" alt="Wingman Logo" className="w-14 h-14 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Be Among the First to Experience Wingman</h3>
              <p className="text-gray-400 text-sm md:text-base max-w-xl">
                See how AI is transforming navigation, tourism, airports, enterprise operations and the connected world.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10 shrink-0">
            <a 
              href="https://calendly.com/thomasg208/30min?month=2026-06"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-600/25 transition-all flex items-center justify-center whitespace-nowrap"
            >
              Request a Demo <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <button className="px-8 py-4 bg-transparent border border-gray-600 hover:border-gray-400 text-gray-300 font-semibold rounded-lg transition-all flex items-center justify-center whitespace-nowrap">
              Join Marketplace Waitlist
            </button>
          </div>
          
        </div>
      </div>
    </section>
  )
}
