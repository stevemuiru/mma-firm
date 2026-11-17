import { Scale, Shield, Landmark } from 'lucide-react'
import supremeCourt from '../assets/images/supremecok.jpeg'
import firmOffice from '../assets/images/mmafirm2.jpeg'

const tenets = [
  {
    icon: Landmark,
    title: '01. Legal Rigour',
    text: 'We ground every case in careful research of statute and case law, finding the points of law that decide a dispute.',
  },
  {
    icon: Scale,
    title: '02. Decisive Action',
    text: 'In disputes, timing shapes the outcome. We act early to protect our clients\u2019 positions while the case is still developing.',
  },
  {
    icon: Shield,
    title: '03. Client Confidentiality',
    text: 'We handle every matter with discretion, protecting our clients\u2019 privacy and reputation throughout.',
  },
]

function AboutFirm() {
  return (
    <section id="firm" className="scroll-mt-20 overflow-hidden border-b border-stone-200 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section lead */}
        <div className="mb-16 max-w-3xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Institutional Heritage
          </span>
          <h2 className="mb-6 font-serif text-3xl font-normal leading-tight text-slate-900 [text-wrap:balance] sm:text-4xl lg:text-5xl">
            Built on intellectual independence and unwavering courtroom resolve.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Founded in Bungoma in 2013, Muri Mbugua &amp; Associates is a firm built on focused attention: small enough
            to guarantee senior command over every brief, yet capable of standing up to the largest opponents.
          </p>
        </div>

        {/* Image grid + narrative */}
        <div className="mb-16 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Large image */}
          <div className="relative min-h-[380px] overflow-hidden rounded-xl bg-stone-900 shadow-md lg:col-span-7 lg:min-h-[460px]">
            <img
              src={supremeCourt}
              alt="The Supreme Court of Kenya building"
              className="h-full w-full object-cover object-center contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-white">
              <span className="mb-1 block text-xs uppercase tracking-widest text-gold-400">Courtroom Heritage</span>
              <p className="font-serif text-sm text-slate-200">
                Advocates of the High Court of Kenya, appearing before the courts of Kenya.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            <div className="relative h-[240px] overflow-hidden rounded-xl bg-stone-900 shadow-sm">
              <img
                src={firmOffice}
                alt="The firm's office on Moi Avenue, Bungoma"
                className="h-full w-full object-cover object-center contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-4 text-white">
                <span className="font-serif text-xs italic text-stone-200">Our Office &middot; Moi Avenue, Bungoma</span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center rounded-xl border border-stone-200 bg-ivory p-6 sm:p-8">
              <h3 className="mb-3 font-serif text-xl text-slate-900">The Direct Senior Counsel Model</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                Our clients work directly with principal counsel Kennedy Muri Mbugua, who personally shapes the
                strategy, prepares the pleadings and submissions, and argues the case in court.
              </p>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                Direct Principal Stewardship on Every Matter
              </div>
            </div>
          </div>
        </div>

        {/* Three tenets */}
        <div className="grid grid-cols-1 gap-8 border-t border-stone-200 pt-8 md:grid-cols-3">
          {tenets.map(({ icon: Icon, title, text }) => (
            <div key={title} className="space-y-3">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100">
                <Icon className="h-5 w-5 text-gold-600" />
              </div>
              <h3 className="font-serif text-lg text-slate-900">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutFirm