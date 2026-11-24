import { PRACTICE_AREAS, FIRM_CONTACT } from '../data/firmData'

const firmLinks = [
  { label: 'Institutional Heritage', href: '#firm' },
  { label: 'Principal Counsel', href: '#attorney' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Chambers & Offices', href: '#contact' },
]

const headingClass = 'text-xs font-semibold uppercase tracking-wider text-white'
const linkClass = 'transition-colors hover:text-white'

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-navy-900 py-16 text-xs text-slate-400">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-800/80 pb-12 md:grid-cols-12">
          
          <div className="space-y-4 md:col-span-5">
            <a
              href="#"
              className="block font-serif text-2xl tracking-tight text-white transition-colors hover:text-gold-500"
            >
              Muri Mbugua{' '}
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-500">
                &amp; Associates
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Advocates. Focused counsel in commercial litigation, criminal defence, corporate transactions and
              appellate advocacy.
            </p>
            <div className="space-y-1 text-xs text-slate-500">
              <div>{FIRM_CONTACT.address}, Kenya</div>
              <div>
                Telephone:{' '}
                <a href={`tel:${FIRM_CONTACT.phone.replace(/[^0-9+]/g, '')}`} className={linkClass}>
                  {FIRM_CONTACT.phone}
                </a>
              </div>
            </div>
          </div>

          
          <nav aria-label="Practice areas" className="space-y-3 md:col-span-2">
            <h4 className={headingClass}>Practice Areas</h4>
            <ul className="space-y-2">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.id}>
                  <a href="#practice-areas" className={linkClass}>
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          
          <nav aria-label="The firm" className="space-y-3 md:col-span-2">
            <h4 className={headingClass}>The Firm</h4>
            <ul className="space-y-2">
              {firmLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        
          <div className="space-y-3 md:col-span-3">
            <h4 className={headingClass}>Regulatory Disclosures</h4>
            <p className="text-[11px] leading-relaxed text-slate-500">
              The material on this site is for general information only. It does not constitute legal advice or create
              an advocate&ndash;client relationship, and past outcomes do not guarantee similar results.
            </p>
          </div>
        </div>

        
        <div className="pt-8 text-[11px] text-slate-500">
          &copy; {new Date().getFullYear()} Muri Mbugua &amp; Associates. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer