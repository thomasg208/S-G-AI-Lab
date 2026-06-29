"use client"

import { motion } from "framer-motion"
import { Cpu, Database, Zap, Binary, Atom, Beaker, LineChart, Terminal } from "lucide-react"

export default function Integrations() {
  const technologies = [
    { name: "PyTorch", category: "ML Framework", icon: <Zap className="w-6 h-6" /> },
    { name: "Python", category: "Core Language", icon: <Terminal className="w-6 h-6" /> },
    { name: "NumPy", category: "Scientific Computing", icon: <Binary className="w-6 h-6" /> },
    { name: "SciPy", category: "Physics Models", icon: <Atom className="w-6 h-6" /> },
    { name: "Transformers", category: "Neural Networks", icon: <Cpu className="w-6 h-6" /> },
    { name: "FastAPI", category: "API Layer", icon: <Database className="w-6 h-6" /> },
    { name: "React/Next.js", category: "Frontend", icon: <Beaker className="w-6 h-6" /> },
    { name: "Matplotlib", category: "Visualization", icon: <LineChart className="w-6 h-6" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-purple-400 font-medium mb-2">Technical Foundation</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built on Proven Technologies</h2>
          <p className="text-gray-400 text-lg">
            FusionCell is built with battle-tested open-source technologies. We believe in using the right tools for the job — 
            no proprietary lock-in, just solid engineering.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technologies.map((tech, index) => (
            <motion.div key={index} className="group" variants={itemVariants}>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-purple-500/50 hover:bg-gray-800">
                <div className="relative mb-4 w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                  <div className="bg-gray-800 rounded-full p-3 w-14 h-14 flex items-center justify-center text-purple-400">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="font-medium mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Our tech stack is chosen for reliability and community support. As a small team, we leverage 
            established tools so we can focus on what makes FusionCell unique — the physics-AI integration.
          </p>
        </div>
      </div>
    </section>
  )
}
