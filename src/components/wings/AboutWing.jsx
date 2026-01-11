import { useState, useEffect } from 'react';
import { User, Shield, Github, Linkedin, Twitter,  Download, Eye, Instagram, Cpu, Globe, Terminal, Activity } from 'lucide-react';
import { CERTIFICATES, PROFILE } from '../../data/certs';

const AboutWing = () => {
  const [bioText, setBioText] = useState("");
  const fullBio = "A developer driven by the V O I D. Specializing in building self-hosted, offline-first local infrastructures and innovative IoT ecosystems. Merging the logic of a Mechanical Technician with the creativity of a Full-Stack Engineer.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullBio.length) {
        setBioText((prev) => prev + fullBio.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-6 p-4">
       
       {/* 1. LEFT COLUMN: VISUAL IDENTITY & NEOFETCH (4 cols) */}
       <div className="lg:col-span-4 flex flex-col gap-6">
          {/* AVATAR FRAME */}
          <div className="relative mx-auto w-64 h-64 mt-4 mb-2 group">
             {/* Hexagon Clip Path & Border */}
             <div className="absolute inset-0 bg-cyan-500/20 clip-hexagon animate-pulse" />
             <div className="absolute inset-[2px] bg-[#030303] clip-hexagon z-10" />
             
             {/* Image */}
             <div className="absolute inset-[6px] clip-hexagon z-20 overflow-hidden">
                <img src={PROFILE.avatar || "https://github.com/f9-o.png"} alt="Faisal" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent" />
             </div>

             {/* Scanning Animation */}
             <div className="absolute inset-0 z-30 clip-hexagon pointer-events-none">
                <div className="w-full h-[2px] bg-cyan-400/80 shadow-[0_0_10px_#22d3ee] animate-scan top-0 absolute" />
             </div>
             
             {/* Status Indicator */}
             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-40 bg-black/80 border border-green-500/50 px-3 py-1 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-green-400 font-bold tracking-widest whitespace-nowrap">SYSTEM_ARCHITECT: ONLINE</span>
             </div>
          </div>

          {/* SOCIAL DOCK */}
          <div className="flex justify-center gap-4 py-2 border-y border-white/5 bg-black/20">
             <a href="https://github.com/f9-o" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
             <a href="https://x.com/if9s0" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
             <a href="https://instagram.com/92n_" target="_blank" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
             <a href="https://www.linkedin.com/in/faisal-f-alnumani-7a165b368" target="_blank" className="text-gray-500 hover:text-cyan-400 transition-colors shadow-none hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] rounded"><Linkedin className="w-5 h-5" /></a>
          </div>

          {/* NEOFETCH SPECS */}
          <div className="flex-1 bg-black/40 border border-white/10 p-4 font-mono text-xs text-gray-400 relative overflow-hidden group">
             <div className="absolute top-2 right-2 opacity-20"><Terminal className="w-4 h-4" /></div>
             <div className="text-cyan-500 font-bold mb-2">faisal@f9-void ~ neofetch</div>
             
             <div className="space-y-1 z-10 relative">
                <div><span className="text-purple-400">USER</span>: Faisal Al-numani</div>
                <div><span className="text-purple-400">RANK</span>: Senior Full-Stack Architect</div>
                <div><span className="text-purple-400">GRAD_YEAR</span>: 2023</div>
                <div><span className="text-purple-400">CERT_STATUS</span>: <span className="text-green-400">Verified</span> (Google/MS)</div>
                <div><span className="text-purple-400">STACK</span>: Next.js 15, TS, Python, C++</div>
                <div><span className="text-purple-400">SPECIALTIES</span>: Offline Cloud, Edge Computing</div>
             </div>
             
             {/* Faint Code Rain BG Simulator */}
             <div className="absolute inset-0 opacity-5 pointer-events-none text-[8px] leading-3 overflow-hidden select-none">
                {Array(20).fill("0101010011").map((bin, i) => (
                   <div key={i} className="animate-marquee">{bin} {bin} {bin}</div>
                ))}
             </div>
          </div>
       </div>


       {/* 2. RIGHT COLUMN: BIO & CREDENTIAL MATRIX (8 cols) */}
       <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* BIOMETRIC BIO */}
          <div className="bg-cyan-900/5 border border-cyan-500/20 p-6 relative">
             <Activity className="absolute top-4 right-4 w-5 h-5 text-cyan-500/50" />
             <h3 className="text-xs font-bold text-cyan-500 mb-2 tracking-[0.2em] border-b border-cyan-500/20 pb-2 inline-block">BIOMETRIC_SCAN_RESULT</h3>
             <p className="font-mono text-sm leading-relaxed text-gray-300 min-h-[60px]">
                {bioText}<span className="animate-pulse text-cyan-500">_</span>
             </p>
          </div>

          {/* CREDENTIAL MATRIX */}
          <div className="flex-1 flex flex-col">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                   <Shield className="w-4 h-4 text-green-500" /> 
                   CREDENTIAL MATRIX 
                   <span className="text-[10px] bg-green-900/30 text-green-400 px-2 py-0.5 rounded border border-green-500/30">12 VERIFIED</span>
                </h3>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 overflow-y-auto max-h-[400px] custom-scrollbar pr-2">
                {CERTIFICATES.map((cert) => (
                   <div key={cert.id} className="group relative bg-black/50 border border-white/10 hover:border-cyan-500/50 transition-all p-3 rounded flex flex-col items-center text-center">
                      {/* Badge Image */}
                      <div className="w-12 h-12 mb-2 relative">
                         <img src={cert.image} alt="Badge" className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                      </div>
                      
                      <div className="text-[10px] font-bold text-gray-400 group-hover:text-white line-clamp-2 min-h-[30px]">{cert.title}</div>
                      <div className="text-[8px] text-gray-600 font-mono mt-1">{cert.issuer}</div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 z-20 backdrop-blur-sm">
                         <div className="text-[9px] text-cyan-500 font-mono mb-1">ID: {cert.id.split('-')[1] || 'VERIFIED'}</div>
                         <a href={cert.verifyUrl} target="_blank" className="bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400 text-[10px] px-3 py-1 rounded border border-cyan-500/50 flex items-center gap-1 transition-colors">
                            VIEW <ExternalLinkIcon className="w-2 h-2" />
                         </a>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          
          {/* ACTIONS REMOVED AS PER REQUEST */}
       </div>
    </div>
  );
};

/* Helper for the hover icon */
const ExternalLinkIcon = ({className}) => (
   <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
   </svg>
);

export default AboutWing;
