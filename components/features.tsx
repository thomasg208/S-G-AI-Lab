"use client"

import { useState } from "react"
import { Brain, BookOpen, TrendingUp, GraduationCap, Shield, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import DemoRequestForm from "@/components/DemoRequestForm"

export default function Features() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  const agiSystems = [
    {
      title: "Urban Vantage™ — The Interface Engine",
      tagline: "Deploy enterprise intelligence dashboards at scale with zero code.",
      features: [
        "White-label ready interface engine for SaaS integration",
        "Reseller program with 40% margins and co-branding options",
        "Real-time analytics across unlimited teams and data sources"
      ],
      ctaLabel: "Request a Demo",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "Crypto Lab™ — The Learning Intelligence API",
      tagline: "Monetize crypto education with AI-powered adaptive learning.",
      features: [
        "White-label crypto education platform with your branding",
        "Reseller opportunity: tap into $4.2B crypto education market",
        "AI-generated content that adapts to user skill levels instantly"
      ],
      ctaLabel: "Request a Demo",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "QFT™ — The Quantum Financial Toolkit",
      tagline: "REST API that turns market data into profitable strategies.",
      features: [
        "White-label quant engine for wealth management platforms",
        "Reseller program: API access with revenue sharing model",
        "Quantum-speed simulations beating traditional analysis by 100x"
      ],
      ctaLabel: "Request a Demo",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Nexalytica™ — The Learning Intelligence Platform",
      tagline: "Scale personalized education with AI that learns your market.",
      features: [
        "White-label LMS with AI tutoring and content generation",
        "Reseller program for enterprise training and EdTech markets",
        "Adaptive learning paths that increase completion rates by 300%"
      ],
      ctaLabel: "Request a Demo",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "Guardian AI™ — The Autonomous Safety Grid",
      tagline: "AI-powered emergency response that saves lives and reduces liability.",
      features: [
        "White-label safety monitoring for smart cities and facilities",
        "Reseller program for security and emergency management sectors",
        "Autonomous agent coordination reducing response time by 80%"
      ],
      ctaLabel: "Request a Demo",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "SONIQCELL™ — The Voice Intelligence Platform",
      tagline: "Transform text into human-quality speech with emotionally resonant AI voices.",
      features: [
        "White-label voice API with brand voice cloning and personalization",
        "Reseller program for AI SaaS, education, gaming, and media markets",
        "Developer-friendly integration with usage-based monetization at scale"
      ],
      ctaLabel: "Request a Demo",
      icon: <Mic className="h-6 w-6" />,
    },
  ]

  return (
    <>
      <section id="features" className="relative py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="container relative px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">The 6 Flagship AGI Systems</h2>
          <p className="mb-16 text-lg text-gray-400">Our comprehensive suite of autonomous agents and digital twins</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {agiSystems.map((system, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:border-purple-900/50 hover:bg-gray-800/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/20 text-purple-400">
                {system.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold">{system.title}</h3>
              <p className="mb-4 text-purple-400 font-medium">{system.tagline}</p>
              <ul className="mb-6 space-y-2 flex-1">
                {system.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="bg-purple-600 text-white hover:bg-purple-700 w-full"
                onClick={() => setIsDemoFormOpen(true)}
              >
                {system.ctaLabel}
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
