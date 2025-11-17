"use client"

import { useState } from "react"
import { X, Mail, Phone, MapPin, Briefcase } from "lucide-react"

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <>
      {/* Modal Trigger - This will be controlled by the hero component */}
      <div id="contact-modal" className="hidden fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          onClick={handleOverlayClick}
        />
        
        <div className="relative bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <Briefcase className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Investor Relations</h2>
                <p className="text-sm text-gray-400">S&G AI Lab - FusionCell</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Thomas Gaye</h3>
              <p className="text-purple-300 font-medium mb-4">Co-Founder, Chief AI Architect</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Leading the development of FusionCell, our AI-driven digital twin platform revolutionizing battery technology. 
                We're currently raising our $3.5M seed round to accelerate hardware prototyping and expand our AI research team.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <Mail className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">investor@sgagilab.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <Phone className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-medium">240-805-2022</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <MapPin className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">Minnesota, MN</p>
                </div>
              </div>
            </div>

            {/* Investment Highlights */}
            <div className="mb-6 p-4 bg-purple-950/20 border border-purple-900/30 rounded-lg">
              <h4 className="text-purple-300 font-semibold mb-3">Investment Highlights</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>$3.5M seed round now open</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>AI-driven battery digital twin platform</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>10x faster R&D, 60-80% cost reduction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>$400B+ market opportunity</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.location.href = 'mailto:investor@sgagilab.com?subject=FusionCell Investment Inquiry&body=Hi Thomas, I\'m interested in learning more about the FusionCell investment opportunity.'}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Mail className="inline h-4 w-4 mr-2" />
                Send Email
              </button>
              <button
                onClick={() => window.location.href = 'tel:2408052022'}
                className="flex-1 border border-purple-600 text-purple-300 px-6 py-3 rounded-lg font-medium hover:bg-purple-600/10 transition-all duration-300"
              >
                <Phone className="inline h-4 w-4 mr-2" />
                Call Now
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-800 bg-gray-900/50">
            <p className="text-center text-sm text-gray-400">
              © 2025 S&G AI Lab. All rights reserved. | Seed Round Open
            </p>
          </div>
        </div>
      </div>
    </>
  )
}