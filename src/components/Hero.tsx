import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

function useTypewriter(text: string, speed = 55) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    setDisplayed('')
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])
  return displayed
}

export default function Hero() {
  const { t } = useLanguage()
  const roleText = useTypewriter(t.hero.role, 60)

  const socials = [
    {
      icon: Github,
      href: 'https://github.com/Sonasil',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/asil-t%C3%BCrkmen-224ab0241',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:turkmenasil@hotmail.com',
      label: 'Email',
    },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="blob animate-blob opacity-[0.12]"
          style={{
            width: 700,
            height: 700,
            background: 'radial-gradient(circle, #6366F1, transparent)',
            top: -200,
            right: -150,
          }}
        />
        <div
          className="blob animate-blob-delay opacity-[0.10]"
          style={{
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, #8B5CF6, transparent)',
            bottom: -150,
            left: -150,
          }}
        />
        <div
          className="blob animate-blob-slow opacity-[0.08]"
          style={{
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, #06B6D4, transparent)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid" />
        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #0A0A14 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-36 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Available badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2.5 mb-10">
            <span className="glass rounded-full px-4 py-2 text-sm text-slate-300 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={item} className="text-slate-400 text-xl mb-3 font-medium">
            {t.hero.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-heading font-bold mb-5 leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 6.5rem)' }}
          >
            <span className="gradient-text">Asil Türkmen</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.h2
            variants={item}
            className="font-heading text-2xl md:text-3xl text-slate-300 font-medium mb-6 h-9 md:h-10"
          >
            {roleText}
            <span className="inline-block w-0.5 h-7 ml-1 bg-indigo-400 animate-pulse align-middle" />
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t.hero.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-white cursor-pointer transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.25)',
              }}
            >
              <ExternalLink size={16} />
              {t.hero.cta_work}
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white glass cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{ border: '1px solid rgba(255,255,255,0.10)' }}
            >
              <Download size={16} />
              {t.hero.cta_cv}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center justify-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="p-3 glass rounded-xl text-slate-400 hover:text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
