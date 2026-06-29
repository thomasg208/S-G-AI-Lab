"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";
import ManagementLogin from "@/components/ManagementLogin";

export default function HeaderActions({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
}) {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="hidden md:flex items-center text-sm font-medium text-gray-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-gray-900 transition"
        >
          <User className="h-4 w-4 mr-2" />
          Management
        </button>
        <Button
          onClick={() => window.open("https://calendly.com/thomasg208/30min?month=2026-06", "_blank")}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 shadow-md"
        >
          Request Demo
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Demo Request Form Modal */}
      <DemoRequestForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />

      {/* Management Login Modal */}
      <ManagementLogin
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}
