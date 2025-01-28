'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
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
  const timeoutRef = useRef<NodeJS.Timeout>();

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
      clipPath: 'circle(0% at center)'
    });

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Animate cursor
      gsap.to(cursor, {
        x: x,
        y: y,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out"
      });

      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Show and position all trails
      trails.forEach((trail, index) => {
        gsap.to(trail, {
          x: x,
          y: y,
          clipPath: 'circle(100% at center)',
          duration: 0.4,
          ease: "power2.out",
          delay: index * 0.08
        });
      });

      // Set timeout to hide trails
      timeoutRef.current = setTimeout(() => {
        gsap.to(trails, {
          clipPath: 'circle(0% at center)',
          duration: 0.9,
          stagger: 0.08,
          ease: "power2.inOut"
        });
      }, 200);
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, ...trails], {
        clipPath: 'circle(0% at center)',
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.inOut"
      });
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.2
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="absolute w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
      />

      {/* Trail Container */}
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
              clipPath: 'circle(0% at center)'
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
