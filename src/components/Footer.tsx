import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

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
    icon: Instagram,
    href: 'https://instagram.com/asil_turkmen28',
    label: 'Instagram',
  },
  {
    icon: Mail,
    href: 'mailto:turkmenasil@hotmail.com',
    label: 'Email',
  },
]

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        <a href="#" className="font-heading font-bold text-2xl gradient-text cursor-pointer" aria-label="Ana sayfa">
          AT
        </a>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-2.5 text-slate-500 hover:text-slate-300 rounded-lg hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-white/[0.08]" />

        {/* Copyright */}
        <p className="text-slate-600 text-sm text-center">
          &copy; {year} Asil Türkmen. {t.footer.copy}
        </p>
      </div>
    </footer>
  )
}
