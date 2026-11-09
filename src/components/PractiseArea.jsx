import { useState } from 'react'
import { ArrowRight, ChevronRight, Check } from 'lucide-react'
import { PRACTICE_AREAS } from '../data/firmData'

function PracticeAreas() {
  const [activeArea, setActiveArea] = useState(PRACTICE_AREAS[0])

  return (
    <section id="practice-areas" className="scroll-mt-20 border-b border-stone-200 bg-ivory py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Core Capabilities
            </span>
            <h2 className="font-serif text-3xl font-normal leading-tight text-slate-900 [text-wrap:balance] sm:text-4xl lg:text-5xl">
              Areas of Focused Practice
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 sm:text-base">
            Our practice groups combine rigorous legal analysis with commercial realism, delivering strategic advantage where it matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-2 lg:col-span-5">
            {PRACTICE_AREAS.map((practice) => {
              const isSelected = activeArea.id === practice.id
              return (
                <button
                  key={practice.id}
                  type="button"
                  onClick={() => setActiveArea(practice)}
                  className={`group flex w-full cursor-pointer items-center justify-between rounded-lg border p-5 text-left transition-all duration-200 ${
                    isSelected
                      ? 'border-gold-500/60 bg-white shadow-sm'
                      : 'border-transparent bg-transparent text-slate-700 hover:bg-stone-100/80'
                  }`}
                >
                  <div className="flex items-baseline gap-4 pr-2">
                    <span
                      className={`font-serif text-sm font-semibold tabular-nums ${
                        isSelected ? 'text-gold-600' : 'text-stone-400 group-hover:text-slate-600'
                      }`}
                    >
                      {practice.number}
                    </span>
                    <div>
                      <h3
                        className={`font-serif text-lg transition-colors ${
                          isSelected ? 'font-medium text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                        }`}
                      >
                        {practice.title}
                      </h3>
                      <p className="mt-0.5 line-clamp-1 text-xs text-stone-500">{practice.summary}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isSelected ? 'translate-x-1 text-gold-600' : 'text-stone-300 group-hover:text-stone-500'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          
          <div className="relative rounded-xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10 lg:col-span-7">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-6 text-xs text-stone-500">
              <span className="font-serif text-base font-semibold text-gold-600">{activeArea.number}</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium uppercase tracking-wider text-slate-800">Practice Blueprint</span>
              <span aria-hidden="true">·</span>
              <span>Lead: {activeArea.leadPartner}</span>
            </div>

            <div className="mt-6">
              <h3 className="mb-4 font-serif text-2xl font-normal text-slate-900 sm:text-3xl">
                {activeArea.title}
              </h3>
              <p className="mb-8 text-base leading-relaxed text-slate-600">{activeArea.description}</p>

              <div className="mb-10">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Specialised Sub-Disciplines
                </h4>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {activeArea.keyCapabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-ivory">
                        <Check className="h-2.5 w-2.5 text-gold-600" />
                      </div>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start justify-between gap-4 border-t border-stone-100 pt-4 sm:flex-row sm:items-center">
                <div className="text-xs text-stone-500">
                  Inquire specifically regarding{' '}
                  <span className="font-medium text-slate-800">{activeArea.title}</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded bg-stone-100 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 transition-colors duration-150 hover:bg-gold-500 hover:text-white"
                >
                  Request Practice Brief
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas