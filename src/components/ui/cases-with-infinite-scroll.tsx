"use client";

import React, { useEffect, useRef, useState } from "react";

function Case() {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);
  const scrollSpeed = 0.5; // in ppf

  const cylinderWidth = 1800;
  const imageCount = 15;
  const faceWidth = cylinderWidth / imageCount;
  const radius = 1200;

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    let rotationAngle = 0;

    const scroll = () => {
      if (!isPaused && container) {
        // for cylindrical motion
        rotationAngle += scrollSpeed * 0.2; // Adjust multiplier for speed

        // main container rotation
        container.style.transform = `rotateY(${rotationAngle}deg)`;

        // current rotation state is updated for scaling calculations
        setCurrentRotation(rotationAngle);
      }

      animationId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, scrollSpeed]);

  const images = Array.from({ length: 15 }).map((_, index) => ({
    id: index,
    src: `/image-${index + 1}.jpg`,
    alt: `Image ${index + 1}`,
    fallback: `Logo ${index + 1}`
  }));

  const allImages = [];
  for (let i = 0; i < imageCount; i++) {
    allImages.push({
      ...images[i % images.length],
      id: i
    });
  }

  // uses cos wave to scale smoothly
  const getScaleForPosition = (index, currentRotation = 0) => {
    // calculate actual angle considering current rotation
    const baseAngle = index * (360 / imageCount);
    const actualAngle = (baseAngle + currentRotation) % 360;

    const angleInRadians = (actualAngle * Math.PI) / 180;

    const cosValue = Math.cos(angleInRadians);

    // front image: cos value = 1: scale 1
    // side image: cos value = 0: scale 0.7
    // back image: cos value = -1: scale 0.4
    const minScale = 0.4;
    const maxScale = 1.0;
    const scale = minScale + ((cosValue + 1) / 2) * (maxScale - minScale);

    return Math.max(minScale, Math.min(maxScale, scale));
  };

  // gets visibility style for image
  const getVisibilityStyle = (index) => {
    // base angle for this image
    const baseAngle = index * (360 / imageCount);

    return {
      backfaceVisibility: 'hidden',
      '--base-angle': `${baseAngle}deg`
    };
  };

  return (
    <div className="w-full mt-16 px-4">
      <div className="flex flex-col gap-10">
        <div className="relative">
          <div
            className="relative w-full overflow-hidden flex justify-center items-center bg-[#bea882] dark:bg-[#1c0f00]"
            style={{
              height: '50vh',
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >

            <div className="absolute top-0 left-0 w-full h-[1px] pointer-events-none z-10">
              <div className="w-full h-full bg-[linear-gradient(to_right,_#bea882_0%,_#bea882_5%,_#2c1500_15%,_#2c1500_85%,_#bea882_95%,_#bea882_100%)] dark:bg-[linear-gradient(to_right,_#1c0f00_0%,_#1c0f00_5%,_#f3c297_15%,_#f3c297_85%,_#1c0f00_95%,_#1c0f00_100%)]" />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] pointer-events-none z-10">
              <div className="w-full h-full bg-[linear-gradient(to_right,_#bea882_0%,_#bea882_5%,_#2c1500_15%,_#2c1500_85%,_#bea882_95%,_#bea882_100%)] dark:bg-[linear-gradient(to_right,_#1c0f00_0%,_#1c0f00_5%,_#f3c297_15%,_#f3c297_85%,_#1c0f00_95%,_#1c0f00_100%)]" />
            </div>

            <div className="w-full py-6 overflow-hidden">
              <div
                ref={scrollContainerRef}
                className="relative flex justify-center items-center mx-auto"
                style={{
                  width: 'min(100%, 1800px)',
                  height: "500px",
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {allImages.map((image, index) => {
                  const scale = getScaleForPosition(index, currentRotation);
                  const visibilityStyle = getVisibilityStyle(index);

                  return (
                    <div
                      key={`image-${index}`}
                      className="absolute flex-none w-2/3 xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2" // Adjusted widths
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: `rotateY(${index * (360 / imageCount)}deg) translateZ(${radius}px) scale(${scale})`,
                        willChange: 'transform',
                        transition: 'none',
                        ...visibilityStyle
                      }}
                    >
                      <div className="aspect-square bg-muted rounded-md flex items-center justify-center overflow-hidden relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-md"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const fallback = target.nextElementSibling;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                        <div className="absolute inset-0 hidden items-center justify-center text-sm text-black dark:text-white bg-muted rounded-md">
                          {image.fallback}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
          .bg-muted {
              background-color: #f1f5f9;
          }
          .dark .bg-muted {
              background-color: #1e293b;
          }
          @media (max-width: 479px) {
              .xs\\:w-1\\/2 { 
                  width: 50%;
              }
          }
      `}</style>
    </div>
  );
}

export { Case };
