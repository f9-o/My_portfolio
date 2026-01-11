import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BootSequence = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const hasCompletedRef = useRef(false);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const sequence = [
      { text: "INITIALIZING FAISAL_OS v2.0...", delay: 200 },
      { text: "> LOADING PROFILE DATA...", delay: 800 },
      { text: "> VERIFYING CREDENTIALS (GOOGLE/MICROSOFT)... [OK]", delay: 1400 },
      { text: "> MOUNTING PROFESSIONAL EXPERIENCE...", delay: 2000 },
      { text: "> ESTABLISHING SECURE CONNECTION...", delay: 2600 },
      { text: "WELCOME, VISITOR.", delay: 3200 }
    ];

    let startTime = Date.now();

    const processSequence = () => {
      sequence.forEach((item, index) => {
        const timeout = setTimeout(() => {
          setLogs(prev => [...prev, item.text]);
          
          // Check if this is the last item
          if (index === sequence.length - 1) {
             const finishTimeout = setTimeout(() => {
               if (!hasCompletedRef.current) {
                 hasCompletedRef.current = true;
                 onComplete();
               }
             }, 800);
             timeoutsRef.current.push(finishTimeout);
          }
        }, item.delay);
        timeoutsRef.current.push(timeout);
      });
    };

    processSequence();

    // Cleanup function
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-[#030303] text-green-500 font-mono p-4 md:p-10 z-[100] flex flex-col justify-end pb-20 overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      
      <div className="max-w-3xl relative z-10 font-bold text-sm md:text-base leading-relaxed">
        {logs.map((log, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-2"
          >
            <span className="text-gray-600 mr-2 text-xs">[{new Date().toLocaleTimeString()}]</span>
            {log}
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-3 h-5 bg-green-500 mt-2 inline-block"
        />
      </div>
    </motion.div>
  );
};

export default BootSequence;
