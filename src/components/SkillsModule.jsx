import { motion } from 'framer-motion';
import { Cpu, Code, Database, Globe, Layers, Wind } from 'lucide-react';

const SKILLS = [
  { category: "CORE_ENG", icon: <Wind className="w-4 h-4 text-crm-orange" />, items: ["Thermodynamics", "Fluid Mechanics", "CAD/SolidWorks", "Control Systems"] },
  { category: "SOFTWARE_STACK", icon: <Code className="w-4 h-4 text-crm-blue" />, items: ["Python", "JavaScript/TypeScript", "React.js", "C++", "Node.js"] },
  { category: "EDGE_IOT", icon: <Cpu className="w-4 h-4 text-crm-green" />, items: ["Raspberry Pi", "ESP32", "MQTT", "Industrial Protocols"] },
  { category: "CLOUD_DEVOPS", icon: <Database className="w-4 h-4 text-purple-400" />, items: ["Docker", "Vercel", "Supabase", "Git/CI-CD"] },
];

const SkillsModule = ({ t }) => {
  return (
    <div className="bg-crm-panel border border-white/5 p-6 h-full relative overflow-hidden group">
       <div className="absolute top-0 right-0 p-2 opacity-20">
          <Layers className="w-24 h-24 stroke-1" />
       </div>
       
       <div className="flex items-center gap-2 mb-6 text-white font-bold tracking-wider border-b border-white/10 pb-2">
          <Cpu className="w-5 h-5 text-crm-blue" />
          <span>SYSTEM CAPABILITIES (SKILLS)</span>
       </div>

       <div className="space-y-6 relative z-10">
          {SKILLS.map((skill, i) => (
             <div key={i}>
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-crm-dim">
                   {skill.icon}
                   <span>{skill.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                   {skill.items.map(item => (
                      <span key={item} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[11px] text-gray-300 font-mono hover:bg-white/10 hover:border-crm-blue/30 transition-colors">
                         {item}
                      </span>
                   ))}
                </div>
             </div>
          ))}
       </div>
    </div>
  );
};

export default SkillsModule;
