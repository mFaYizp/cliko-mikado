'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

interface ImageItem {
  index: number;
  timestamp: number;
}

const images = [
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_1.webp', alt: 'Product 1' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_2.webp', alt: 'Product 2' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_3.webp', alt: 'Product 3' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_4.webp', alt: 'Product 4' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_1.webp', alt: 'Product 5' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_2.webp', alt: 'Product 6' },
];

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const PortfolioSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const visibleImages = useRef<Array<{ index: number; timestamp: number }>>([]);
  const hideTimeoutsRef = useRef<{ [key: number]: NodeJS.Timeout }>({});
  const moveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const trails = trailsRef.current;
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container || trails.length === 0 || !cursor) return;

    gsap.set(trails, { 
      scale: 1, 
      xPercent: -50, 
      yPercent: -50, 
      opacity: 0
    });
    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });

    const hideImage = (index: number) => {
      const trail = trails[index];
      if (trail) {
        gsap.to(trail, {
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            visibleImages.current = visibleImages.current.filter(img => img.index !== index);
            delete hideTimeoutsRef.current[index];
          }
        });
      }
    };

    const hideAllImages = () => {
      visibleImages.current
        .sort((a: ImageItem, b: ImageItem) => b.timestamp - a.timestamp)
        .forEach((img: ImageItem, i: number) => {
          setTimeout(() => {
            const trail = trails[img.index];
            if (trail) {
              gsap.to(trail, {
                opacity: 0,
                scale: 0.95,
                duration: 0.4,
                ease: 'power2.inOut',
                onComplete: () => {
                  visibleImages.current = visibleImages.current.filter(image => image.index !== img.index);
                  delete hideTimeoutsRef.current[img.index];
                }
              });
            }
          }, i * 100);
        });
    };

    const scheduleHideForImage = (index: number) => {
      if (hideTimeoutsRef.current[index]) {
        clearTimeout(hideTimeoutsRef.current[index]);
      }
      hideTimeoutsRef.current[index] = setTimeout(() => {
        hideImage(index);
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Clear previous timeout
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }

      // Set new timeout to hide images if movement stops
      moveTimeoutRef.current = setTimeout(() => {
        hideAllImages();
      }, 400);

      const distance = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);
      if (distance > 150) {
        lastPos.current = { x, y };

        const currentTrail = trails[currentIndex];
        if (currentTrail) {
          visibleImages.current = [...visibleImages.current, { index: currentIndex, timestamp: Date.now() }];
          
          gsap.set(currentTrail, { clipPath: 'circle(0% at center)' });
          gsap.fromTo(
            currentTrail,
            { 
              x, 
              y, 
              opacity: 0, 
              scale: 0.8,
              clipPath: 'circle(0% at center)' 
            },
            { 
              x, 
              y, 
              opacity: 1, 
              scale: 1,
              clipPath: 'circle(50% at center)',
              duration: 0.4, 
              ease: 'power2.out', 
              overwrite: true,
              onComplete: () => {
                gsap.set(currentTrail, { clipPath: 'none' });
              }
            }
          );

          scheduleHideForImage(currentIndex);
          setCurrentIndex(prev => (prev + 1) % images.length);
        }
      }

      gsap.to(cursor, { 
        x, 
        y, 
        opacity: 1, 
        duration: 0.15, 
        ease: 'none' 
      });
    };

    const handleMouseLeave = () => {
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      Object.values(hideTimeoutsRef.current).forEach(timeout => clearTimeout(timeout));
      visibleImages.current
        .sort((a: ImageItem, b: ImageItem) => b.timestamp - a.timestamp)
        .forEach((img: ImageItem, i: number) => {
          setTimeout(() => {
            const trail = trails[img.index];
            if (trail) {
              gsap.to(trail, {
                opacity: 0,
                scale: 0.95,
                duration: 0.4,
                ease: 'power2.inOut',
                onComplete: () => {
                  visibleImages.current = visibleImages.current.filter(image => image.index !== img.index);
                }
              });
            }
          }, i * 100);
        });
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
      Object.values(hideTimeoutsRef.current).forEach(timeout => clearTimeout(timeout));
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden hidden md:block">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="absolute w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference bg-white" 
      />

      {/* Images Container */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            ref={el => {
              if (el) trailsRef.current[index] = el;
            }}
            className="absolute left-0 top-0 pointer-events-none overflow-hidden"
            style={{ 
              zIndex: images.length - index, 
              opacity: 0
            }}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={350} 
              height={100} 
              className="object-cover shadow-lg rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Animated "PORTFOLIO" Text */}
      <div className="relative z-40 h-full flex items-center justify-center">
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white flex">
          {[...'PORTFOLIO'].map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
};

export default PortfolioSection;
