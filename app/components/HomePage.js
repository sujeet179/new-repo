'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const ImageSlideshow = () => {
  // Hardcoded image filenames
  const imageFilenames = ['Sandalwood.jpg', 'Sandalwood.jpg'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageFilenames.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, imageFilenames.length]); // Include imageFilenames.length in the dependency array

  return (
    <div className="relative mt-48">
      <div className="overflow-hidden mb-5" style={{ height: "30vw" }}>
        {imageFilenames.map((filename, index) => (
          
          <Image
            key={filename} // Use the filename as the key
            src={`/images/${filename}`} // Construct the src URL based on the filename
            alt={`Slide ${index + 1}`}
            width={1920}
            height={1080}
            className={`absolute w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ zIndex: currentIndex === index ? 1 : 0 }}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {imageFilenames.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;