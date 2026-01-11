import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BootSequence from './components/BootSequence';
import MainLayout from './components/MainLayout';
import Cursor from './components/Cursor';
import './index.css';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <Cursor />
      <AnimatePresence mode="wait">
        {!booted ? (
          <BootSequence onComplete={() => setBooted(true)} />
        ) : (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <MainLayout />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
