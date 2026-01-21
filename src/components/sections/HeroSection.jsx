import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 pb-10 relative overflow-hidden">
      
      {/* Profile Image Container */}
      <div className="relative mb-10 group">
        {/* Animated Glow Ring (CSS only, lightweight) */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-cyan rounded-full blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse" />
        
        {/* Image Frame */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-[#030303] border border-gray-800 ring-1 ring-white/10 overflow-hidden">
           <img 
             src="https://github.com/f9-o.png" 
             alt="Faisal Al-Nuaimany" 
             className="w-full h-full rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
           />
        </div>
      </div>

      <div className="z-10 max-w-4xl relative">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          FAISAL ALNUMANI
        </h1>
        
        <p className="text-xl md:text-2xl text-neon-cyan font-mono mb-10 tracking-widest opacity-90">
          &lt;F9o /&gt;
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-mono text-gray-400 border-t border-gray-800/60 pt-8 mt-2 mx-auto max-w-3xl">
          <span className="px-4 py-1.5 bg-gray-900/30 rounded border border-gray-800 text-neon-cyan hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all cursor-default">
            DevOps Engineer
          </span>
          <span className="px-4 py-1.5 bg-gray-900/30 rounded border border-gray-800 text-purple-400 hover:border-purple-400/40 hover:bg-purple-400/5 transition-all cursor-default">
            Security Tooling & Automation
          </span>
          <span className="px-4 py-1.5 bg-gray-900/30 rounded border border-gray-800 text-yellow-400 hover:border-yellow-400/40 hover:bg-yellow-400/5 transition-all cursor-default">
            Software • IoT • Edge Systems
          </span>
        </div>
      </div>
      
      {/* Subtle Background Decor - Lightweight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none z-0" />
    </section>
  );
};

export default HeroSection;
