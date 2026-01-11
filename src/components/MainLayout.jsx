import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, Layout, Globe, Power } from 'lucide-react';
import AboutWing from './wings/AboutWing';
import CertsWing from './wings/CertsWing';
import ProjectsWing from './wings/ProjectsWing';
import ContactWing from './wings/ContactWing';
import LiveBackground from './LiveBackground';

const WINGS = [
  { id: 'about', label: 'PROFILE', icon: <User />, color: 'text-yellow-400', border: 'border-yellow-500/50', bg: 'bg-yellow-500/10', component: AboutWing },
  { id: 'certs', label: 'CERTIFICATIONS', icon: <Shield />, color: 'text-cyan-400', border: 'border-cyan-500/50', bg: 'bg-cyan-500/10', component: CertsWing },
  { id: 'projects', label: 'PROJECTS', icon: <Layout />, color: 'text-red-400', border: 'border-red-500/50', bg: 'bg-red-500/10', component: ProjectsWing },
  { id: 'contact', label: 'CONNECT', icon: <Globe />, color: 'text-purple-400', border: 'border-purple-500/50', bg: 'bg-purple-500/10', component: ContactWing },
];

const MainLayout = ({ children }) => {
  const [activeWing, setActiveWing] = useState('about');
  const activeConfig = WINGS.find(w => w.id === activeWing);
  const ActiveComponent = activeConfig.component;

  return (
    <div className="min-h-screen bg-[#030303] text-white font-mono overflow-hidden flex flex-col relative z-10">
      
      {/* Live Background */}
      <LiveBackground />
      
      {/* TOP BAR / CYBER TUBE */}
      <header className={`h-16 border-b ${activeConfig.border} bg-black/90 backdrop-blur-md flex items-center justify-between px-3 md:px-6 z-50 transition-colors duration-500`}>
        <div className="flex items-center gap-4">
           {/* Branding removed as per request */}
        </div>
        
        <div className="flex gap-1 md:gap-2">
           {WINGS.map(wing => (
              <button
                key={wing.id}
                onClick={() => setActiveWing(wing.id)}
                className={`flex items-center gap-2 px-2 md:px-4 py-1.5 rounded-sm border transition-all duration-300 ${activeWing === wing.id ? `${wing.border} ${wing.bg} ${wing.color}` : 'border-transparent text-gray-500 hover:text-white'}`}
              >
                 <span className="w-4 h-4">{wing.icon}</span>
                 <span className="text-xs hidden md:inline">{wing.label}</span>
              </button>
           ))}
        </div>

        <div className="flex items-center gap-4">
           <div className="text-right hidden sm:block">
              <div className="text-[10px] text-gray-400">STATUS</div>
              <div className="text-xs font-bold text-green-500">HIREABLE</div>
           </div>
           {/* <Power className="w-5 h-5 text-red-500 hover:text-red-400 cursor-pointer" /> */}
        </div>
      </header>
      
      {/* MAIN CONTENT AREA */}
      <main className="flex-1 relative p-6 overflow-y-auto custom-scrollbar z-20">
         
         <div className="relative z-10 max-w-7xl mx-auto h-full">
            <AnimatePresence mode='wait'>
               <motion.div
                  key={activeWing}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
               >
                  <ActiveComponent />
               </motion.div>
            </AnimatePresence>
         </div>
      </main>

    </div>
  );
};

export default MainLayout;
