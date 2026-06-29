"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import BlogModal from "./BlogModal"

export default function BlogPreview() {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const articles = [
    {
      title: "Why We're Building FusionCell: The Battery Simulation Challenge",
      excerpt: "Understanding the problem space and why physics-informed AI is the answer to next-generation battery development.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop",
      category: "Technical Deep-Dive",
      date: "Dec 15, 2025",
      readTime: "8 min read",
      author: "Thomas Gaye",
      authorImage: "/assets/founders/thomas-gaye.png",
      content: `
        <h2 class="text-2xl font-bold text-white mb-4">The Battery Development Bottleneck</h2>
        <p class="mb-4">Battery technology is advancing rapidly, but the development cycle remains painfully slow. Traditional battery development relies heavily on physical prototyping — building cells, testing them for months or years, analyzing failures, and iterating. This cycle can take 5-10 years from concept to commercial deployment.</p>
        
        <p class="mb-4">At S&G AI Lab, we asked a simple question: what if we could simulate battery behavior with enough accuracy to reduce physical prototyping significantly? That question led us to FusionCell.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">Why Traditional Simulation Falls Short</h2>
        <p class="mb-4">Physics-based battery models exist and are well-understood. Electrochemical dynamics, thermal management, degradation mechanisms — the underlying science is mature. However, these models struggle with real-world complexity: manufacturing variations, aging effects, and the thousands of coupled variables that affect battery performance.</p>
        
        <p class="mb-4">Pure machine learning approaches have the opposite problem. They can capture complex patterns in data, but they lack grounding in physical reality. A neural network might predict battery behavior accurately within its training distribution, but fail catastrophically when conditions change.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">Our Approach: Physics-Informed Neural Networks</h2>
        <p class="mb-4">FusionCell combines the best of both worlds. We use physics equations as constraints and structure for neural networks, ensuring that predictions always respect fundamental physical laws while capturing the complex, nonlinear behaviors that pure physics models miss.</p>
        
        <p class="mb-4">This is not a new idea in the research community, but applying it effectively to battery simulation requires deep expertise in both electrochemistry and machine learning. That's exactly what we're building.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">Where We Are Today</h2>
        <p class="mb-4">FusionCell is a prototype. We're not claiming to have solved battery simulation — we're claiming to have a promising approach that we're actively developing and validating. Our early results are encouraging, but we have significant work ahead.</p>
        
        <p class="mb-4">We're currently in conversation with potential early access partners who can provide real-world data and use cases to help us refine our models. If you're working on battery development and interested in exploring what simulation can do, we'd love to talk.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">The Vision</h2>
        <p class="mb-4">Our goal is to build a digital twin platform that becomes an essential tool in battery development workflows. Not a replacement for physical testing, but a complement that can dramatically reduce the number of physical iterations needed.</p>
        
        <p class="mb-4">We're building this transparently, with honest communication about our progress and limitations. That's the S&G AI Lab way.</p>
      `
    },
    {
      title: "From the Navy to AI: How Military Discipline Shapes Our Approach",
      excerpt: "Lessons learned from military service and how they apply to building a deep-tech startup.",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop",
      category: "Founder Story",
      date: "Dec 10, 2025",
      readTime: "6 min read",
      author: "Thomas Gaye",
      authorImage: "/assets/founders/thomas-gaye.png",
      content: `
        <h2 class="text-2xl font-bold text-white mb-4">Service Teaches You About Execution</h2>
        <p class="mb-4">My time in the U.S. Navy taught me something that most business books don't cover: the difference between planning and executing. In the military, plans are important, but execution under real-world conditions — with uncertainty, stress, and incomplete information — is everything.</p>
        
        <p class="mb-4">This mindset shapes how we build S&G AI Lab. We don't spend months perfecting plans. We build, test, learn, and iterate. We make mistakes fast and fix them faster.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">Discipline Over Motivation</h2>
        <p class="mb-4">One of the biggest lessons from military service: motivation is unreliable. Some days you're fired up; some days you're not. What carries you through is discipline — the habit of doing what needs to be done regardless of how you feel.</p>
        
        <p class="mb-4">As founders, Henry and I don't rely on feeling inspired. We have systems, routines, and commitments that keep us moving forward even when the work is hard or the path is unclear. That's how you build something real.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">Honest Assessment Is Non-Negotiable</h2>
        <p class="mb-4">In military operations, lying to yourself about your situation can get people killed. You learn to assess reality as it is, not as you wish it were. This is harder than it sounds — humans are wired to be optimistic about their own projects.</p>
        
        <p class="mb-4">At S&G AI Lab, we practice brutal honesty about where we are. FusionCell is a prototype. Our other projects are conceptual. We're not going to pretend otherwise to investors, partners, or ourselves. That honesty is core to how we operate.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">Small Teams, Big Impact</h2>
        <p class="mb-4">Special operations taught me that a small, well-trained, highly focused team can accomplish more than a large, unfocused one. S&G AI Lab is just two founders right now, but we're building with precision and purpose.</p>
        
        <p class="mb-4">We don't need a large team to make progress. We need the right skills, clear priorities, and relentless execution. That's what we're bringing to this challenge.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">Mission First</h2>
        <p class="mb-4">Everything we do is in service of the mission: building practical AI systems that solve real problems. Not for hype, not for quick exits, but for genuine impact. That's the standard we hold ourselves to.</p>
      `
    },
    {
      title: "What Early-Stage Really Means: A Transparent Look at Our Progress",
      excerpt: "An honest update on where FusionCell stands, what's working, and what challenges we face.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      category: "Progress Update",
      date: "Dec 5, 2025",
      readTime: "5 min read",
      author: "Henry Slebo",
      authorImage: "/assets/founders/henry-slebo.png",
      content: `
        <h2 class="text-2xl font-bold text-white mb-4">Where We Are: The Honest Answer</h2>
        <p class="mb-4">When people ask about S&G AI Lab, they often expect either a pitch or excessive modesty. Here's the straight truth: we're a two-person team with a working prototype, some promising early results, and a lot of work ahead.</p>
        
        <p class="mb-4">FusionCell can simulate basic battery behaviors with reasonable accuracy. Our physics-informed approach is working as hypothesized. But we're far from a production-ready product, and we're honest about that.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">What's Working</h2>
        <p class="mb-4">Our core architecture is sound. The combination of physics constraints and neural network flexibility is producing results that validate our approach. We're seeing the simulation correctly capture behaviors that pure physics models struggle with.</p>
        
        <p class="mb-4">Our development velocity is good for a two-person team. Thomas's engineering depth and my operational focus mean we're not stepping on each other's toes. We ship working code every week.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">Current Challenges</h2>
        <p class="mb-4">Data is our biggest constraint. Physics-informed models can extrapolate, but they still need data to calibrate. We're actively seeking partnerships with organizations that have battery testing data they'd be willing to share.</p>
        
        <p class="mb-4">Validation is hard. How do you prove a simulation is accurate without the physical testing you're trying to reduce? We're working on this, but it's a genuine challenge that requires careful thought.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">What's Next</h2>
        <p class="mb-4">Our near-term priorities: secure early access partnerships, improve our core simulation accuracy, and build out the API layer that will make FusionCell usable by partners.</p>
        
        <p class="mb-4">We're also having conversations with potential investors. We're not desperate for capital — we're looking for partners who understand deep-tech timelines and share our commitment to building something real.</p>
        
        <h2 class="text-2xl font-bold text-white mb-4 mt-6">Following Our Progress</h2>
        <p class="mb-4">We'll continue sharing honest updates like this one. If you're interested in battery simulation, deep-tech startups, or founder-led innovation, follow along. And if you want to be part of the journey as an early partner or investor, reach out.</p>
      `
    }
  ]

  const openArticle = (article: any) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
  }

  return (
    <section id="blog" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      <div className="container relative px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-purple-400 font-medium mb-2">Founder Updates</p>
            <h2 className="text-3xl md:text-4xl font-bold">From the Lab</h2>
            <p className="text-gray-400 mt-2 max-w-lg">
              Honest updates about what we're building, learning, and discovering. No marketing fluff — just real progress reports.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 h-auto flex items-center gap-1">
              All updates <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => openArticle(article)}
            >
              <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-purple-600/90 text-white text-xs font-medium px-2 py-1 rounded">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{article.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      {selectedArticle && (
        <BlogModal
          isOpen={isModalOpen}
          onClose={closeModal}
          article={selectedArticle}
        />
      )}
    </section>
  )
}
