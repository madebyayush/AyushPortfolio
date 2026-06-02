import { motion, useScroll, useTransform } from 'motion/react';
import { CV_DATA } from '../data';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Abstract Animated Background inspired by the video's torus */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative w-[30vmax] h-[30vmax]"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full border-[1px] border-brand-accent-1/20 shadow-[0_0_100px_rgba(59,130,246,0.2)] mix-blend-screen animate-pulse" />
          
          {/* Inner morphed shapes */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              borderRadius: ["50%", "40%", "50%"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[10%] bg-gradient-to-tr from-brand-accent-2/40 to-brand-accent-1/40 blur-[40px] mix-blend-screen"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[20%] rounded-full border-2 text-transparent border-t-brand-accent-3/50 border-r-brand-accent-2/50 border-b-brand-accent-1/50 border-l-transparent"
          />
        </motion.div>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 mix-blend-lighten"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm md:text-base font-bold tracking-[0.3em] text-brand-accent-1 uppercase mb-4">
            AI / ML Engineer & Orchestration
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold leading-none tracking-tighter uppercase mb-6 drop-shadow-2xl">
            {CV_DATA.personal.name.split(' ')[0]} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">
              {CV_DATA.personal.name.split(' ')[1]}
            </span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light"
        >
          Building autonomous agents, real-time systems, and scalable full-stack architectures.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-slate-500"
      >
        <span>Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
