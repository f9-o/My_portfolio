import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, Globe, Mail, FileText, ExternalLink } from 'lucide-react';

const CommandPalette = ({ isOpen, onClose, t }) => {
  const [query, setQuery] = useState('');
  
  // Commands List
  const commands = [
    { id: 'about', label: t.about || 'About', icon: <Terminal className="w-4 h-4" />, action: () => window.location.href = '#about' },
    { id: 'experience', label: t.experience || 'Experience', icon: <FileText className="w-4 h-4" />, action: () => window.location.href = '#experience' },
    { id: 'skills', label: t.skills || 'Skills', icon: <Terminal className="w-4 h-4" />, action: () => window.location.href = '#skills' },
    { id: 'projects', label: t.projects || 'Projects', icon: <Search className="w-4 h-4" />, action: () => window.location.href = '#projects' },
    // { id: 'education', label: t.education || 'Education', icon: <FileText className="w-4 h-4" />, action: () => window.location.href = '#education' },
    { id: 'contact', label: t.contact || 'Contact', icon: <Mail className="w-4 h-4" />, action: () => window.location.href = '#contact' },
    { id: 'github', label: 'GitHub Profile', icon: <Globe className="w-4 h-4" />, action: () => window.open('https://github.com/f9-o', '_blank') },
  ];

  const filtered = commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-lg bg-crm-panel border border-crm-blue/30 shadow-[0_0_50px_rgba(0,240,255,0.1)] rounded-lg overflow-hidden relative z-10"
          >
             <div className="flex items-center gap-3 px-4 py-3 border-b border-crm-border">
                <Search className="w-5 h-5 text-crm-dim" />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Type a command..." 
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-crm-dim"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                <span className="text-[10px] text-crm-dim border border-crm-dim/30 px-1.5 rounded">ESC</span>
             </div>
             <div className="py-2">
                {filtered.map((cmd, i) => (
                   <button 
                     key={cmd.id} 
                     onClick={() => { cmd.action(); onClose(); }}
                     className={`w-full text-left px-4 py-3 flex items-center justify-between hover:bg-crm-blue/10 group transition-colors ${i === 0 ? 'bg-crm-blue/5' : ''}`}
                   >
                     <div className="flex items-center gap-3">
                        <span className="text-crm-dim group-hover:text-crm-blue transition-colors">{cmd.icon}</span>
                        <span className="text-gray-300 font-mono group-hover:text-white">{cmd.label}</span>
                     </div>
                     <ExternalLink className="w-3 h-3 text-crm-dim opacity-0 group-hover:opacity-100 transition-opacity" />
                   </button>
                ))}
             </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
