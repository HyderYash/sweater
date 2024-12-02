'use client';

import { motion } from 'framer-motion';
import Sweater from './components/Sweater';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    // Initialize audio with low volume and loop
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // 20% volume
      audioRef.current.play().catch(e => console.log('Audio autoplay failed:', e));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 relative overflow-hidden">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      {/* Snowfall */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && [...Array(100)].map((_, i) => {
          const size = Math.random() * 3 + 1; // Random size between 1-4px
          const startX = Math.random() * 100;
          const swayAmount = Math.random() * 30 + 20; // Random sway between 20-50px
          
          return (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: `${startX}vw`,
                y: -20,
                opacity: Math.random() * 0.4 + 0.4 // Random opacity between 0.4-0.8
              }}
              animate={{ 
                y: '100vh',
                x: [
                  `${startX}vw`,
                  `${startX + (Math.random() > 0.5 ? swayAmount : -swayAmount)/2}vw`,
                  `${startX}vw`,
                  `${startX - (Math.random() > 0.5 ? swayAmount : -swayAmount)/2}vw`,
                  `${startX}vw`
                ],
                opacity: [0.8, 0.6, 0.8, 0.6, 0.8]
              }}
              transition={{
                y: {
                  duration: Math.random() * 5 + 10, // Slower fall, between 10-15s
                  repeat: Infinity,
                  ease: 'linear'
                },
                x: {
                  duration: Math.random() * 4 + 6, // Sway duration between 6-10s
                  repeat: Infinity,
                  ease: 'easeInOut'
                },
                opacity: {
                  duration: Math.random() * 2 + 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }
              }}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: 'white',
                borderRadius: '50%',
                filter: 'blur(0.5px)',
                boxShadow: '0 0 2px rgba(255, 255, 255, 0.5)'
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <main className="container mx-auto px-4 py-8 flex flex-col items-center max-w-3xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-4"
          >
            <h1 className="text-5xl font-handwriting text-emerald-300 mb-3 drop-shadow-lg">
              Sweater Day! 💝
            </h1>
            <p className="text-xl font-handwriting text-emerald-200 italic">
              December 3rd, 2023
            </p>
          </motion.div>

          {/* Sweater Container with Enhanced Glow Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mb-4"
          >
            {/* Multiple layered glows for more intense effect */}
            <div className="absolute inset-0 bg-emerald-400 rounded-full filter blur-2xl opacity-10 animate-pulse scale-110" />
            <div className="absolute inset-0 bg-white rounded-full filter blur-xl opacity-5 animate-pulse scale-105" />
            <div className="absolute inset-0 bg-emerald-300 rounded-full filter blur-lg opacity-10 animate-glow" />
            <Sweater />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
