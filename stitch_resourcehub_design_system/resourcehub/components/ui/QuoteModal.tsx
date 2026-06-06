'use client'

import { useEffect, useState } from 'react'
import { X, Send, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json()
        setErrorMsg(json.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  function handleClose() {
    onClose()
    setTimeout(() => setStatus('idle'), 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-dark/70 z-[100] backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="bg-primary px-8 py-6 flex items-center justify-between">
                <div>
                  <span className="block w-8 h-0.5 bg-accent mb-2" />
                  <h2 className="font-poppins font-bold text-white text-xl">Request a Quote</h2>
                  <p className="text-white/60 text-sm mt-1">We&apos;ll get back to you within 1 business day</p>
                </div>
                <button
                  onClick={handleClose}
                  aria-label="Close"
                  className="text-white/60 hover:text-white transition-colors duration-200 ml-4 shrink-0"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Body */}
              <div className="p-8">
                {status === 'success' ? (
                  <div className="flex flex-col items-center text-center py-8 gap-4">
                    <div className="w-16 h-16 bg-accent flex items-center justify-center">
                      <Send size={26} className="text-white" />
                    </div>
                    <h3 className="font-poppins font-bold text-primary text-lg">Quote Request Sent!</h3>
                    <p className="text-muted text-sm max-w-xs">
                      Thank you! Our team will review your request and respond within 1 business day.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-2 bg-accent text-white font-semibold px-8 py-3 text-sm hover:bg-accent-dark transition-colors duration-200"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="q-name" className="block text-xs font-semibold text-body-text mb-1.5 uppercase tracking-wide">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="q-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          className="w-full px-4 py-3 border border-mid bg-light text-body-text text-sm outline-none focus:border-accent transition-colors duration-200"
                          placeholder="Ahmed Al Mansouri"
                        />
                      </div>
                      <div>
                        <label htmlFor="q-company" className="block text-xs font-semibold text-body-text mb-1.5 uppercase tracking-wide">
                          Company
                        </label>
                        <input
                          id="q-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          className="w-full px-4 py-3 border border-mid bg-light text-body-text text-sm outline-none focus:border-accent transition-colors duration-200"
                          placeholder="Your Company LLC"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="q-email" className="block text-xs font-semibold text-body-text mb-1.5 uppercase tracking-wide">
                          Email <span className="text-accent">*</span>
                        </label>
                        <input
                          id="q-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="w-full px-4 py-3 border border-mid bg-light text-body-text text-sm outline-none focus:border-accent transition-colors duration-200"
                          placeholder="ahmed@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="q-phone" className="block text-xs font-semibold text-body-text mb-1.5 uppercase tracking-wide">
                          Phone
                        </label>
                        <input
                          id="q-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          className="w-full px-4 py-3 border border-mid bg-light text-body-text text-sm outline-none focus:border-accent transition-colors duration-200"
                          placeholder="+971 50 000 0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="q-message" className="block text-xs font-semibold text-body-text mb-1.5 uppercase tracking-wide">
                        What do you need? <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="q-message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-mid bg-light text-body-text text-sm outline-none focus:border-accent transition-colors duration-200 resize-none"
                        placeholder="Product type, quantity, project timeline..."
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-accent text-sm border border-accent/30 bg-accent/5 px-4 py-3">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-accent text-white font-bold py-4 text-sm tracking-wide hover:bg-accent-dark active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <><Loader2 size={16} className="animate-spin" /> Sending...</>
                      ) : (
                        <><Send size={16} /> Submit Quote Request</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
