"use client"

import { CheckCircle, Clock, Users, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import DemoRequestForm from "@/components/DemoRequestForm"

export default function Pricing() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  const engagementOptions = [
    {
      name: "Early Access Partner",
      price: "Free",
      description: "For researchers and companies who want to explore FusionCell in its current state",
      features: [
        "Access to FusionCell prototype",
        "Direct communication with founders",
        "Influence on product development",
        "Priority for future features",
        "No commitment required"
      ],
      icon: <Clock className="h-6 w-6 text-purple-400" />,
    },
    {
      name: "Research Collaborator",
      price: "Partnership",
      description: "For academic institutions and research labs interested in co-development",
      features: [
        "Joint research initiatives",
        "Custom simulation scenarios",
        "Co-authored publications",
        "Access to internal roadmap",
        "Regular technical sync calls",
        "Shared IP arrangements (negotiable)"
      ],
      popular: true,
      icon: <Users className="h-6 w-6 text-purple-400" />,
    },
    {
      name: "Strategic Investor",
      price: "Equity",
      description: "For investors aligned with our vision of practical, honest AI development",
      features: [
        "Equity participation in seed round",
        "Board observer rights (negotiable)",
        "Quarterly investor updates",
        "Strategic advisory input",
        "Introduction to industry network",
        "Early access to all prototypes",
        "Long-term partnership approach"
      ],
      icon: <Handshake className="h-6 w-6 text-purple-400" />,
    },
  ]

  return (
    <>
      <section id="pricing" className="relative py-20 md:py-32">
      {/* Background SVG pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="container relative px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 mx-auto max-w-4xl inline-block rounded-full bg-gray-800 px-4 py-1 text-sm">
            <span className="text-purple-400">🤝 Partnership Models</span> — <span className="text-green-400">No Traditional Pricing Yet</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ways to Engage</h2>
          <p className="mb-8 text-lg text-gray-400">We're an early-stage startup — not a SaaS product with tiered pricing. Here's how to work with us.</p>
          <div className="mb-12 p-4 rounded-lg border border-orange-900/30 bg-orange-950/20 max-w-3xl mx-auto">
            <p className="text-sm text-orange-300 font-medium mb-2">⚠️ Transparency Note</p>
            <p className="text-gray-300 text-sm">
              FusionCell is a prototype, not a finished product. We're not offering enterprise licenses or production SLAs. 
              These engagement models reflect honest ways to collaborate at our current stage.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {engagementOptions.map((option, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-xl border bg-gray-900/50 p-8 backdrop-blur-sm ${
                option.popular ? "border-2 border-purple-600 relative" : "border-gray-800"
              }`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-4 py-1 text-sm font-medium text-white">
                  Most Relevant
                </div>
              )}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  {option.icon}
                  <h3 className="text-2xl font-bold">{option.name}</h3>
                </div>
                <div className="mb-2 flex items-baseline">
                  <span className="text-4xl font-bold">{option.price}</span>
                </div>
                <p className="text-gray-400">{option.description}</p>
              </div>
              <ul className="mb-8 flex flex-col gap-3">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-auto ${
                  option.popular
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
                onClick={() => setIsDemoFormOpen(true)}
              >
                Start Conversation
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            We believe in building relationships before transactions. Reach out and let's discuss how we might work together 
            as we develop FusionCell and explore the future of AI-powered simulation.
          </p>
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
