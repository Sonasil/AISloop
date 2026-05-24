import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Briefcase, Code2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="about" className="section-pad">
      <div ref={ref} className="container-max">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left: Text */}
          <div>
            <motion.div variants={fadeUp} className="mb-3">
              <span className="text-sm font-medium text-indigo-400 tracking-widest uppercase">
                {t.about.title}
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-8 leading-tight"
            >
              {t.about.title}
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 text-slate-400 leading-relaxed text-base md:text-lg mb-8">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </motion.div>

            {/* Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2.5 glass rounded-xl text-sm text-slate-300">
                <GraduationCap size={16} className="text-indigo-400" />
                {t.about.university}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 glass rounded-xl text-sm text-slate-300">
                <MapPin size={16} className="text-violet-400" />
                {t.about.location}
              </span>
              <span
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-emerald-300"
                style={{
                  background: 'rgba(52, 211, 153, 0.08)',
                  border: '1px solid rgba(52, 211, 153, 0.2)',
                }}
              >
                <Briefcase size={16} />
                {t.about.available}
              </span>
            </motion.div>
          </div>

          {/* Right: Code card */}
          <motion.div variants={fadeUp}>
            <div
              className="glass-card rounded-2xl overflow-hidden"
              style={{ fontFamily: "'Space Grotesk', monospace" }}
            >
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/60" />
                <span className="ml-3 text-xs text-slate-500">about.ts</span>
              </div>

              {/* Code content */}
              <div className="p-6 text-sm leading-7">
                <div>
                  <span className="text-violet-400">const</span>
                  <span className="text-white"> developer </span>
                  <span className="text-slate-400">= {'{'}</span>
                </div>
                <div className="ml-5 space-y-1">
                  <div>
                    <span className="text-cyan-400">name</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">"Asil Türkmen"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">role</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">"Full-Stack Developer"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">location</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">"Cyprus, TRNC"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">education</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">"EMU — Software Eng."</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">focus</span>
                    <span className="text-slate-400">: [</span>
                  </div>
                  <div className="ml-5">
                    <span className="text-emerald-400">"TypeScript"</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-emerald-400">"React"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="ml-5">
                    <span className="text-emerald-400">"Next.js"</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-emerald-400">"React Native"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">status</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">"Open to Work"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                </div>
                <div>
                  <span className="text-slate-400">{'}'}</span>
                </div>
              </div>

              {/* Interest tags */}
              <div className="px-6 pb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 size={14} className="text-indigo-400" />
                  <span className="text-xs text-slate-500 uppercase tracking-wider">
                    {t.about.interests}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.about.interest_list.map(interest => (
                    <span
                      key={interest}
                      className="px-3 py-1 text-xs text-slate-300 rounded-lg"
                      style={{
                        background: 'rgba(99, 102, 241, 0.1)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
