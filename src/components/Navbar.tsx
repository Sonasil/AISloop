import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  const handleLinkClick = () => setIsOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <div
          className={`flex items-center gap-6 px-5 py-3 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'glass shadow-lg shadow-black/20'
              : 'bg-transparent'
          } max-w-3xl w-full`}
        >
          {/* Logo */}
          <a
            href="#"
            className="font-heading font-bold text-lg cursor-pointer flex-shrink-0"
            aria-label="Ana sayfa"
          >
            <span className="gradient-text">AT</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1" aria-label="Ana navigasyon">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 ml-auto md:ml-0">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium glass glass-hover rounded-lg cursor-pointer text-slate-300 hover:text-white transition-colors duration-200"
              aria-label={`Switch to ${lang === 'tr' ? 'English' : 'Türkçe'}`}
            >
              <span className={lang === 'tr' ? 'text-indigo-400' : 'text-slate-400'}>TR</span>
              <span className="text-slate-600 mx-0.5">/</span>
              <span className={lang === 'en' ? 'text-indigo-400' : 'text-slate-400'}>EN</span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(o => !o)}
              className="md:hidden p-2 rounded-lg glass glass-hover text-slate-400 hover:text-white cursor-pointer transition-colors"
              aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-[76px] left-4 right-4 z-40 glass rounded-2xl p-4 md:hidden shadow-xl shadow-black/30"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobil navigasyon">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all duration-200 cursor-pointer font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
