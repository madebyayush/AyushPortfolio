import { motion } from 'motion/react';
import { CV_DATA } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white"
    >
      <div className="text-xl font-display font-bold tracking-tighter">
        AA<span className="text-brand-accent-1">.</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
        <a href="#about" className="hover:text-brand-accent-1 transition-colors">About</a>
        <a href="#work" className="hover:text-brand-accent-2 transition-colors">Work</a>
        <a href="#skills" className="hover:text-brand-accent-3 transition-colors">Skills</a>
        <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="#contact" className="hover:text-brand-accent-1 transition-colors">
          <Mail className="w-5 h-5" />
        </a>
        <a href={`https://${CV_DATA.personal.github}`} target="_blank" rel="noreferrer" className="hover:text-brand-accent-2 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href={`https://${CV_DATA.personal.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-brand-accent-3 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </motion.nav>
  );
}
