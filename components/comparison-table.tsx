"use client"

import { Check, Circle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import DemoRequestForm from "@/components/DemoRequestForm"

export default function ComparisonTable() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  
  const capabilities = [
    { name: "Battery physics simulation", fusioncell: "active", others: "research" },
    { name: "AI-enhanced predictions", fusioncell: "active", others: "planned" },
    { name: "Real-time telemetry processing", fusioncell: "planned", others: "planned" },
    { name: "Digital twin synchronization", fusioncell: "active", others: "research" },
    { name: "Thermal modeling", fusioncell: "active", others: "planned" },
    { name: "State-of-health estimation", fusioncell: "active", others: "research" },
    { name: "API access for partners", fusioncell: "planned", others: "planned" },
  ]

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case "active":
        return <Check className="h-5 w-5 text-green-400" />
      case "planned":
        return <Clock className="h-5 w-5 text-yellow-400" />
      case "research":
        return <Circle className="h-5 w-5 text-gray-500" />
      default:
        return <Circle className="h-5 w-5 text-gray-600" />
    }
  }

  return (
    <>
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>

        <div className="container relative px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-purple-400 font-medium mb-2">Development Status</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">FusionCell Capabilities</h2>
            <p className="text-gray-400 text-lg">
              A transparent look at what's working, what's in development, and what's still in research phase. 
              We believe in honest communication about our progress.
            </p>
            <div className="mt-6 p-4 rounded-lg border border-orange-900/30 bg-orange-950/20 max-w-2xl mx-auto">
              <p className="text-sm text-orange-300 font-medium mb-2">⚠️ Prototype Status</p>
              <p className="text-gray-300 text-sm">
                FusionCell is in active development. Features marked "Active" are functional in our prototype. 
                "Planned" features are on our near-term roadmap. "Research" items are exploratory.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                {/* Table header */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="col-span-1 text-gray-400 font-medium">Capability</div>
                  <div className="col-span-1 text-center">
                    <div className="font-bold text-xl mb-2 text-purple-400">FusionCell</div>
                    <div className="text-sm text-gray-400">Our Prototype</div>
                  </div>
                  <div className="col-span-1 text-center">
                    <div className="font-bold text-xl mb-2 text-gray-400">Future Platforms</div>
                    <div className="text-sm text-gray-500">Other Projects</div>
                  </div>
                </div>

                {/* Table body */}
                <div className="space-y-4">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 py-4 border-t border-gray-800">
                      <div className="col-span-1 flex items-center font-medium text-gray-300">{capability.name}</div>
                      <div className="col-span-1 flex justify-center items-center gap-2">
                        <StatusIcon status={capability.fusioncell} />
                        <span className="text-xs text-gray-500 capitalize">{capability.fusioncell}</span>
                      </div>
                      <div className="col-span-1 flex justify-center items-center gap-2">
                        <StatusIcon status={capability.others} />
                        <span className="text-xs text-gray-500 capitalize">{capability.others}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-gray-400">Active in prototype</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-400">Planned development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Circle className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-400">Research phase</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => setIsDemoFormOpen(true)}
                  >
                    Request Development Updates
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </>
  )
}
