import { Terminal, Code, Cpu, ExternalLink, Layers, Layout } from 'lucide-react';

const PROJECTS = [
  {
    title: "SAP: Autonomous Smart Pump",
    desc: "Self-diagnosing industrial pump system using Edge AI for predictive maintenance.",
    link: "https://sap-project.streamlit.app/",
    tags: ["IoT", "Edge AI", "Streamlit"],
    color: "text-red-400"
  },
  {
    title: "NPPCS Industrial Monitor",
    desc: "Real-time dashboard for industrial pressure systems with live SCADA visualization.",
    link: "https://nppcs-system.onrender.com",
    tags: ["React", "Node.js", "WebSockets"],
    color: "text-blue-400"
  },
  {
    title: "OccupyBed AI",
    desc: "Computer vision system for automated hospital bed occupancy detection.",
    link: "https://occupybed-ai.streamlit.app/",
    tags: ["CV", "Python", "Automation"],
    color: "text-purple-400"
  },
  {
    title: "F9 Developer Tools",
    desc: "Suite of specialized utilities for rapid prototyping and deployment.",
    link: "https://f9-tools.netlify.app/",
    tags: ["DevOps", "Utility", "React"],
    color: "text-green-400"
  }
];

const ForgeWing = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
       {/* 1. PROJECT TERMINAL / CLI */}
       <div className="bg-black/80 border border-red-500/30 rounded-lg flex flex-col font-mono text-sm h-[400px] lg:h-auto shadow-[0_0_30px_rgba(239,68,68,0.1)]">
          <div className="bg-red-900/20 border-b border-red-500/20 p-2 flex items-center gap-2">
             <Terminal className="w-4 h-4 text-red-500" />
             <span className="text-red-400 text-xs font-bold">PROJECT_DEPLOYMENT_LOGS</span>
          </div>
          <div className="flex-1 p-4 text-gray-300 space-y-2 overflow-y-auto custom-scrollbar">
             {PROJECTS.map((p, i) => (
                <div key={i} className="mb-4">
                   <div><span className="text-green-500">deploy@faisal</span>:<span className="text-blue-500">~/projects</span>$ ./launch {p.title.split(' ')[0].toLowerCase()}.sh</div>
                   <div className="text-gray-500 text-xs pl-2">> Initializing {p.tags.join(', ')} sequence...</div>
                   <div className="text-white text-xs pl-2">> STATUS: <span className="text-green-400">ONLINE</span> ({p.link})</div>
                </div>
             ))}
             <div><span className="text-green-500">deploy@faisal</span>:<span className="text-blue-500">~/projects</span>$ <span className="animate-pulse">_</span></div>
          </div>
       </div>

       {/* 2. PROJECT CARDS */}
       <div className="space-y-4 h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
          {PROJECTS.map((p, i) => (
             <a key={i} href={p.link} target="_blank" className="block bg-red-900/5 border border-red-500/20 p-5 rounded-lg hover:bg-red-500/10 hover:border-red-500/50 transition-all group relative overflow-hidden">
                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Layout className="w-24 h-24" />
                </div>
                
                <h3 className={`text-lg font-bold mb-1 flex items-center gap-2 ${p.color}`}>
                   {p.title} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-gray-400 mb-3 max-w-[90%]">{p.desc}</p>
                
                <div className="flex gap-2">
                   {p.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase border border-white/10 px-2 py-1 rounded text-gray-500 font-mono">
                         {tag}
                      </span>
                   ))}
                </div>
             </a>
          ))}
       </div>
    </div>
  );
};

export default ForgeWing;
