import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-bold text-xl focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md hover:scale-105 transition-transform duration-200 ease-out"
      aria-label="S&G AI Lab homepage"
    >
      {/* SG AI Lab Logo */}
      <div className="relative h-12 md:h-16 w-auto">
        <Image
          src="/images/logos/sg_ai_lab_logo.png"
          alt="S&G AI Lab Logo"
          width={240}
          height={64}
          className="h-12 md:h-16 w-auto object-contain"
          priority
        />
      </div>
    </Link>
  )
}
