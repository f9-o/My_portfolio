import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const EXPERIENCES = [
  {
    role: "Maintenance Technician: Mechanical Equipment (Pumps)",
    company: "Industrial Sector",
    date: "2024 - 2026",
    desc: [
      "Specialized in the maintenance and diagnostic of industrial pump systems.",
      "Conducted vibration analysis and predictive maintenance protocols.",
      "Optimized mechanical efficiency and reduced equipment downtime."
    ]
  },
  {
    role: "Full Stack Software Developer",
    company: "Freelance & Projects",
    date: "2016 - 2026",
    desc: [
      "Decade of experience in building scalable web and software solutions.",
      "Expertise in React, Node.js, Python, and Edge Computing integration.",
      "Developed autonomous systems bridging hardware and software."
    ]
  },
];

const ExperienceTimeline = ({ t }) => {
  return (
    <div className="relative border-l-2 border-white/5 ml-3 md:ml-6 space-y-16 my-10">
      {EXPERIENCES.map((exp, i) => (
        <div key={i} className="relative pl-8 md:pl-12 group">
          {/* Animated Timeline Dot */}
          <div className="absolute -left-[9px] top-0 flex items-center justify-center">
             <div className="w-5 h-5 rounded-full bg-crm-bg border-2 border-crm-blue group-hover:bg-crm-blue group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.3)]"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
             <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-crm-blue transition-colors font-sans mb-1">{exp.role}</h3>
                <div className="text-crm-dim font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                   <Briefcase className="w-3 h-3" /> {exp.company}
                </div>
             </div>
             <div className="mt-2 sm:mt-0 flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-crm-blue">
                <Calendar className="w-3 h-3" />
                {exp.date}
             </div>
          </div>
          
          <ul className="space-y-3 text-gray-400 text-sm leading-relaxed max-w-2xl">
             {exp.desc.map((point, j) => (
                <li key={j} className="flex items-start gap-3 group/item">
                   <ChevronRight className="w-4 h-4 text-crm-dim group-hover/item:text-white transition-colors mt-0.5" />
                   <span className="group-hover/item:text-gray-300 transition-colors">{point}</span>
                </li>
             ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
