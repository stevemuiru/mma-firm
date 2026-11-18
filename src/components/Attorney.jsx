import attorneyPhoto from '../assets/images/lawyer.jpeg'
import { Mail, Phone, GraduationCap, Scale } from 'lucide-react'
import { ATTORNEY } from '../data/firmData'

function Attorney() {
  const { name, title, practice, image, education, admissions, bio, email, phone } = ATTORNEY

  return (
    <section id="attorney" className="scroll-mt-20 border-b border-stone-200 bg-ivory py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Principal Counsel
            </span>
            <h2 className="font-serif text-3xl font-normal leading-tight text-slate-900 [text-wrap:balance] sm:text-4xl lg:text-5xl">
              Lead Advocate &amp; Counsel
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 sm:text-base">
            Personal leadership and direct courtroom advocacy from the firm&rsquo;s founding partner.
          </p>
        </div>

        
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            
            <div className="relative min-h-[440px] bg-stone-900 sm:min-h-[520px] lg:col-span-5">
              <img
                src={image}
                alt={`Portrait of ${name}, ${title}`}
                className="h-full w-full object-cover object-top contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-black/30" />
              
              <div className="absolute inset-x-6 bottom-6 text-white lg:hidden">
                <span className="mb-1 block text-xs font-medium uppercase tracking-widest text-gold-400">{practice}</span>
                <h3 className="font-serif text-2xl font-normal text-white">{name}</h3>
                <p className="text-xs text-stone-300">{title}</p>
              </div>
            </div>

            
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-7">
              <div>
                
                <div className="mb-6 hidden lg:block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-gold-600">
                    {practice}
                  </span>
                  <h3 className="mb-1 font-serif text-3xl font-normal text-slate-900 sm:text-4xl">{name}</h3>
                  <p className="text-sm text-stone-500">{title}</p>
                </div>

                <div className="space-y-3 border-b border-stone-100 pb-6 text-xs text-stone-600">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    <span className="font-medium text-slate-800">{education}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Scale className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    <span>Admitted: {admissions}</span>
                  </div>
                </div>

                <p className="my-6 text-sm leading-relaxed text-slate-600 sm:text-base">{bio}</p>
              </div>

              
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-stone-100 pt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-1.5 rounded-lg border border-stone-200 p-2.5 text-xs text-stone-600 transition-colors hover:bg-stone-100 hover:text-slate-900"
                  >
                    <Mail className="h-3.5 w-3.5" /> {email}
                  </a>
                  <a
                    href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-1.5 rounded-lg border border-stone-200 p-2.5 text-xs text-stone-600 transition-colors hover:bg-stone-100 hover:text-slate-900"
                  >
                    <Phone className="h-3.5 w-3.5" /> {phone}
                  </a>
                </div>

                <a
                  href="#contact"
                  className="whitespace-nowrap rounded bg-navy-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-gold-500"
                >
                  Schedule Direct Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Attorney