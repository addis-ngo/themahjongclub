import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
  customPadding?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = "", 
  children, 
  dark = false, 
  customPadding = "py-20 md:py-32" 
}) => {
  return (
    <section 
      id={id} 
      className={`relative z-10 scroll-mt-24 ${customPadding} px-6 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;