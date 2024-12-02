'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Sweater() {
  return (
    <motion.div
      className="relative w-[300px] h-[360px] mx-auto flex items-center justify-center"
      animate={{
        rotate: [-0.5, 0.5, -0.5],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <Image
        src="/sweater.png"
        alt="Cozy green sweater"
        width={250}
        height={300}
        className="object-contain"
        priority
      />
    </motion.div>
  );
}
