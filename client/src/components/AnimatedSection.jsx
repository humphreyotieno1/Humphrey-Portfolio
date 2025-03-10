import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

/**
 * AnimatedSection - A component that animates its children when they come into view
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to be animated
 * @param {Object} props.variants - Animation variants (optional)
 * @param {number} props.delay - Animation delay in seconds (optional)
 * @param {string} props.className - Additional CSS classes (optional)
 * @param {Object} props.style - Additional inline styles (optional)
 * @param {string} props.id - Element ID (optional)
 * @returns {JSX.Element} - The animated section component
 */
const AnimatedSection = ({ 
  children, 
  variants, 
  delay = 0, 
  className = '', 
  style = {}, 
  id = '',
  ...props 
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { 
    once: false,
    amount: 0.2 // Trigger when 20% of the element is in view
  });

  // Default animation variants
  const defaultVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: delay,
        ease: "easeOut" 
      }
    }
  };

  // Use provided variants or default ones
  const animationVariants = variants || defaultVariants;

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      className={className}
      style={style}
      id={id}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
