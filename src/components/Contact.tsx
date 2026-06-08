import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Phone, Download, ArrowUpRight } from 'lucide-react';
import { CV_DATA } from '../data';

export function Contact() {
  const handleDownloadCV = () => {
    import('jspdf').then(({ default: jsPDF }) => {
      const { personal, skills, experience, education, projects, certifications, trainingSimulations } = CV_DATA;
      const doc = new jsPDF();
      
      let y = 20;
      const lineHeight = 7;
      const margin = 20;
      const pageWidth = doc.internal.pageSize.width;
      const maxWidth = pageWidth - margin * 2;

      const addText = (text: string, fontSize: number, isBold = false, color = [0, 0, 0] as [number, number, number]) => {
        doc.setFont("helvetica", isBold ? "bold" : "normal");
        doc.setFontSize(fontSize);
        doc.setTextColor(color[0], color[1], color[2]);
        const lines = doc.splitTextToSize(text, maxWidth);
        
        if (y + lines.length * lineHeight > doc.internal.pageSize.height - margin) {
          doc.addPage();
          y = margin;
        }
        
        doc.text(lines, margin, y);
        y += lines.length * lineHeight;
      };

      // Header
      addText(personal.name.toUpperCase(), 24, true);
      y -= 2;
      addText(personal.role, 12, false, [100, 100, 100]);
      y += 5;

      // Contact Info
      addText(`Email: ${personal.email} | Phone: ${personal.phone}`, 10);
      addText(`LinkedIn: ${personal.linkedin} | GitHub: ${personal.github}`, 10);
      y += 10;

      // Skills
      addText("TECHNICAL SKILLS", 14, true, [59, 130, 246]); // Brand color 1 rough equivalent
      y += 2;
      Object.entries(skills).forEach(([category, items]) => {
        addText(`${category}: ${items.join(', ')}`, 10);
        y += 2;
      });
      y += 5;

      // Experience
      addText("PROFESSIONAL EXPERIENCE", 14, true, [59, 130, 246]);
      y += 2;
      experience.forEach(exp => {
        addText(`${exp.title} | ${exp.company}`, 12, true);
        addText(exp.period, 10, false, [100, 100, 100]);
        exp.points.forEach(p => {
          addText(`• ${p}`, 10);
        });
        y += 5;
      });

      // Projects
      addText("SELECTED PROJECTS", 14, true, [59, 130, 246]);
      y += 2;
      projects.forEach(proj => {
        addText(`${proj.title} - ${proj.subtitle}`, 12, true);
        addText(proj.description, 10);
        addText(`Link: ${proj.link}`, 10, false, [59, 130, 246]);
        y += 5;
      });

      // Education
      addText("EDUCATION", 14, true, [59, 130, 246]);
      y += 2;
      addText(education.institution, 12, true);
      addText(`${education.degree} (${education.period})`, 10);
      y += 5;

      // Certifications
      addText("CERTIFICATIONS & ACHIEVEMENTS", 14, true, [59, 130, 246]);
      y += 2;
      certifications.forEach(cert => {
        addText(`• ${cert}`, 10);
      });
      y += 5;

      // Training & Simulations
      if (trainingSimulations) {
        addText("TRAINING & SIMULATIONS", 14, true, [59, 130, 246]);
        y += 2;
        trainingSimulations.forEach(sim => {
          addText(`${sim.title} (${sim.period})`, 12, true);
          sim.description.split('\n').forEach(line => {
            if (line.trim()) {
              addText(line, 10);
            } else {
              y += 2;
            }
          });
          y += 3;
        });
      }

      doc.save('Ayush_Anand_CV.pdf');
    });
  };

  const contactLinks = [
    {
      name: 'Email',
      value: CV_DATA.personal.email,
      link: `mailto:${CV_DATA.personal.email}`,
      icon: <Mail className="w-6 h-6" />,
      color: "group-hover:text-red-400",
      bg: "group-hover:bg-red-400/10",
      border: "group-hover:border-red-400/50",
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/ayushanand...',
      link: `https://${CV_DATA.personal.linkedin}`,
      icon: <Linkedin className="w-6 h-6" />,
      color: "group-hover:text-blue-400",
      bg: "group-hover:bg-blue-400/10",
      border: "group-hover:border-blue-400/50",
    },
    {
      name: 'GitHub',
      value: 'github.com/madebyayush',
      link: `https://${CV_DATA.personal.github}`,
      icon: <Github className="w-6 h-6" />,
      color: "group-hover:text-white",
      bg: "group-hover:bg-white/10",
      border: "group-hover:border-white/50",
    },
    {
      name: 'Phone',
      value: CV_DATA.personal.phone,
      link: `tel:${CV_DATA.personal.phone.replace(/\s+/g, '')}`,
      icon: <Phone className="w-6 h-6" />,
      color: "group-hover:text-green-400",
      bg: "group-hover:bg-green-400/10",
      border: "group-hover:border-green-400/50",
    }
  ];

  return (
    <section id="contact" className="py-24 bg-brand-bg relative z-10 border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            Let's <span className="text-brand-accent-1">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Ready to collaborate on agentic systems and scalable architectures? Reach out through any of these platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactLinks.map((contact, idx) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target={contact.name !== 'Phone' && contact.name !== 'Email' ? "_blank" : undefined}
              rel={contact.name !== 'Phone' && contact.name !== 'Email' ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group flex items-center justify-between p-6 rounded-2xl bg-brand-surface border border-slate-800 transition-all duration-300 hover:-translate-y-1 ${contact.border}`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-brand-bg border border-slate-700 transition-colors duration-300 ${contact.color} ${contact.bg}`}>
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">{contact.name}</h3>
                  <p className="text-white font-medium group-hover:text-slate-200 transition-colors">{contact.value}</p>
                </div>
              </div>
              <ArrowUpRight className={`w-5 h-5 text-slate-600 transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${contact.color}`} />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <button 
            onClick={handleDownloadCV}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-bg rounded-full font-bold text-lg hover:bg-brand-accent-1 hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Download Full CV
          </button>
        </motion.div>
      </div>
    </section>
  );
}
