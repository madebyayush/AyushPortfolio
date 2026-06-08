import { motion } from 'motion/react';
import { CV_DATA } from '../data';

export function ExperienceSkills() {
  return (
    <section id="skills" className="py-24 bg-brand-surface relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Section */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-2">Experience</h2>
              <div className="h-1 w-20 bg-brand-accent-2" />
            </motion.div>

            <div className="space-y-12">
              {CV_DATA.experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 border-l border-slate-700 hover:border-brand-accent-2 transition-colors duration-500"
                >
                  <div className="absolute w-3 h-3 bg-brand-bg border-2 border-brand-accent-2 rounded-full -left-[6.5px] top-1.5" />
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <div className="text-brand-accent-2 font-mono text-sm mb-4">{exp.company} • {exp.period}</div>
                  <ul className="space-y-3 text-slate-400">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Education & Certs */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-16 mb-8"
            >
              <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-2">Education & Certs</h2>
              <div className="h-1 w-12 bg-brand-accent-3" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white">{CV_DATA.education.degree}</h3>
              <p className="text-brand-accent-3 font-mono text-sm mb-6">{CV_DATA.education.institution} • {CV_DATA.education.period}</p>
              
              <ul className="space-y-2">
                {CV_DATA.certifications.map((cert, idx) => (
                  <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-brand-accent-3 mt-1">▹</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Training & Simulations */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-16 mb-8"
            >
              <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-2">Training & Simulations</h2>
              <div className="h-1 w-12 bg-brand-accent-2" />
            </motion.div>

            <div className="space-y-8">
              {CV_DATA.trainingSimulations.map((sim, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 border-l border-slate-700 hover:border-brand-accent-2 transition-colors duration-500"
                >
                  <div className="absolute w-3 h-3 bg-brand-bg border-2 border-brand-accent-2 rounded-full -left-[6.5px] top-1.5" />
                  <h3 className="text-lg font-bold text-white">{sim.title}</h3>
                  <div className="text-brand-accent-2 font-mono text-xs mb-3">{sim.period}</div>
                  <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                    {sim.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
             <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-2">Technical Skills</h2>
              <div className="h-1 w-20 bg-brand-accent-1" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(CV_DATA.skills).map(([category, skills], idx) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-brand-bg rounded-xl p-6 border border-slate-800 hover:border-brand-accent-1/50 transition-colors group"
                >
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider group-hover:text-brand-accent-1 transition-colors">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-full border border-slate-700/50 group-hover:border-brand-accent-1/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
