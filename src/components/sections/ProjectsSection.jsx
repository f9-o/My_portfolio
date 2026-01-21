import { Github, ExternalLink, Terminal, Shield, Activity, Globe, Package, Cpu, Database } from 'lucide-react';

const REPOS = [
  {
    name: "SAP-Project",
    desc: "Digital Twin platform for industrial pumping systems (V1.0). Real-time hydraulic simulation.",
    tech: ["SCADA", "IoT", "Digital Twin"],
    result: "Real-time industrial monitoring.",
    demo: "https://sap-project.streamlit.app/"
  },
  {
    name: "NPPCS",
    desc: "Sentinel is a bilingual predictive system (English/Arabic) for real-time data integration.",
    tech: ["Predictive Models", "Full Stack"],
    result: "Data-driven decision support.",
    demo: "https://nppcs-system.onrender.com/"
  },
  {
    name: "pykit-dev",
    desc: "🌟 MY FIRST PYTHON LIBRARY. A professional toolkit for DevOps automation.",
    tech: ["Python", "PyPI", "DevOps"],
    result: "Standardizes scripts across environments.",
    badge: "1st LIBRARY 📦",
    link: "https://github.com/f9-o/pykit-dev"
  },
  {
    name: "OccupyBed-Ai",
    desc: "Smart hospital command center powered by AI for real-time bed tracking.",
    tech: ["AI", "Predictive Analytics"],
    result: "Optimizes hospital resource allocation.",
    demo: "https://occupybed-ai.streamlit.app/"
  },
  {
    name: "IoT-Audit-Pro",
    desc: "A professional, self-hosted IoT security auditing tool.",
    tech: ["Python", "React", "Docker"],
    result: "Automated vulnerability detection for IoT devices."
  },
  {
    name: "SecuLog",
    desc: "A simple yet powerful web server log analyzer for threat detection.",
    tech: ["Python", "Log Analysis", "Threat Hunting"],
    result: "Rapid identification of malicious access patterns."
  },
  {
    name: "Research_Dashboard",
    desc: "Enterprise-grade analytics dashboard for tracking KPIs and visualizing impact factors.",
    tech: ["Streamlit", "Plotly", "Data Science"],
    result: "Interactive data storytelling for decision makers."
  },
  {
    name: "Absher_insight",
    desc: "AI Assistant & Offline Wallet for streamlined document management and services.",
    tech: ["AI", "Offline First", "Automation"],
    result: "Secure, accessible document handling."
  },
  {
    name: "Falcon-toolkit",
    desc: "Comprehensive offensive security toolkit for red-teaming operations.",
    tech: ["Python", "Exploit Dev"],
    result: "Centralizes multiple attack vectors."
  }
  // Excluded: F9-o, My_portfolio
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-20 bg-[#030303]">
      <div className="max-w-6xl mx-auto">
         <h2 className="text-3xl font-bold text-white mb-12 border-l-4 border-red-500 pl-4 flex items-center gap-3">
           <Terminal className="w-8 h-8 text-red-500" />
           PROJECTS / TOOLS SHOWCASE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPOS.map((repo, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0a0a0f] border border-gray-800 p-6 rounded-xl flex flex-col transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.15)] hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <a href={repo.link || `https://github.com/f9-o/${repo.name}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-200 group-hover:text-white transition-colors">
                  <Shield className="w-5 h-5 text-red-500" />
                  <span className="text-lg font-bold tracking-tight">{repo.name}</span>
                </a>
                
                {repo.demo ? (
                  <a 
                    href={repo.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-bold hover:bg-red-500 hover:text-white transition-all animate-pulse hover:animate-none"
                  >
                    <Globe className="w-3 h-3" />
                    LIVE SYSTEM
                  </a>
                ) : repo.badge ? (
                   <span className="flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-xs font-bold">
                     <Package className="w-3 h-3" />
                     {repo.badge}
                   </span>
                ) : null}
              </div>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed border-b border-gray-900 pb-4">
                {repo.desc}
              </p>

              <div className="mb-6 flex-1">
                 <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-3 h-3 text-gray-500" />
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Impact</p>
                 </div>
                 <p className="text-gray-300 text-xs font-mono pl-3 border-l-2 border-gray-800">
                    {repo.result}
                 </p>
              </div>
              
              <div className="mt-auto flex flex-wrap gap-2">
                 {repo.tech.map((t, i) => (
                   <span key={i} className="text-[10px] font-mono bg-black text-gray-500 px-2 py-1 rounded border border-gray-800 group-hover:border-gray-700 transition-colors">
                     {t}
                   </span>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
