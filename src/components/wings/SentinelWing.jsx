import { Shield, Lock, Search, AlertTriangle, Key } from 'lucide-react';
import { motion } from 'framer-motion';
import { CERTIFICATES, PROFILE } from '../../data/certs';

const SentinelWing = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      
      {/* 1. IDENTITY MATRIX (VERIFICATION VAULT) */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-cyan-900/10 border border-cyan-500/30 p-6 rounded-lg relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-20"><Shield className="w-16 h-16 text-cyan-400" /></div>
           <h2 className="text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
             <Lock className="w-5 h-5" /> IDENTITY MATRIX
           </h2>
           <div className="space-y-4">
              <div className="text-sm text-cyan-300/80 font-mono">
                 <div>ID: {PROFILE.id}</div>
                 <div>CLEARANCE: <span className="text-red-400">{PROFILE.clearance}</span></div>
                 <div>AUTHOR: {PROFILE.name}</div>
              </div>
              
              <div className="space-y-4 mt-4 h-[calc(100vh-300px)] overflow-y-auto pr-2 custom-scrollbar">
                 <h3 className="text-xs tracking-widest text-gray-500 border-b border-gray-800 pb-1">CERTIFIED PROTOCOLS</h3>
                 {CERTIFICATES.map((cert) => (
                    <a key={cert.id} href={cert.verifyUrl} target="_blank" className="block bg-black/40 border border-cyan-900/50 p-3 hover:border-cyan-400/50 transition-colors group relative overflow-hidden rounded-md">
                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="flex gap-4 items-start">
                          <div className="w-16 h-12 bg-gray-900 rounded overflow-hidden flex-shrink-0 border border-white/10">
                             <img src={cert.image} alt="cert" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div>
                             <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-gray-300 group-hover:text-cyan-300 transition-colors">{cert.title}</span>
                                <Shield className="w-3 h-3 text-cyan-600 group-hover:text-cyan-400" />
                             </div>
                             <div className="flex flex-col mt-1 text-[10px] text-gray-600 font-mono">
                                <span>ISSUER: {cert.issuer}</span>
                                <span>DATE: {cert.date}</span>
                             </div>
                          </div>
                       </div>
                    </a>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* 2. THREAT RADAR */}
      <div className="lg:col-span-2 flex flex-col gap-6">
         <div className="flex-1 bg-black/40 border border-cyan-500/20 p-4 relative rounded-lg flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-0.5 opacity-20">
               {[...Array(72)].map((_, i) => <div key={i} className="bg-cyan-500/10" />)}
            </div>
            
            {/* Radar Animation */}
            <div className="relative w-64 h-64 border border-cyan-500/30 rounded-full flex items-center justify-center">
               <div className="w-full h-full absolute animate-[spin_4s_linear_infinite] border-t-2 border-cyan-500 rounded-full shadow-[0_0_20px_#06b6d4]" />
               <div className="w-48 h-48 border border-cyan-500/20 rounded-full" />
               <div className="w-32 h-32 border border-cyan-500/20 rounded-full" />
               <div className="w-2 h-2 bg-red-500 rounded-full absolute top-10 right-20 animate-pulse" />
               <div className="w-2 h-2 bg-yellow-500 rounded-full absolute bottom-14 left-10 animate-pulse delay-75" />
            </div>

            <div className="absolute top-4 left-4 text-xs font-mono text-cyan-500">
               ACTIVE THREAT SCANNING...
               <br/>
               <span className="text-white">NO ANOMALIES DETECTED.</span>
            </div>
         </div>

         {/* 3. TOOLS */}
         <div className="h-40 grid grid-cols-2 gap-4">
            <div className="bg-cyan-900/10 border border-cyan-500/20 p-4 hover:bg-cyan-500/10 transition-colors cursor-pointer group">
               <div className="flex items-center gap-3 mb-2">
                  <Search className="w-5 h-5 text-cyan-400 group-hover:animate-bounce" />
                  <span className="font-bold text-sm">VULNERABILITY AUDITOR</span>
               </div>
               <p className="text-xs text-gray-500">Scan code snippets against OWASP Top 10 database.</p>
            </div>
            <div className="bg-cyan-900/10 border border-cyan-500/20 p-4 hover:bg-cyan-500/10 transition-colors cursor-pointer group">
               <div className="flex items-center gap-3 mb-2">
                   <Key className="w-5 h-5 text-cyan-400 group-hover:rotate-45 transition-transform" />
                   <span className="font-bold text-sm">ENTROPY PASS-GEN</span>
               </div>
               <p className="text-xs text-gray-500">Generate crypto-safe keys using chaos theory logic.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SentinelWing;
