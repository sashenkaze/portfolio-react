import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Sertifikat", href: "#sertifikat" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Kontak", href: "#kontak" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(220,20%,10%,0.9)] backdrop-blur-md border-b border-[hsl(var(--dark-border))]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold text-white">
          Sashenka<span className="accent-text">.</span>
        </a>

        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-white text-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="block text-sm text-muted hover:text-white" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
