"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import DemoRequestForm from "@/components/DemoRequestForm"

export default function Pricing() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  const plans = [
    {
      name: "Startup Launch",
      price: "$499",
      description: "Perfect for early-stage companies and pilot projects",
      features: [
        "1 AGI Platform License",
        "Up to 1,000 Monthly API Calls",
        "Basic White-Label Options",
        "Email Support",
        "Documentation Access"
      ],
    },
    {
      name: "Growth Scale",
      price: "$1,999",
      description: "Ideal for scaling businesses with multiple platforms",
      features: [
        "3 AGI Platform Licenses",
        "Up to 10,000 Monthly API Calls",
        "Full White-Label Customization",
        "Priority Support & SLA",
        "Reseller Rights (30% Margin)",
        "Custom Integration Support"
      ],
      popular: true,
    },
    {
      name: "Enterprise Partner",
      price: "Custom",
      description: "For large organizations and strategic resellers",
      features: [
        "Unlimited Platform Licenses",
        "Unlimited API Usage",
        "Enterprise White-Label Framework",
        "24/7 Dedicated Support Team",
        "Reseller Rights (40% Margin)",
        "Custom Development & Training",
        "Revenue Sharing Options"
      ],
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
            <span className="text-purple-400">💰 Startup-Friendly</span> — <span className="text-green-400">White-Label & Reseller Ready</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">AGI Platform Pricing</h2>
          <p className="mb-8 text-lg text-gray-400">Deploy our flagship AGI systems under your brand with reseller margins</p>
          <div className="mb-12 p-4 rounded-lg border border-green-900/30 bg-green-950/20 max-w-3xl mx-auto">
            <p className="text-sm text-green-300 font-medium mb-2">🚀 Investor Opportunity</p>
            <p className="text-gray-300 text-sm">
              Early investors get preferred reseller rates up to 50% • Platform licensing revenue • White-label market penetration
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-xl border bg-gray-900/50 p-8 backdrop-blur-sm ${
                plan.popular ? "border-2 border-purple-600 relative" : "border-gray-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-4 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <div className="mb-2 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              <ul className="mb-8 flex flex-col gap-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-auto ${
                  plan.popular
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
                onClick={() => setIsDemoFormOpen(true)}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
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
