"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import VideoPlayer from "@/components/VideoPlayer"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    const modal = document.getElementById('contact-modal')
    if (modal) {
      modal.classList.remove('hidden')
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    const modal = document.getElementById('contact-modal')
    if (modal) {
      modal.classList.add('hidden')
    }
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isModalOpen])

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      {/* Background SVG pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative px-4 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 mx-auto max-w-4xl inline-block rounded-full bg-gray-800 px-4 py-1 text-sm">
            <span className="text-purple-400">🚀 Seed-Stage Startup</span> — <span className="text-green-400">Open to Strategic Investors</span>
          </div>
          <h1 className="mb-6 mx-auto max-w-4xl bg-gradient-to-r from-purple-400 via-pink-400 to-white bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
            FusionCell: AI-Powered Energy Revolution
          </h1>
          <p className="mb-8 mx-auto max-w-4xl text-2xl font-semibold text-purple-300 md:text-3xl">
            Welcome to S&G AI Lab… where intelligent energy meets next-generation innovation.
          </p>
          <p className="mb-12 mx-auto max-w-4xl text-lg text-gray-300 md:text-xl leading-relaxed">
            Today, we introduce FusionCell — the world's first AI-driven digital twin engineered to model, simulate, and optimize battery systems with unprecedented precision.
          </p>
          <div className="mb-12 p-6 rounded-xl border border-purple-900/30 bg-gradient-to-r from-purple-950/20 to-pink-950/20 max-w-4xl mx-auto">
            <p className="text-purple-200 font-medium mb-3 text-lg">🔬 BREAKTHROUGH TECHNOLOGY</p>
            <p className="text-gray-300 leading-relaxed">
              Built by our AGI research team, FusionCell fuses physics-based modeling with advanced transformer intelligence to predict performance, monitor telemetry, and accelerate hardware development at a fraction of the time and cost.
            </p>
            <p className="mt-4 text-purple-300 font-semibold text-lg">
              This is more than a battery simulation.<br/>
              This is the blueprint for the future of energy.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 h-12 md:h-14 px-6 md:px-10 text-base md:text-lg font-semibold shadow-lg shadow-purple-600/25">
              Experience FusionCell
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-300 hover:bg-purple-600/10 hover:text-white h-12 md:h-14 px-6 md:px-10 text-base md:text-lg font-semibold"
              onClick={openModal}
            >
              View Investor Pitch Deck
            </Button>
          </div>
          <div className="mt-8 text-center">
            <p className="text-purple-400 font-medium text-lg">
              Welcome to FusionCell — where artificial intelligence powers real-world innovation.
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-70 blur"></div>
            <div className="relative rounded-xl border border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
              <VideoPlayer
                src="/videos/FusionCell-battery.mp4"
                alt="FusionCell Battery Digital Twin Preview"
                width={1200}
                height={675}
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-800/50 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-orange-300 font-medium text-sm">FusionCell currently in development - Early access available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
