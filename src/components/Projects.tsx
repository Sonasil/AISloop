import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const cardGradients = [
  { from: '#6366F1', to: '#8B5CF6', glow: 'rgba(99, 102, 241, 0.12)' },
  { from: '#8B5CF6', to: '#EC4899', glow: 'rgba(139, 92, 246, 0.12)' },
  { from: '#F97316', to: '#EF4444', glow: 'rgba(249, 115, 22, 0.12)' },
  { from: '#06B6D4', to: '#3B82F6', glow: 'rgba(6, 182, 212, 0.12)' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Projects() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="section-pad">
      <div ref={ref} className="container-max">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3">
            {t.projects.title}
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t.projects.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-lg mx-auto">
            {t.projects.subtitle}
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } } }}
          className="grid md:grid-cols-2 gap-6"
        >
          {t.projects.items.map((project, i) => {
            const grad = cardGradients[i % cardGradients.length]
            return (
              <motion.div
                key={project.name}
                variants={fadeUp}
                className="glass-card rounded-2xl overflow-hidden group cursor-default"
                style={{ boxShadow: `0 0 50px ${grad.glow}` }}
              >
                {/* Gradient stripe */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: `linear-gradient(90deg, ${grad.from}, ${grad.to})` }}
                />

                <div className="p-6">
                  {/* Project icon circle */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-heading font-bold text-lg flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${grad.from}, ${grad.to})` }}
                    >
                      {project.name.charAt(0)}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub`}
                      className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-white/[0.08] transition-all duration-200 cursor-pointer"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:gradient-text transition-all">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs text-slate-300 rounded-md"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 cursor-pointer group/btn"
                    style={{ color: grad.from }}
                  >
                    <Github size={16} />
                    <span className="group-hover/btn:underline underline-offset-4">
                      {t.projects.github}
                    </span>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
