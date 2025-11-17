"use client"

import ManagementLogin from "@/components/ManagementLogin"
import { useState } from "react"

export default function ManagementLoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <ManagementLogin 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}