"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import '../globals.css'
import { useEffect, useState } from 'react';

import { Bellefair } from "next/font/google";
const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });

function useMediaQuery(query:string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

interface ScrollingColumnProps {
  images: string[];
  direction?: "up" | "down";
  speed?: number;
}

const galleryColumns: {
  images: string[];
  direction: "up" | "down";
  speed: number;
}[] = [
  {
    images: [
      "/img1.jpg",
      "/img2.jpg",
      "/img3.jpg",
    ],
    direction: "up",
    speed: 25,
  },
  {
    images: [
      "/img4.jpg",
      "/img5.jpg",
      "/img6.jpg",
    ],
    direction: "down",
    speed: 30,
  },
  {
    images: [
      "/img7.jpg",
      "/img2.jpg",
      "/img5.jpg",
    ],
    direction: "up",
    speed: 22,
  },
  {
    images: [
      "/img1.jpg",
      "/img6.jpg",
      "/img3.jpg",
    ],
    direction: "down",
    speed: 28,
  },
];

const AutoScrollColumn = ({
  images,
  direction = "up",
  speed = 20,
}: ScrollingColumnProps) => {
  const animationName = direction === "up" ? "scrollUp" : "scrollDown";
  const animationDuration = `${speed}s`;

  return (
    <div className="flex flex-col flex-1 gap-[9px] overflow-hidden h-screen">
      <div
        className="flex flex-col gap-[9px]"
        style={{
          animation: `${animationName} ${animationDuration} linear infinite`,
        }}
      >
       
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="hero-gallery-container h-[34vh] relative overflow-hidden"
            style={{
              flexShrink: 0,
            }}
          >
            <Image
              alt={`Jaz events sample ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              src={src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const isSmall = useMediaQuery('(max-width: 640px)');
  const isMedium = useMediaQuery('(max-width: 1024px)');
  if (isSmall) {
    galleryColumns.splice(2, galleryColumns.length );
  } else if (isMedium) {
    galleryColumns.splice(3, galleryColumns.length );
  }else {
    galleryColumns.splice(0, 0 );
  }
  return (
    <section className="relative flex gap-[9px] w-full bg-black">
      {galleryColumns
        .slice(0, galleryColumns.length)
        .map((column, index) => (
          <AutoScrollColumn
            key={index}
            images={column.images}
            direction={column.direction}
            speed={column.speed}
          />
        ))}

      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1
          className={`text-5xl md:text-8xl font-bold mb-3 ${bellefair.className}`}
        >
          JAZ EVENTS <br /> CENTRE
        </h1>
        <p className="max-w-xl text-sm md:text-base mb-6 text-[#e0e0e0]">
          Experience elegance and comfort at Jaz Events Centre — Ibadan’s
          premium venue for weddings, corporate gatherings, and celebrations.
        </p>
        <div className="flex flex-col md:flex-row w-full md:w-fit gap-5">
          <a
            href="#contact"
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition"
          >
            BOOK NOW
          </a>
          <a
            href="#contact"
            className="bg-none border border-[#e0e0e0] text-white px-6 py-2 rounded-md transition"
          >
            VIEW GALLERY
          </a>
        </div>
        <div className="absolute rounded-md text-[#e0e0e0] bottom-0 left-0 md:left-10 p-5 md:p-10 bg-[#00000086] ">
          <p>Eleyele</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
