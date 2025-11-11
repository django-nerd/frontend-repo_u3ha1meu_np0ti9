import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Flame, Sparkles, Phone, MessageCircle, MapPin, Play, Pause, Mail, Stars } from 'lucide-react'

function useParallax(offset = 0.2) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [offset * 100, -offset * 100])
  return { ref, y }
}

const servicesList = [
  { id: 'badha-dosha-pariharam', title: 'Badha Dosha Pariharam', desc: 'Removal of obstacles and negative influences. Alignment with auspicious energies.' },
  { id: 'black-magic-removal', title: 'Black Magic Removal', desc: 'Protection and cleansing from dark energies and psychic disturbances.' },
  { id: 'sathru-samhara-pooja', title: 'Sathru Samhara Pooja', desc: 'Invoking divine strength for victory over adversities and enemies.' },
  { id: 'vishnumaya-blessing', title: 'Vishnumaya Blessing', desc: 'Seek grace, guidance and spiritual upliftment from Vishnumaya.' },
  { id: 'vishnumaya-saktheya-pooja', title: 'Vishnumaya Saktheya Pooja', desc: 'Powerful protection, courage and radiant spiritual force.' },
  { id: 'real-estate-pooja', title: 'Real Estate Pooja', desc: 'Auspicious blessings for property, home, land and prosperity.' },
]

function FloatingParticles() {
  const particles = useMemo(() => Array.from({ length: 24 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 6,
    blur: Math.random() * 2 + 1,
  })), [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map(p => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: [0, 0.8, 0], y: [-40, 0, -80] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          style={{ left: `${p.left}%`, width: p.size, height: p.size, filter: `blur(${p.blur}px)` }}
          className="absolute bottom-0 rounded-full bg-gradient-to-tr from-amber-300/30 via-yellow-200/40 to-white/30"
        />
      ))}
    </div>
  )
}

function Hero({ onBookClick }) {
  const { ref, y } = useParallax(0.3)
  return (
    <section ref={ref} className="relative h-[90vh] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://videos.pexels.com/video-files/854089/854089-uhd_2560_1440_30fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80" />
      <FloatingParticles />
      <motion.div style={{ y }} className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-amber-200/90 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs tracking-widest uppercase">Divine Sanctum</span>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1.1 }}
          className="max-w-5xl bg-gradient-to-br from-amber-200 via-yellow-100 to-white bg-clip-text text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent drop-shadow"
        >
          Vadakkumpuram Sree Vishnumaya Devasthanam
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.1 }}
          className="mt-4 max-w-2xl text-amber-100/90"
        >
          Divine Blessings. Powerful Poojas. Eternal Protection.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button onClick={onBookClick} className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-800/30">
            <span className="relative z-10">Book Your Pooja</span>
            <span className="absolute inset-0 -translate-x-full bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-0" />
          </button>
          <a href="#about" className="text-amber-200/80 hover:text-amber-100 transition-colors">Learn More</a>
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0c0a09] to-transparent" />
    </section>
  )
}

