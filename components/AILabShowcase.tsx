"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Cpu, Rocket, Sparkles, Lightbulb } from "lucide-react"

export default function AILabShowcase() {
  const innovations = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AGI Research",
      description: "Pushing boundaries of artificial general intelligence with novel architectures"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Digital Twins",
      description: "Creating AI-powered simulations that mirror real-world systems with unprecedented accuracy"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Neural Engineering",
      description: "Designing next-generation neural networks for specialized domain applications"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Rapid Prototyping",
      description: "From concept to deployment in weeks, not years - accelerating innovation cycles"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600 rounded-full filter blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container relative px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-800/50">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 font-medium">S&G AI Lab</span>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-white bg-clip-text text-transparent"
          >
            Where AI Innovation
            <br />
            Meets Reality
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We're not just another AI company. We're a laboratory of dreamers, researchers, and engineers 
            pushing the boundaries of what's possible with artificial intelligence.
          </motion.p>
        </motion.div>

        {/* Innovation Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {innovations.map((innovation, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
              <div className="relative bg-gray-900/80 border border-gray-800 rounded-lg p-6 h-full hover:border-purple-800/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-900/30 rounded-lg text-purple-400">
                    {innovation.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{innovation.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{innovation.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lab Stats */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-800/50">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Bleeding-Edge Innovation</span>
            </div>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Our lab operates at the intersection of research and application, 
            transforming theoretical breakthroughs into practical solutions that 
            solve real-world problems.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-purple-400 mb-1">Founded 2025</div>
              <div className="text-sm text-gray-400">Startup Agility</div>
            </div>
            <div className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-pink-400 mb-1">Stealth Mode</div>
              <div className="text-sm text-gray-400">Building in Public</div>
            </div>
            <div className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-purple-400 mb-1">First Product</div>
              <div className="text-sm text-gray-400">FusionCell</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}