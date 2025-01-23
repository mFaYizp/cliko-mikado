import React, { useRef, useEffect, useState } from "react";

const ImageScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/01.webp", 
    "/images/02.webp",
    "/images/03.webp",
    "/images/04.webp",
    "/images/05.webp",
    "/images/06.webp",
    "/images/07.webp",
    "/images/08.webp",
    "/images/09.webp",
    "/images/010.webp",
    "/images/011.webp",
    "/images/012.webp",
    "/images/013.webp",
    "/images/014.webp",
    "/images/015.webp",
    "/images/016.webp",
    "/images/017.webp",
    "/images/018.webp",
    "/images/019.webp",
    "/images/020.webp",
    "/images/021.webp",
    "/images/022.webp",
    "/images/023.webp",
    "/images/024.webp",
    "/images/025.webp",
    "/images/026.webp",
    "/images/027.webp",
    "/images/028.webp",
    "/images/029.webp",
    "/images/030.webp",
    "/images/031.webp",
    "/images/032.webp",
    "/images/033.webp",
    "/images/034.webp",
    "/images/035.webp",
    "/images/036.webp",
    "/images/037.webp",
    "/images/038.webp",
    "/images/039.webp",
    "/images/040.webp",
    "/images/041.webp",
    "/images/042.webp",
    "/images/043.webp",
    "/images/044.webp",
    "/images/045.webp",
    "/images/046.webp",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { scrollTop } = containerRef.current;

      const sectionHeight = window.innerHeight; 
      const imageIndex = Math.floor(scrollTop / sectionHeight);

      if (imageIndex >= 0 && imageIndex < images.length) {
        setCurrentImage(imageIndex);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll);
  }, [images.length]);

  return (
    <div className="w-full h-screen bg-black">
      <div
        ref={containerRef}
        className="w-full h-screen overflow-y-scroll"
      >
   
        <div className="relative w-full" style={{ height: `${images.length * 100}vh` }}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`sticky top-0 w-full h-screen transition-opacity duration-6000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageScroll;
