import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Monitor, Smartphone, Database, Wrench } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const categories = [
  {
    key: 'frontend' as const,
    icon: Monitor,
    gradient: 'from-indigo-500 to-violet-500',
    glow: 'rgba(99, 102, 241, 0.15)',
    border: 'rgba(99, 102, 241, 0.2)',
    skills: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Vue.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    key: 'mobile' as const,
    icon: Smartphone,
    gradient: 'from-violet-500 to-fuchsia-500',
    glow: 'rgba(139, 92, 246, 0.15)',
    border: 'rgba(139, 92, 246, 0.2)',
    skills: ['React Native', 'Expo'],
  },
  {
    key: 'backend' as const,
    icon: Database,
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6, 182, 212, 0.15)',
    border: 'rgba(6, 182, 212, 0.2)',
    skills: ['Node.js', 'Firebase'],
  },
  {
    key: 'tools' as const,
    icon: Wrench,
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16, 185, 129, 0.15)',
    border: 'rgba(16, 185, 129, 0.2)',
    skills: ['Git', 'Vite', 'Vercel', 'ESLint', 'Prettier'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Skills() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const labels: Record<(typeof categories)[number]['key'], string> = {
    frontend: t.skills.frontend,
    mobile: t.skills.mobile,
    backend: t.skills.backend,
    tools: t.skills.tools,
  }

  return (
    <section id="skills" className="section-pad">
      <div ref={ref} className="container-max">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3">
            {t.skills.title}
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t.skills.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-lg mx-auto">
            {t.skills.subtitle}
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {categories.map(({ key, icon: Icon, gradient, glow, border, skills }) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className="glass-card rounded-2xl p-6 cursor-default"
              style={{ boxShadow: `0 0 40px ${glow}` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} text-white`}
                >
                  <Icon size={18} />
                </div>
                <h3 className="font-heading font-semibold text-white text-base">
                  {labels[key]}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs text-slate-300 rounded-lg font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: `1px solid ${border}`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
