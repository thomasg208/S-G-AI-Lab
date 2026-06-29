"use client"

import { motion } from "framer-motion"
import { Shield, Cpu, Target, Zap } from "lucide-react"

export default function SocialProof() {
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

  const values = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Veteran Discipline",
      description: "Military-grade engineering rigor"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Focused Execution",
      description: "One prototype at a time"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Deep Tech",
      description: "Physics-informed AI systems"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Honest Progress",
      description: "Transparent development"
    }
  ]

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>

      <div className="container relative px-4 md:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            A Different Kind of AI Startup
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
          >
            We're not chasing hype or making grand claims. We're two founders with technical depth 
            and operational discipline, building practical AI systems one prototype at a time.
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 rounded-lg bg-gray-800/30 border border-gray-800"
              >
                <div className="flex items-center justify-center gap-2 mb-2 text-purple-400">
                  {value.icon}
                  <span className="font-semibold text-white text-sm">{value.title}</span>
                </div>
                <p className="text-xs text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
