"use client";
import React, { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";

const ImageScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = 46;

    const loadImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        const imagePath = `https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/8_image_Timelaps/0${index + 1}.webp`;
        
        img.onload = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            setIsLoading(false);
          }
          resolve(img);
        };
        
        img.onerror = () => {
          reject(new Error(`Failed to load image: ${imagePath}`));
        };

        img.src = imagePath;
      });
    };

    Promise.all(
      Array.from({ length: totalImages }, (_, i) => 
        loadImage(i).catch(err => {
          console.error(`Error loading image ${i + 1}:`, err);
          return null;
        })
      )
    )
    .then(loadedImgs => {
      const validImages = loadedImgs.filter((img): img is HTMLImageElement => img !== null);
      if (validImages.length === 0) {
        setError('No images could be loaded');
        return;
      }
      imagesRef.current = validImages;
      drawImage(0);
    })
    .catch(error => {
      console.error('Error in image loading process:', error);
      setError('Failed to load images');
    });

    return () => {
      imagesRef.current = [];
    };
  }, []);

  const drawImage = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imagesRef.current[index];
    
    if (!canvas || !ctx || !img) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;
    
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useEffect(() => {
    if (!isLoading) {
      const unsubscribe = scrollYProgress.on("change", (latest) => {
        const frameIndex = Math.min(
          Math.floor(latest * (imagesRef.current.length - 1)),
          imagesRef.current.length - 1
        );
        drawImage(frameIndex);
      });
      return () => unsubscribe();
    }
  }, [scrollYProgress, isLoading]);

  return (
    <div className="w-full h-[300vh]" ref={containerRef}>
      <div className="sticky top-0 w-full h-screen">
        {error ? (
          <div className="w-full h-full flex items-center justify-center text-white">
            {error}
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default ImageScroll;
