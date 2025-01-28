'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_1.webp', alt: 'Product 1' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_2.webp', alt: 'Product 2' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_3.webp', alt: 'Product 3' },
  { src: 'https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/5_Portfolio/hover_4.webp', alt: 'Product 4' }
];

const PortfolioSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;

    // Update mouse position
    setMousePosition({ x: clientX, y: clientY });

    // Update to the next image in the array
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section
      className="relative flex items-center justify-center h-screen bg-black text-white"
      onMouseMove={handleMouseMove} // Trigger image change on mouse move
    >
      <h1 className="text-6xl font-bold z-10">PORTFOLIO</h1>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Display only the current image */}
        <div
          className="absolute transition-all duration-300"
          style={{
            left: `${mousePosition.x}px`, // Position the image dynamically
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)', // Center the image at the cursor
            pointerEvents: 'none', // Prevent blocking mouse events
          }}
        >
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            width={200}
            height={150}
            className="object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
