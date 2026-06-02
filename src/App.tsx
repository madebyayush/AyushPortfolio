import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ExperienceSkills } from './components/ExperienceSkills';
import { Contact } from './components/Contact';
import { motion, useScroll, useSpring } from 'motion/react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-brand-bg relative selection:bg-brand-accent-2 selection:text-white">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-accent-1 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <ProjectsGallery />
        <ExperienceSkills />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-500 text-xs uppercase tracking-widest border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Ayush Anand. All rights reserved.</p>
        <p className="mt-2">Built By Ayush Anand</p>
      </footer>
    </div>
  );
}

export default App;

