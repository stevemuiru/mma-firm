import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

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
        <a
  href="#"
  className="shrink-0 whitespace-nowrap font-serif text-xl tracking-tight text-white transition-colors hover:text-gold-300 sm:text-2xl"
>
  Muri Mbugua
  <span className="ml-1 font-sans text-xs font-semibold uppercase tracking-widest text-gold-500">
    & Associates
  </span>
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
  className="hidden items-center gap-1.5 bg-gold-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-900 transition hover:bg-gold-400 md:inline-flex"
>
  Schedule Consultation
  <ArrowUpRight className="h-3.5 w-3.5" />
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
  className="hidden items-center gap-1.5 bg-gold-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-900 transition hover:bg-gold-400 md:inline-flex"
>
  Schedule Consultation
  <ArrowUpRight className="h-3.5 w-3.5" />
</a>
        </nav>
      )}
    </header>
  )
}

export default Navbar