function About() {
  const { ref, y } = useParallax(0.15)
  return (
    <section id="about" className="relative overflow-hidden bg-[#0c0a09] py-24">
      <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-gradient-to-tr from-amber-700/20 to-yellow-500/10 blur-3xl" />
      <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-red-800/10 to-amber-600/10 blur-3xl" />
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y }} className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-amber-900/30 bg-gradient-to-br from-stone-900 to-black p-[2px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1575148483431-e5c98ac508c7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWaXNobnVtYXlhfGVufDB8MHx8fDE3NjI4NzMyNDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Vishnumaya" className="h-full w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-amber-900/20" />
                <div className="absolute inset-0 ring-1 ring-inset ring-amber-300/10" />
              </div>
            </div>
          </motion.div>
          <div>
            <h2 className="bg-gradient-to-br from-amber-200 via-yellow-100 to-white bg-clip-text text-3xl md:text-4xl font-bold text-transparent">A Sacred Abode of Vishnumaya</h2>
            <p className="mt-4 text-amber-100/80 leading-relaxed">
              A divine sanctuary where faith meets protection. Every ritual is performed with traditional sanctity and heartfelt devotion, invoking the grace of Vishnumaya to remove obstacles, ward off negativity, and bring peace and prosperity.
            </p>
            <p className="mt-3 text-amber-100/70">
              The temple’s aura blends heritage and modern elegance — sacred chants, shimmering diyas, and a tranquil energy that uplifts the soul.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services({ onBookClick }) {
  return (
    <section id="services" className="relative bg-gradient-to-b from-[#0c0a09] to-[#0a0908] py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-500/5 px-3 py-1 text-amber-200/80">
            <Flame className="h-4 w-4" />
            <span className="text-xs uppercase tracking-widest">Pooja Services</span>
          </div>
          <h3 className="bg-gradient-to-br from-amber-200 via-yellow-100 to-white bg-clip-text text-3xl md:text-4xl font-bold text-transparent">Sacred Rituals, Powerful Outcomes</h3>
          <p className="mt-3 text-amber-100/70">Performed with precision and devotion for tangible spiritual protection and blessings.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-amber-900/30 bg-gradient-to-br from-stone-950 via-stone-900/60 to-black p-6"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top,rgba(255,200,80,0.15),transparent_60%)]" />
              <div className="relative">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-600/15 ring-1 ring-amber-400/20">
                  <Stars className="h-5 w-5 text-amber-300" />
                </div>
                <h4 className="text-xl font-semibold text-amber-100">{s.title}</h4>
                <p className="mt-2 text-sm text-amber-100/70">{s.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-amber-300/80 text-sm">On Request</span>
                  <button onClick={onBookClick} className="relative overflow-hidden rounded-full border border-amber-400/30 px-4 py-2 text-sm text-amber-100/90 transition hover:bg-amber-500/10">
                    <span className="relative z-10">Book Now</span>
                    <span className="absolute inset-0 -translate-x-full bg-white/20 blur-sm transition-transform duration-700 group-hover:translate-x-0" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const sections = [
    {
      img: 'https://images.pexels.com/photos/169390/pexels-photo-169390.jpeg?auto=compress&cs=tinysrgb&w=1600',
      caption: 'Temple Lamps & Divine Light',
    },
    {
      img: 'https://images.pexels.com/photos/1795725/pexels-photo-1795725.jpeg?auto=compress&cs=tinysrgb&w=1600',
      caption: 'Ritual Fire & Offerings',
    },
    {
      img: 'https://images.pexels.com/photos/6664378/pexels-photo-6664378.jpeg?auto=compress&cs=tinysrgb&w=1600',
      caption: 'Sanctum Serenity',
    },
  ]
  return (
    <section id="gallery" className="bg-[#0a0908]">
      {sections.map((s, i) => (
        <div key={i} className="relative h-[50vh] w-full overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage: `url(${s.img})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full items-end justify-start">
            <div className="m-10 rounded-lg bg-black/40 px-5 py-3 text-amber-100 ring-1 ring-white/10 backdrop-blur">
              {s.caption}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

function Testimonials() {
  const items = [
    { quote: 'After the Vishnumaya Pooja, our home felt protected and peaceful. Obstacles vanished.', name: 'Anjali, Kochi' },
    { quote: 'Powerful energy. The rituals are precise and deeply transformative.', name: 'Rahul, Thrissur' },
    { quote: 'A sacred experience unlike any other. Felt guided and blessed.', name: 'Meera, Palakkad' },
  ]
  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-[#0a0908] to-[#0b0a09] py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h3 className="bg-gradient-to-br from-amber-200 via-yellow-100 to-white bg-clip-text text-3xl md:text-4xl font-bold text-transparent">Devotee Experiences</h3>
          <p className="mt-2 text-amber-100/70">Graceful stories of protection, healing and upliftment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-amber-900/30 bg-gradient-to-br from-stone-950/90 to-black p-6 text-amber-100 shadow-inner"
            >
              <p className="italic">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-amber-200/80">{t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactBooking({ backendUrl }) {
  const [playing, setPlaying] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.play().catch(() => {})
    } else {
      audioRef.current.pause()
    }
  }, [playing])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = {
      full_name: form.get('full_name'),
      email: form.get('email') || undefined,
      phone: form.get('phone'),
      pooja_type: form.get('pooja_type'),
      preferred_date: form.get('preferred_date') || undefined,
      message: form.get('message') || undefined,
      whatsapp_opt_in: !!form.get('whatsapp')
    }
    try {
      const res = await fetch(`${backendUrl}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.detail || 'Failed to submit')
      setStatus({ type: 'success', message: 'Your request has been received. We will contact you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative bg-[#0b0a09] py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="bg-gradient-to-br from-amber-200 via-yellow-100 to-white bg-clip-text text-3xl md:text-4xl font-bold text-transparent">Contact & Booking</h3>
            <p className="mt-3 text-amber-100/70">Reach out to plan your pooja. We guide you with dates, details and sankalpam.</p>
            <div className="mt-6 space-y-3 text-amber-100/80">
              <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-amber-300" /> Vadakkumpuram, Kerala</p>
              <a href="tel:+919000000000" className="flex items-center gap-2 hover:text-amber-100"><Phone className="h-5 w-5 text-amber-300" /> +91 90000 00000</a>
              <a href="https://wa.me/919000000000" target="_blank" className="flex items-center gap-2 hover:text-amber-100"><MessageCircle className="h-5 w-5 text-amber-300" /> WhatsApp</a>
              <a href="mailto:temple@example.com" className="flex items-center gap-2 hover:text-amber-100"><Mail className="h-5 w-5 text-amber-300" /> temple@example.com</a>
            </div>
            <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-white/10">
              <iframe
                title="Temple Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.753287962938!2d76.271083!3d9.978994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d3531a2ba5b%3A0x5c2d!2sKerala!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-amber-900/30 bg-gradient-to-br from-stone-950/90 to-black p-6 ring-1 ring-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-amber-200/80">Full Name</label>
                  <input required name="full_name" className="mt-1 w-full rounded-md border border-amber-700/30 bg-black/40 px-3 py-2 text-amber-100 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-500/40" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-amber-200/80">Phone</label>
                  <input required name="phone" className="mt-1 w-full rounded-md border border-amber-700/30 bg-black/40 px-3 py-2 text-amber-100 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-500/40" placeholder="Contact number" />
                </div>
                <div>
                  <label className="text-sm text-amber-200/80">Email (optional)</label>
                  <input name="email" type="email" className="mt-1 w-full rounded-md border border-amber-700/30 bg-black/40 px-3 py-2 text-amber-100 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-500/40" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm text-amber-200/80">Preferred Date</label>
                  <input name="preferred_date" type="date" className="mt-1 w-full rounded-md border border-amber-700/30 bg-black/40 px-3 py-2 text-amber-100 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-500/40" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-amber-200/80">Select Pooja</label>
                  <select name="pooja_type" className="mt-1 w-full rounded-md border border-amber-700/30 bg-black/40 px-3 py-2 text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500/40">
                    {servicesList.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-amber-200/80">Message</label>
                  <textarea name="message" rows="4" className="mt-1 w-full rounded-md border border-amber-700/30 bg-black/40 px-3 py-2 text-amber-100 placeholder:text-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-500/40" placeholder="Any details or sankalpam" />
                </div>
                <label className="mt-2 flex items-center gap-2 text-sm text-amber-200/80 md:col-span-2">
                  <input type="checkbox" name="whatsapp" defaultChecked className="h-4 w-4 rounded border-amber-700/40 bg-black/40" />
                  Receive WhatsApp updates
                </label>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button disabled={submitting} className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-amber-800/30 disabled:opacity-70">
                  <span className="relative z-10">{submitting ? 'Submitting…' : 'Book a Pooja'}</span>
                  <span className="absolute inset-0 -translate-x-full bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-0" />
                </button>
                {status && (
                  <span className={`text-sm ${status.type === 'success' ? 'text-emerald-300' : 'text-red-300'}`}>{status.message}</span>
                )}
              </div>
            </form>

            <div className="mt-8 flex items-center gap-3 rounded-full border border-amber-800/30 bg-black/40 px-4 py-2 text-amber-100 w-fit">
              <button onClick={() => setPlaying(p => !p)} className="inline-flex items-center gap-2 rounded-full bg-amber-600/20 px-3 py-1 text-sm hover:bg-amber-600/30">
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {playing ? 'Pause Chants' : 'Play Chants'}
              </button>
              <span className="text-xs text-amber-200/70">Ambient temple chants</span>
              <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2022/03/10/audio_7bb9e610db.mp3?filename=om-chanting-6022.mp3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative bg-black py-10 text-amber-100/80">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600/20 ring-1 ring-amber-400/30">
            <Flame className="h-5 w-5 text-amber-300" />
          </div>
          <div>
            <div className="font-semibold text-amber-100">Vadakkumpuram Sree Vishnumaya Devasthanam</div>
            <div className="text-xs text-amber-200/60">© {new Date().getFullYear()} All rights reserved</div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#about" className="hover:text-amber-100">About</a>
          <a href="#services" className="hover:text-amber-100">Services</a>
          <a href="#gallery" className="hover:text-amber-100">Gallery</a>
          <a href="#contact" className="hover:text-amber-100">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const bookingRef = useRef(null)
  const handleBookClick = () => bookingRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-[#0b0a09] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600/20 ring-1 ring-amber-400/30">
              <Flame className="h-4 w-4 text-amber-300" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-amber-100">Vishnumaya Devasthanam</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-amber-100/80">
            <a href="#about" className="hover:text-amber-100">About</a>
            <a href="#services" className="hover:text-amber-100">Services</a>
            <a href="#gallery" className="hover:text-amber-100">Gallery</a>
            <a href="#testimonials" className="hover:text-amber-100">Experiences</a>
            <a href="#contact" className="hover:text-amber-100">Contact</a>
            <button onClick={handleBookClick} className="rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-amber-100 hover:bg-amber-500/20">Book</button>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero onBookClick={handleBookClick} />
        <About />
        <Services onBookClick={handleBookClick} />
        <Gallery />
        <div id="testimonials"><Testimonials /></div>
        <div ref={bookingRef}><ContactBooking backendUrl={backendUrl} /></div>
      </main>

      <Footer />
    </div>
  )
}
