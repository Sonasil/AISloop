import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

type FormStatus = "idle" | "sending" | "success" | "error"

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

export default function Contact() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus("sending")
    const formData = new FormData(formRef.current)
    formData.set("access_key", WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_KEY_HERE")
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData })
      if (res.ok) { setStatus("success"); formRef.current.reset() }
      else setStatus("error")
    } catch { setStatus("error") }
  }

  const contactLinks = [
    { icon: Mail, label: "turkmenasil@hotmail.com", href: "mailto:turkmenasil@hotmail.com", color: "#818CF8" },
    { icon: Github, label: "github.com/Sonasil", href: "https://github.com/Sonasil", color: "#A78BFA" },
    { icon: Linkedin, label: "linkedin.com/in/asil-turkmen", href: "https://www.linkedin.com/in/asil-t%C3%BCrkmen-224ab0241", color: "#22D3EE" },
    { icon: Instagram, label: "@asil_turkmen28", href: "https://instagram.com/asil_turkmen28", color: "#F472B6" },
  ]

  const inputClass = "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.06] transition-all duration-200 text-sm"

  return (
    <section id="contact" className="section-pad">
      <div ref={ref} className="container-max">
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3">{t.contact.title}</motion.p>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-4">{t.contact.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-lg mx-auto">{t.contact.subtitle}</motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } } }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <h3 className="font-heading font-semibold text-xl text-white">{t.contact.info_title}</h3>
            <div className="space-y-3">
              {contactLinks.map(({ icon: Icon, label, href, color }) => (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors duration-200 truncate">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-xl text-white mb-6">{t.contact.form_title}</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />
                <div>
                  <label htmlFor="contact-name" className="block text-sm text-slate-400 mb-1.5">{t.contact.name}</label>
                  <input id="contact-name" type="text" name="name" required placeholder={t.contact.name_ph} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm text-slate-400 mb-1.5">{t.contact.email}</label>
                  <input id="contact-email" type="email" name="email" required placeholder={t.contact.email_ph} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm text-slate-400 mb-1.5">{t.contact.message}</label>
                  <textarea id="contact-message" name="message" required rows={5} placeholder={t.contact.message_ph} className={`${inputClass} resize-none`} />
                </div>
                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl text-emerald-300 text-sm"
                    style={{ background: "rgba(52, 211, 153, 0.08)", border: "1px solid rgba(52, 211, 153, 0.2)" }}>
                    <CheckCircle size={18} className="flex-shrink-0" />{t.contact.success}
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl text-red-300 text-sm"
                    style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
                    <AlertCircle size={18} className="flex-shrink-0" />{t.contact.error}
                  </motion.div>
                )}
                <button type="submit" disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
                  style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)", boxShadow: "0 0 30px rgba(99, 102, 241, 0.25)" }}>
                  {status === "sending" ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{t.contact.sending}</>
                  ) : (
                    <><Send size={16} />{t.contact.send}</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
