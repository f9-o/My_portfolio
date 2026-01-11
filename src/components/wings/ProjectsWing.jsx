import { Layout, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: "SAP: Autonomous Smart Pump",
    desc: "Self-diagnosing industrial pump system using Edge AI for predictive maintenance.",
    link: "https://sap-project.streamlit.app/",
    tags: ["IoT", "Edge AI", "Streamlit"],
    color: "text-red-400",
    border: "border-red-500/30",
    hover: "hover:bg-red-500/10"
  },
  {
    title: "NPPCS Industrial Monitor",
    desc: "Real-time dashboard for industrial pressure systems with live SCADA visualization.",
    link: "https://nppcs-system.onrender.com",
    tags: ["React", "Node.js", "WebSockets"],
    color: "text-blue-400",
    border: "border-blue-500/30",
    hover: "hover:bg-blue-500/10"
  },
  {
    title: "OccupyBed AI",
    desc: "Computer vision system for automated hospital bed occupancy detection.",
    link: "https://occupybed-ai.streamlit.app/",
    tags: ["CV", "Python", "Automation"],
    color: "text-purple-400",
    border: "border-purple-500/30",
    hover: "hover:bg-purple-500/10"
  },
  {
    title: "F9 Developer Tools",
    desc: "Suite of specialized utilities for rapid prototyping and deployment.",
    link: "https://f9-tools.netlify.app/",
    tags: ["DevOps", "Utility", "React"],
    color: "text-green-400",
    border: "border-green-500/30",
    hover: "hover:bg-green-500/10"
  }
];

const ProjectsWing = () => {
  return (
    <div className="h-full flex flex-col">
       <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-red-400 flex items-center gap-2">
             <Layout className="w-6 h-6" /> PROJECT DEPLOYMENTS
          </h2>
       </div>

       <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {PROJECTS.map((p, i) => (
                <a key={i} href={p.link} target="_blank" className={`bg-black/40 border ${p.border} p-6 rounded-lg ${p.hover} transition-all group relative overflow-hidden flex flex-col h-[200px]`}>
                   <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Layout className="w-32 h-32" />
                   </div>
                   
                   <div className="mb-auto relative z-10">
                      <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${p.color}`}>
                         {p.title} <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed max-w-[90%]">{p.desc}</p>
                   </div>
                   
                   <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                      {p.tags.map(tag => (
                         <span key={tag} className="text-[10px] uppercase border border-white/10 px-2 py-1 rounded text-gray-500 font-mono bg-black/50">
                            {tag}
                         </span>
                      ))}
                   </div>
                </a>
             ))}
          </div>
       </div>
    </div>
  );
};

export default ProjectsWing;
