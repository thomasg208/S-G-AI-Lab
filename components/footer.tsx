import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-12">
      <div className="container px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="relative h-16 w-auto">
                <Image
                  src="/images/logos/sg_ai_lab_logo.png"
                  alt="S&G AI Lab Logo"
                  width={240}
                  height={64}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="mt-4 text-gray-400">A founder-led deep-tech startup building applied intelligence systems. Currently developing Wingman.</p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.linkedin.com/in/thomas-gaye/" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/thomasg208/S-G-AI-Lab" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-gray-300">Company</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#founders" className="text-gray-400 hover:text-white">
                  About the Founders
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-gray-300">For Investors</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Request Pitch Deck
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Seed Round Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Partnership Models
                </Link>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-xs text-gray-500">
                Early-stage startup · Founded 2025 · Seed funding ongoing
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>S&G AI Lab · Early-Stage Deep Tech Startup · 26175 Fremont Dr Ste 1, Zimmerman, MN 55398</p>
          <p className="mt-2 text-gray-300">
            <a href="mailto:ailab@sgagilab.com" className="hover:text-purple-400 transition-colors">ailab@sgagilab.com</a>
            <span className="mx-2">·</span>
            <a href="tel:+18446076239" className="hover:text-purple-400 transition-colors">(844) 607-6239</a>
          </p>
          <p className="mt-2">© 2025 S&G AI Lab. All rights reserved.</p>
          <p className="mt-4 text-xs text-gray-500 max-w-2xl mx-auto">
            Disclaimer: All products and projects listed are prototypes or concepts unless otherwise specified. 
            Nothing on this website constitutes an offer to sell securities or investment advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
