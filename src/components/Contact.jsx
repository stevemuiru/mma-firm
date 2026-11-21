import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Info, CheckCircle2 } from 'lucide-react'
import { PRACTICE_AREAS, FIRM_CONTACT } from '../data/firmData'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

const emptyForm = {
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  practiceArea: 'Not sure yet',
  matterDescription: '',
}

const labelClass = 'mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700'
const inputClass = (hasError) =>
  `w-full rounded border bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-gold-500 ${
    hasError ? 'border-red-400' : 'border-stone-300'
  }`

function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name'
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (formData.matterDescription.trim().length < 15) {
      newErrors.matterDescription = 'Please describe your matter in at least 15 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      const res = await fetch(`${API_URL}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const handleReset = () => {
    setFormData(emptyForm)
    setErrors({})
    setStatus('idle')
  }

  return (
    <section id="contact" className="scroll-mt-20 border-b border-stone-200 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Engagement &amp; Inquiry
          </span>
          <h2 className="mb-4 font-serif text-3xl font-normal leading-tight text-slate-900 [text-wrap:balance] sm:text-4xl lg:text-5xl">
            Request a Consultation
          </h2>
          <p className="text-base text-slate-600">
            Tell us briefly about your matter and we will get back to you. Information you share through this form is
            treated with confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Form column */}
          <div className="rounded-xl border border-stone-200 bg-ivory p-8 sm:p-10 lg:col-span-7">
            {status === 'sent' ? (
              <div className="space-y-4 py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-slate-900">Message Sent</h3>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600">
                  Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. We have received
                  your message and will get back to you as soon as possible.
                </p>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded bg-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-slate-800"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      aria-invalid={Boolean(errors.fullName)}
                      className={inputClass(errors.fullName)}
                    />
                    {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className={inputClass(errors.email)}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Telephone (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 7XX XXX XXX"
                      className={inputClass(false)}
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className={labelClass}>
                      Organisation (Optional)
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Company or entity name"
                      className={inputClass(false)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="practiceArea" className={labelClass}>
                    Area of Law
                  </label>
                  <select
                    id="practiceArea"
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleChange}
                    className={inputClass(false)}
                  >
                    {PRACTICE_AREAS.map((area) => (
                      <option key={area.id} value={area.title}>
                        {area.title}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="matterDescription" className={labelClass}>
                    Brief Summary of Your Matter <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="matterDescription"
                    name="matterDescription"
                    rows={4}
                    value={formData.matterDescription}
                    onChange={handleChange}
                    placeholder="Briefly describe what you need help with..."
                    aria-invalid={Boolean(errors.matterDescription)}
                    className={inputClass(errors.matterDescription)}
                  />
                  {errors.matterDescription && (
                    <p className="mt-1 text-xs text-red-600">{errors.matterDescription}</p>
                  )}
                </div>

                <div className="flex items-start gap-3 text-xs text-stone-500">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <span>
                    Sending this form does not create an advocate&ndash;client relationship. Please do not include
                    sensitive documents until we have confirmed we can act for you.
                  </span>
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-sm text-red-600">
                    We could not send your message just now. Please try again, or call or email us directly using the
                    details on this page.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded bg-slate-900 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-150 hover:bg-gold-600 disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Consultation Request'}
                </button>
              </form>
            )}
          </div>

          {/* Office column */}
          <div className="space-y-6 lg:col-span-5">
            <h3 className="font-serif text-xl font-normal text-slate-900">Primary Office Chambers</h3>
            <div className="space-y-4 rounded-xl border border-stone-200 bg-ivory p-6">
              <h4 className="border-b border-stone-200/80 pb-3 font-serif text-lg font-medium text-slate-900">
                {FIRM_CONTACT.city}
              </h4>
              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <div>
                    <strong className="block font-medium text-slate-900">Physical Address</strong>
                    {FIRM_CONTACT.address}
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <div>
                    <strong className="block font-medium text-slate-900">Direct Telephone</strong>
                    <a
                      href={`tel:${FIRM_CONTACT.phone.replace(/[^0-9+]/g, '')}`}
                      className="hover:text-gold-600"
                    >
                      {FIRM_CONTACT.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <div>
                    <strong className="block font-medium text-slate-900">Email Enquiries</strong>
                    <a href={`mailto:${FIRM_CONTACT.email}`} className="hover:text-gold-600">
                      {FIRM_CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 border-t border-stone-200/60 pt-3 text-xs text-stone-500">
                <Clock className="h-4 w-4 shrink-0 text-gold-600" />
                <span>Chambers Hours: {FIRM_CONTACT.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact