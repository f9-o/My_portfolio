import { motion } from 'framer-motion';

const DigitalTwin = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {/* Outer Ring - Static Casing */}
      <div className="absolute inset-0 border-4 border-crm-dim/20 rounded-full"></div>
      
      {/* Rotating Ring - Magnetic Field */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 border-2 border-dashed border-crm-blue/30 rounded-full"
      />

      {/* Turbine Blades - The Active Part */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 bg-crm-panel/50 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden border border-crm-blue/50"
      >
         {/* Blades */}
         {[0, 60, 120, 180, 240, 300].map(deg => (
           <div 
             key={deg} 
             className="absolute w-1 h-full bg-crm-blue/20" 
             style={{ transform: `rotate(${deg}deg)` }} 
           />
         ))}
         <div className="w-4 h-4 bg-crm-blue rounded-full shadow-[0_0_20px_#00F0FF]"></div>
      </motion.div>

      {/* Status Indicators */}
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-2">
         <div className="bg-crm-panel border border-crm-green/50 px-2 py-1 text-[10px] font-mono text-crm-green">
           RPM: 3400
         </div>
         <div className="bg-crm-panel border border-crm-orange/50 px-2 py-1 text-[10px] font-mono text-crm-orange">
           PSI: 1042
         </div>
      </div>
      
      {/* Holographic Projection Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-transparent via-crm-blue/50 to-transparent"></div>
    </div>
  );
};

export default DigitalTwin;
