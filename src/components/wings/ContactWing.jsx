import { Mail, Github, Linkedin, Globe } from 'lucide-react';

const ContactWing = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
       <div className="max-w-2xl w-full bg-purple-900/10 border border-purple-500/30 p-8 rounded-lg text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
          
          <h2 className="text-3xl font-bold text-white mb-2">INITIATE CONNECTION</h2>
          <p className="text-purple-300/60 font-mono text-sm mb-10">OPEN FOR COLLABORATIONS & SYSTEMS ENGINEERING</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="mailto:f9o.con@hotmail.com" className="flex items-center gap-4 bg-black/40 border border-purple-500/20 p-4 rounded hover:bg-purple-500/20 hover:border-purple-500/50 transition-all group">
                <div className="p-3 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors">
                   <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                   <div className="text-[10px] text-gray-500">EMAIL</div>
                   <div className="text-sm font-bold text-gray-200">f9o.con@hotmail.com</div>
                </div>
             </a>

             <a href="https://github.com/f9-o" target="_blank" className="flex items-center gap-4 bg-black/40 border border-purple-500/20 p-4 rounded hover:bg-purple-500/20 hover:border-purple-500/50 transition-all group">
                <div className="p-3 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors">
                   <Github className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                   <div className="text-[10px] text-gray-500">GITHUB</div>
                   <div className="text-sm font-bold text-gray-200">@f9-o</div>
                </div>
             </a>

             <a href="https://www.linkedin.com/in/faisal-f-alnumani-7a165b368" target="_blank" className="flex items-center gap-4 bg-black/40 border border-purple-500/20 p-4 rounded hover:bg-purple-500/20 hover:border-purple-500/50 transition-all group">
                <div className="p-3 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors">
                   <Linkedin className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                   <div className="text-[10px] text-gray-500">LINKEDIN</div>
                   <div className="text-sm font-bold text-gray-200">Faisal Al-numani</div>
                </div>
             </a>
             
             <a href="https://x.com/if9s0" target="_blank" className="flex items-center gap-4 bg-black/40 border border-purple-500/20 p-4 rounded hover:bg-purple-500/20 hover:border-purple-500/50 transition-all group">
                <div className="p-3 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors">
                   <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                   <div className="text-[10px] text-gray-500">SOCIAL X</div>
                   <div className="text-sm font-bold text-gray-200">@if9s0</div>
                </div>
             </a>
          </div>
       </div>
    </div>
  );
};

export default ContactWing;
