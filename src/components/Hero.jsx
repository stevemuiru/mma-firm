import { ArrowRight, ChevronDown } from 'lucide-react'
import firmHero from '../assets/images/firmhero.jpeg'

const stats = [
  { value: 'KSh 400M', suffix: '+', label: 'Aggregate Transaction Value Advised' },
  { value: '94.8', suffix: '%', label: 'Trial & Appellate Success Record' },
  { value: '13', unit: 'Years', label: 'Of Institutional Client Trust' },
  { value: 'Band 1', label: 'Chambers Kenya Commercial Litigation' },
]

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-navy-900 pb-16 pt-24 text-white">
      {/* Background photo with dark gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={firmHero}
          alt="The firm's office"
          className="h-full w-full scale-[1.01] object-cover object-center brightness-[0.42] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-900 via-navy-900/85 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-900 via-transparent to-navy-900/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="max-w-3xl">
          {/* Kicker line */}
          <div className="mb-4 flex flex-wrap items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            <span>Founded 2013</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Moi Avenue</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Bungoma, Kenya</span>
          </div>

          <h1 className="mb-6 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-6xl">
            Uncompromising counsel for defining moments.
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            For over a decade, Muri Mbugua & Associates has represented Fortune 500 corporations, sovereign entities, and institutional boards in bet-the-company commercial disputes, cross-border M&A, and transformative appellate advocacy.
          </p>

          {/* Actions */}
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="#contact"
              className="whitespace-nowrap rounded bg-gold-500 px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-navy-900 shadow-lg transition-all duration-150 hover:bg-gold-400"
            >
              Schedule Consultation
            </a>
            <a
              href="#practice-areas"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap py-3 text-sm font-medium text-slate-300 transition-colors duration-150 hover:text-white"
            >
              Explore Practice Areas
              <ArrowRight className="h-4 w-4 text-gold-500 transition-transform duration-150 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-slate-700/60 pt-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="mb-1 font-serif text-2xl font-normal text-white sm:text-3xl">
                {stat.value}
                {stat.suffix && <span className="text-gold-500">{stat.suffix}</span>}
                {stat.unit && (
                  <span className="ml-1 font-sans text-xs tracking-normal text-slate-400">{stat.unit}</span>
                )}
              </div>
              <div className="text-xs tracking-wide text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll-down arrow */}
      <a
        href="#practice-areas"
        aria-label="Scroll to practice areas"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 p-2 text-slate-400 transition-colors hover:text-white md:block"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}

export default Hero