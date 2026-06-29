"use client"

import { useState } from "react"
import { Battery, Brain, TrendingUp, Layers, Cpu, Beaker } from "lucide-react"
import { Button } from "@/components/ui/button"
import DemoRequestForm from "@/components/DemoRequestForm"

export default function Features() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  const exploratoryProjects = [
    {
      title: "FusionCell™ — Digital Twin for Batteries",
      tagline: "Our flagship prototype: AI-powered battery simulation and optimization.",
      status: "Active Development",
      features: [
        "Physics-informed neural networks for battery modeling",
        "Real-time telemetry simulation and prediction",
        "Early-access program for research partners"
      ],
      ctaLabel: "Request Early Access",
      icon: <Battery className="h-6 w-6" />,
    },
    {
      title: "Urban Vantage™ — Dashboard Framework",
      tagline: "Exploratory prototype for data visualization and analytics.",
      status: "Concept Phase",
      features: [
        "Flexible dashboard architecture for diverse data sources",
        "Designed for future white-label customization",
        "Currently in internal testing and iteration"
      ],
      ctaLabel: "Join Waitlist",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "Crypto Lab™ — Educational Platform",
      tagline: "Prototype for adaptive crypto education experiences.",
      status: "Early Exploration",
      features: [
        "AI-assisted content curation concepts",
        "Adaptive learning path prototypes",
        "Educational framework in design phase"
      ],
      ctaLabel: "Express Interest",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "QFT™ — Quantitative Analysis Tools",
      tagline: "Exploratory research into AI-driven financial analysis.",
      status: "Research Phase",
      features: [
        "Market pattern recognition experiments",
        "Backtesting framework prototypes",
        "Theoretical foundation development"
      ],
      ctaLabel: "Learn More",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Guardian AI™ — Safety Monitoring Concepts",
      tagline: "Early-stage research into AI-powered safety systems.",
      status: "Conceptual",
      features: [
        "Autonomous monitoring system design studies",
        "Emergency response coordination concepts",
        "Architecture planning phase"
      ],
      ctaLabel: "Learn More",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      title: "SONIQCELL™ — Voice Intelligence Research",
      tagline: "Experimental voice synthesis and processing research.",
      status: "Early Research",
      features: [
        "Text-to-speech experimentation",
        "Voice quality and naturalness studies",
        "API architecture exploration"
      ],
      ctaLabel: "Learn More",
      icon: <Beaker className="h-6 w-6" />,
    },
  ]

  return (
    <>
      <section id="features" className="relative py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="container relative px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full bg-orange-900/20 border border-orange-800/30 px-4 py-1 text-sm">
            <span className="text-orange-300">⚠️ All projects listed below are early-stage prototypes or concepts</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Exploratory Projects & Prototypes</h2>
          <p className="mb-8 text-lg text-gray-400">A transparent look at what we're building — from active development to conceptual research</p>
          <p className="mb-16 text-gray-500 text-sm max-w-xl mx-auto">
            As an early-stage startup, we're focused on FusionCell as our primary initiative. Other projects represent exploratory research and future directions we're considering.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {exploratoryProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:border-purple-900/50 hover:bg-gray-800/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/20 text-purple-400">
                  {project.icon}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.status === "Active Development" 
                    ? "bg-green-900/30 text-green-400 border border-green-800/50"
                    : project.status === "Concept Phase" || project.status === "Early Exploration"
                    ? "bg-yellow-900/30 text-yellow-400 border border-yellow-800/50"
                    : "bg-gray-800 text-gray-400 border border-gray-700"
                }`}>
                  {project.status}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
              <p className="mb-4 text-purple-400 font-medium">{project.tagline}</p>
              <ul className="mb-6 space-y-2 flex-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  project.status === "Active Development"
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setIsDemoFormOpen(true)}
              >
                {project.ctaLabel}
              </Button>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Demo Request Form Modal */}
      <DemoRequestForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </>
  )
}
