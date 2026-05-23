'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 bg-accent flex items-center justify-center">
          <Send size={28} className="text-white" />
        </div>
        <h3 className="font-poppins font-bold text-primary text-xl">Message Received</h3>
        <p className="text-muted max-w-sm">
          Thank you for reaching out. Our team will get back to you within 1 business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-accent text-sm font-semibold hover:underline mt-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-body-text mb-1.5">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full px-4 py-3 border border-mid bg-light text-body-text text-sm outline-none focus:border-accent transition-colors duration-200"
            placeholder="Ahmed Al Mansouri"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-body-text mb-1.5">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full px-4 py-3 border border-mid bg-light text-body-text text-sm outline-none focus:border-accent transition-colors duration-200"
            placeholder="Your Company LLC"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-body-text mb-1.5">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 border border-mid bg-light text-body-text text-sm outline-none focus:border-accent transition-colors duration-200"
            placeholder="ahmed@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-body-text mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full px-4 py-3 border border-mid bg-light text-body-text text-sm outline-none focus:border-accent transition-colors duration-200"
            placeholder="+971 50 000 0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-body-text mb-1.5">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-mid bg-light text-body-text text-sm outline-none focus:border-accent transition-colors duration-200 resize-none"
          placeholder="Tell us what you need — product type, quantity, project timeline..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-white font-bold py-4 text-sm tracking-wide hover:bg-accent-dark active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
      >
        Send Message <Send size={16} />
      </button>
    </form>
  )
}
