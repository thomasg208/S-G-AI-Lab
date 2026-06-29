"use client"

import { motion } from "framer-motion"
import { Radar, Layers, Archive } from "lucide-react"

export default function ExploratoryPrototypes() {
  const prototypes = [
    {
      icon: <Radar className="w-5 h-5" />,
      title: "StartupPulse — Venture Intelligence Layer",
      description: "AI-assisted venture signal mapping for early-risk detection. Currently a research prototype.",
      color: "purple",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Urban Vantage — Intelligent City Interfaces",
      description: "Concept interface for contextual AI dashboards. Early exploration stage.",
      color: "pink",
    },
    {
      icon: <Archive className="w-5 h-5" />,
      title: "CryptoLab / QFT",
      description: "Archived experimental engines for adaptive learning & quant insights. Not active products.",
      color: "gray",
    },
  ]

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-950"></div>

      <div className="container relative px-4 md:px-8">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-2">
              Exploratory Prototypes
            </h3>
            <p className="text-gray-500 text-sm">Not Yet Production-Ready</p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {prototypes.map((prototype, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${
                    prototype.color === "purple" 
                      ? "bg-purple-900/30 text-purple-400" 
                      : prototype.color === "pink"
                      ? "bg-pink-900/30 text-pink-400"
                      : "bg-gray-800 text-gray-400"
                  }`}>
                    {prototype.icon}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-orange-900/30 text-orange-400 border border-orange-800/50">
                    Exploratory Prototype
                  </span>
                </div>
                <h4 className="font-semibold text-white text-sm mb-2">{prototype.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{prototype.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs max-w-xl mx-auto">
              These concepts represent early-stage research by our two-founder team. 
              None are active products or available for deployment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
