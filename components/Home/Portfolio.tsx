'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_1.webp', alt: 'Product 1' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_2.webp', alt: 'Product 2' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_3.webp', alt: 'Product 3' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_4.webp', alt: 'Product 4' }
];

const PortfolioSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [animationIndex, setAnimationIndex] = useState(0);

  let mouseMoveTimeout: NodeJS.Timeout;

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
    setIsMouseMoving(true);

    // Clear the previous timeout and set a new one
    clearTimeout(mouseMoveTimeout);
    mouseMoveTimeout = setTimeout(() => {
      setIsMouseMoving(false); // Stop showing images when the mouse stops moving
    }, 200); // Adjust delay for responsiveness
  };

  useEffect(() => {
    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseMoveTimeout); // Clean up the timeout
    };
  }, []);

  useEffect(() => {
    // Trigger each image's animation one after another
    if (isMouseMoving) {
      const timer = setInterval(() => {
        setAnimationIndex((prev) => (prev + 1) % images.length);
      }, 500); // Delay between each animation

      return () => clearInterval(timer);
    }
  }, [isMouseMoving]);

  return (
    <section className="relative flex items-center justify-center h-screen bg-black text-white">
      <h1 className="text-6xl font-bold z-10">PORTFOLIO</h1>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Image Container */}
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute transition-all duration-500"
            style={{
              left: `${mousePosition.x + (index * 80)}px`, // Adjust the offset between images horizontally
              top: `${mousePosition.y + (index * 60)}px`, // Adjust the offset between images vertically
              transform: 'translate(-50%, -50%)', // Keep images centered around the cursor
              pointerEvents: 'none', // Avoid blocking mouse events
              opacity: isMouseMoving && animationIndex >= index ? 1 : 0, // Show images only when the mouse is moving
              transition: 'opacity 0.3s ease, transform 0.5s ease', // Smooth transition for position and opacity
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={200}
              height={150}
              className="object-cover shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
