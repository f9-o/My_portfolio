import { Shield, Lock } from 'lucide-react';
import { CERTIFICATES } from '../../data/certs';

const CertsWing = () => {
  return (
    <div className="h-full flex flex-col">
       <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
             <Shield className="w-6 h-6" /> CERTIFICATION VAULT
          </h2>
          <div className="text-xs font-mono text-gray-500">
             TOTAL VERIFIED: <span className="text-white">{CERTIFICATES.length}</span>
          </div>
       </div>

       <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {CERTIFICATES.map((cert) => (
                <a key={cert.id} href={cert.verifyUrl} target="_blank" className="bg-cyan-900/10 border border-cyan-500/30 rounded-lg overflow-hidden hover:bg-cyan-500/10 hover:border-cyan-400/60 transition-all group">
                   <div className="h-32 bg-black/50 relative overflow-hidden">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                      <div className="absolute top-2 right-2 bg-black/80 text-[10px] px-2 py-0.5 rounded text-cyan-400 border border-cyan-500/30">
                         {cert.issuer}
                      </div>
                   </div>
                   
                   <div className="p-4">
                      <h3 className="font-bold text-white text-sm mb-1 line-clamp-1 group-hover:text-cyan-300 transition-colors">{cert.title}</h3>
                      <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono">
                         <span>{cert.date}</span>
                         <span className="flex items-center gap-1 group-hover:text-cyan-400">VERIFY <Lock className="w-3 h-3" /></span>
                      </div>
                   </div>
                </a>
             ))}
          </div>
       </div>
    </div>
  );
};

export default CertsWing;
