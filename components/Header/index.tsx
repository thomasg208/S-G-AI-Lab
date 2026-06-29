"use client"

import { useState, useRef, useEffect } from "react"
import DesktopNav from "./DesktopNav"
import MobileMenu from "./MobileMenu"
import Logo from "./Logo"
import HeaderActions from "./HeaderActions"
import DemoRequestForm from "@/components/DemoRequestForm"
// Add missing icon imports
import { Menu, X, ChevronDown, Battery, Beaker, Layers, Cpu, FileText, BookOpen, Zap } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0, opacity: 0 })
  const [isHoveringMenu, setIsHoveringMenu] = useState(false)
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const megaMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = (menuId: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    setActiveMegaMenu(menuId)

    const navElement = navRefs.current[menuId]
    if (navElement) {
      const rect = navElement.getBoundingClientRect()
      const parentRect = navElement.parentElement?.getBoundingClientRect() || { left: 0 }

      setIndicatorStyle({
        width: rect.width,
        left: rect.left - parentRect.left,
        opacity: 1,
      })
    }
  }

  const handleMouseLeave = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }

    if (!isHoveringMenu) {
      menuTimeoutRef.current = setTimeout(() => {
        setActiveMegaMenu(null)
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }))
      }, 300)
    }
  }

  const handleMenuMouseEnter = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    setIsHoveringMenu(true)
  }

  const handleMenuMouseLeave = () => {
    setIsHoveringMenu(false)
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }))
    }, 300)
  }

  const megaMenus = {
    products: {
      title: "Platform & Ecosystem",
      columns: [
        {
          title: "Core Platform",
          items: [
            {
              icon: <Layers className="h-5 w-5" />,
              title: "Intelligence Layer",
              description: "The foundational AI engine powering spatial awareness",
              href: "#",
            },
          ],
        },
        {
          title: "Ecosystem",
          items: [
            {
              icon: <Zap className="h-5 w-5" />,
              title: "Airport AI Concierge",
              description: "Seamless navigation for complex terminals",
              href: "#",
            },
            {
              icon: <BookOpen className="h-5 w-5" />,
              title: "Tourism Experiences",
              description: "Interactive guides for cultural locations",
              href: "#",
            },
          ],
        },
        {
          title: "Developer Tools",
          items: [
            {
              icon: <Cpu className="h-5 w-5" />,
              title: "Enterprise APIs",
              description: "Integrate Wingman into your applications",
              href: "#",
            },
          ],
        },
      ],
      featured: {
        title: "Early Access Available",
        description: "Interested in exploring the Wingman Platform? We're looking for early partners to help shape our ecosystem.",
        ctaText: "Request Access",
        ctaLink: "#",
        ctaAction: () => setIsDemoFormOpen(true),
        imageSrc: "/images/dashboard.png",
      },
    },
    resources: {
      title: "Updates & Insights",
      columns: [
        {
          title: "From the Lab",
          items: [
            {
              icon: <FileText className="h-5 w-5" />,
              title: "Founder Updates",
              description: "Honest progress reports and technical insights",
              href: "#blog",
            },
          ],
        },
      ],
      featured: {
        title: "Transparent Development",
        description: "Follow our journey as we build FusionCell — the wins, the challenges, and everything in between.",
        ctaText: "Read Updates",
        ctaLink: "#blog",
        imageSrc: "/images/webinar.png",
      },
    },
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md shadow-lg">
        <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4 md:gap-6">
            <Logo />
            <DesktopNav
              activeMegaMenu={activeMegaMenu}
              setActiveMegaMenu={setActiveMegaMenu}
              indicatorStyle={indicatorStyle}
              setIndicatorStyle={setIndicatorStyle}
              navRefs={navRefs}
              menuTimeoutRef={menuTimeoutRef}
              isHoveringMenu={isHoveringMenu}
              setIsHoveringMenu={setIsHoveringMenu}
              megaMenuRef={megaMenuRef as React.RefObject<HTMLDivElement>}
              megaMenus={megaMenus}
            />
          </div>
          <HeaderActions isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>

      {/* Demo Request Form Modal */}
      <DemoRequestForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </>
  )
}
