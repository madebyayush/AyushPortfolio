import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { CV_DATA } from '../data';
import { ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

export function ProjectsGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="work" className="py-32 bg-brand-bg relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex items-end justify-between"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">Selected <br/><span className="text-brand-accent-1">Works</span></h2>
          </div>
          <p className="hidden md:block max-w-sm text-right text-slate-400">
            A showcase of agentic systems, real-time architectures, and full-stack deployments.
          </p>
        </motion.div>

        {/* The interactive gallery replicating the video's accordion effect */}
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:h-[75vh] lg:min-h-[600px]">
          {CV_DATA.projects.map((project, index) => {
            const isActive = activeId === project.id;
            
            return (
              <motion.div
                key={project.id}
                layout
                onClick={() => setActiveId(isActive ? null : project.id)}
                className={cn(
                  "relative rounded-2xl overflow-hidden cursor-pointer group origin-center",
                  "transition-all duration-500",
                  // Mobile explicitly controls height, no strict flex height sharing
                  isActive ? "h-[450px]" : "h-24",
                  // Desktop uses flex sharing and takes full container height
                  "lg:h-full lg:flex-[1]",
                  isActive && "lg:flex-[4] xl:flex-[5]"
                )}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Background Image / Placeholder Gradient */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/40 to-transparent transition-opacity duration-500" />
                
                {/* Dark overlay for inactive state to match video style */}
                <motion.div 
                  animate={{ opacity: isActive ? 0 : 0.6 }}
                  className="absolute inset-0 bg-brand-bg/80"
                />

                <div className="absolute inset-0 p-5 lg:p-8 flex flex-col justify-end">
                  <motion.div layout="position" className="flex flex-col">
                    <span className="text-brand-accent-1 font-mono text-xs lg:text-sm mb-2 block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={cn(
                      "font-display font-bold uppercase tracking-tight transition-all duration-500 origin-left",
                      isActive 
                        ? "text-3xl lg:text-5xl mb-2" 
                        : "text-xl lg:text-2xl lg:-rotate-90 lg:translate-y-0 lg:translate-x-6 whitespace-nowrap"
                    )}>
                      {project.title}
                    </h3>
                  </motion.div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-300 text-sm md:text-base max-w-xl mb-6 leading-relaxed mt-4">
                          <span className="block font-semibold text-white mb-2">{project.subtitle}</span>
                          {project.description}
                        </p>
                        
                        <a 
                          href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                          target="_blank" 
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-bg rounded-full text-sm font-medium hover:bg-brand-accent-1 hover:text-white transition-colors duration-300 pointer-events-auto"
                        >
                          View Source <ExternalLink className="w-4 h-4" />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
