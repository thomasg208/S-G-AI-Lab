"use client"

import { useState, useRef, useEffect } from "react"
import DesktopNav from "./DesktopNav"
import MobileMenu from "./MobileMenu"
import Logo from "./Logo"
import HeaderActions from "./HeaderActions"
import DemoRequestForm from "@/components/DemoRequestForm"
// Add missing icon imports
import { Menu, X, ChevronDown, Laptop, Users, BarChart3, Settings, HelpCircle, FileText, Zap, BookOpen, TrendingUp, GraduationCap, Shield, Mic } from "lucide-react"

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
      title: "AGI Systems",
      columns: [
        {
          title: "Interface & Analytics",
          items: [
            {
              icon: <Laptop className="h-5 w-5" />,
              title: "Urban Vantage™",
              description: "White-label enterprise intelligence dashboards",
              href: "#",
            },
            {
              icon: <TrendingUp className="h-5 w-5" />,
              title: "QFT™",
              description: "REST API for quant finance and wealth management",
              href: "#",
            },
          ],
        },
        {
          title: "Learning Intelligence",
          items: [
            {
              icon: <BookOpen className="h-5 w-5" />,
              title: "Crypto Lab™",
              description: "White-label crypto education platform",
              href: "#",
            },
            {
              icon: <GraduationCap className="h-5 w-5" />,
              title: "Nexalytica™",
              description: "AI-powered adaptive learning platform",
              href: "#",
            },
          ],
        },
        {
          title: "Voice & Media",
          items: [
            {
              icon: <Mic className="h-5 w-5" />,
              title: "SONIQCELL™",
              description: "Voice intelligence platform with human-quality speech",
              href: "#",
            },
          ],
        },
        {
          title: "Safety & Security",
          items: [
            {
              icon: <Shield className="h-5 w-5" />,
              title: "Guardian AI™",
              description: "Autonomous safety monitoring and response",
              href: "#",
            },
          ],
        },
      ],
      featured: {
        title: "White-Label Opportunity",
        description: "Deploy enterprise AGI systems under your brand with 40% reseller margins",
        ctaText: "Request a Demo",
        ctaLink: "#",
        ctaAction: () => setIsDemoFormOpen(true),
        imageSrc: "/images/dashboard.png",
      },
    },
    resources: {
      title: "Blog Insight",
      columns: [
        {
          title: "Blog",
          items: [
            {
              icon: <FileText className="h-5 w-5" />,
              title: "Blog",
              description: "AGI research & insights",
              href: "#blog",
            },
          ],
        },
      ],
      featured: {
        title: "Latest Articles",
        description: "Read our latest insights on AGI technology and startup journey",
        ctaText: "Read Blog",
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
