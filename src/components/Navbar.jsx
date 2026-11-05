import { useState } from 'react'
import Logo from '../assets/images/mma-logo.jpeg'

const navItems = [
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'The Firm', href: '#firm' },
  { label: 'Attorney', href: '#attorney' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#">
          <img src={Logo} alt="MMA logo" className="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-widest text-slate-200 transition hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border border-amber-400 px-5 py-2 text-sm uppercase tracking-widest text-amber-400 transition hover:bg-amber-400 hover:text-slate-950 md:inline-block"
        >
          Schedule Consultation
        </a>

        <button
          type="button"
          className="text-2xl text-slate-200 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="flex flex-col gap-4 px-6 pb-6 md:hidden" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-slate-200 hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="border border-amber-400 px-5 py-3 text-center text-sm uppercase tracking-widest text-amber-400"
          >
            Schedule Consultation
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar