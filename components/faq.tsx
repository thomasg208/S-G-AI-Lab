"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Faq() {
  const faqs = [
    {
      question: "What is S&G AI Lab?",
      answer:
        "S&G AI Lab is an early-stage deep-tech startup founded in 2025 by two brothers — Thomas (a U.S. Navy veteran and AI systems engineer) and Henry (operations and strategy lead). We're focused on building applied intelligence systems, with FusionCell as our primary project.",
    },
    {
      question: "What is FusionCell?",
      answer:
        "FusionCell is our flagship prototype — an AI-powered digital twin designed to model, simulate, and optimize battery systems. It combines physics-based modeling with modern transformer architectures. The platform is currently in active development and available for early access partners.",
    },
    {
      question: "Are your products production-ready?",
      answer:
        "No, and we're transparent about that. FusionCell is in prototype stage with early access available for research partners. Our other projects (Urban Vantage, Crypto Lab, QFT, Guardian AI, SONIQCELL) are in various stages of conceptual development and research. We believe in honest communication about where we are.",
    },
    {
      question: "How can I get involved with FusionCell?",
      answer:
        "We're currently accepting early access partners who are interested in battery simulation and digital twin technology. This includes researchers, battery manufacturers, and companies in the energy sector. Reach out through our contact form to discuss collaboration opportunities.",
    },
    {
      question: "Are you seeking investment?",
      answer:
        "Yes, we're open to strategic investors who align with our vision of building practical, honest AI solutions. As a seed-stage startup, we're looking for partners who understand early-stage development and are interested in the long-term potential of digital twin technology in the energy sector.",
    },
    {
      question: "What makes you different from other AI startups?",
      answer:
        "We're not trying to be everything to everyone. We're a small, focused team with military-grade discipline and technical rigor. We don't overclaim — we build, test, iterate, and communicate progress honestly. Our veteran-led approach means we prioritize execution over hype.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pink-900/10 rounded-full blur-3xl"></div>

      <div className="container relative px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-purple-400 font-medium mb-2">Questions & Answers</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">
            Learn more about S&G AI Lab, our approach, and what we're building. We believe in transparency and honest communication.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-sm"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-purple-400 transition-transform duration-300",
                      activeIndex === index ? "transform rotate-180" : "",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-400">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Have more questions?{" "}
            <a href="#" className="text-purple-400 hover:text-purple-300 font-medium">
              Reach out to the founders directly
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
