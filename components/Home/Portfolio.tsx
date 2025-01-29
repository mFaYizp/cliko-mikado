'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const images = [
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_1.webp', alt: 'Product 1' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_2.webp', alt: 'Product 2' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_3.webp', alt: 'Product 3' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_4.webp', alt: 'Product 4' }
];

const PortfolioSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const visibleImages = useRef<Array<{ index: number; timestamp: number }>>([]);
  const hideTimeoutsRef = useRef<{ [key: number]: NodeJS.Timeout }>({});

  useEffect(() => {
    const trails = trailsRef.current;
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container || trails.length === 0 || !cursor) return;

    // Initialize positions
    gsap.set(trails, {
      scale: 1,
      xPercent: -50,
      yPercent: -50,
      opacity: 0
    });

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0
    });

    const hideImage = (index: number) => {
      const trail = trails[index];
      if (trail) {
        gsap.to(trail, {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => {
            visibleImages.current = visibleImages.current.filter(img => img.index !== index);
            delete hideTimeoutsRef.current[index];
          }
        });
      }
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

      const distance = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);
      if (distance > 150) {
        lastPos.current = { x, y };
        
        const currentTrail = trails[currentIndex];
        if (currentTrail) {
          visibleImages.current = [
            ...visibleImages.current,
            { index: currentIndex, timestamp: Date.now() }
          ];
          
          gsap.fromTo(currentTrail,
            {
              x,
              y,
              opacity: 0,
              scale: 0.8
            },
            {
              x,
              y,
              opacity: 1,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
              overwrite: true
            }
          );

          scheduleHideForImage(currentIndex);
          setCurrentIndex((prev) => (prev + 1) % images.length);
        }
      }

      // Animate cursor
      gsap.to(cursor, {
        x,
        y,
        opacity: 1,
        duration: 0.15,
        ease: "none"
      });
    };

    const handleMouseLeave = () => {
      Object.values(hideTimeoutsRef.current).forEach(timeout => {
        clearTimeout(timeout);
      });

      visibleImages.current
        .sort((a, b) => a.timestamp - b.timestamp)
        .forEach((img, i) => {
          setTimeout(() => hideImage(img.index), i * 200);
        });

      gsap.to(cursor, {
        opacity: 0,
        duration: 0.2
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.2
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
      Object.values(hideTimeoutsRef.current).forEach(timeout => {
        clearTimeout(timeout);
      });
    };
  }, [currentIndex]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="absolute w-4 h-4  rounded-full pointer-events-none z-50 mix-blend-difference"
      />

      {/* Images Container */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            ref={el => {
              if (el) trailsRef.current[index] = el;
            }}
            className="absolute left-0 top-0 pointer-events-none"
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
              className="object-cover shadow-lg"
            />
          </div>
        ))}
      </div>

      <div className="relative z-40 h-full flex items-center justify-center">
        <h1 className="text-8xl font-bold text-white">PORTFOLIO</h1>
      </div>
    </section>
  );
};

export default PortfolioSection;
