import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-12">
      <div className="container px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-4">
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
            <p className="mt-4 text-gray-400">Autonomous Agents. Self-Optimizing Digital Twins. Building the infrastructure of autonomous operations since 2025.</p>
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
            <h3 className="mb-4 text-sm font-bold uppercase text-gray-300">Products</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Urban Vantage™
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Crypto Lab™
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  QFT™
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  SONIQCELL™
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  FusionCell™
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-gray-300">Company</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-gray-300">Investors</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Investor Deck
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Seed Round Q1 2025
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Partnership Opportunities
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>S & G AI Lab, Inc. | Autonomous Systems Division | 26175 Fremont Dr Ste 1, Zimmerman, MN 55398</p>
          <p className="mt-2">© 2025 S & G AI Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
