import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img 
        src="/humlogo.png" 
        alt="Logo" 
        className="w-32 h-32 rounded-full mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1 }}
      />
      <motion.h1 
        className="text-white text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Dev Humphrey
      </motion.h1>
      <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <motion.p 
        className="text-white mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {progress}%
      </motion.p>
    </motion.div>
  );
};

export default SplashScreen;