import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const slides = [
    {
      image:
        "https://i.ibb.co.com/Jj6jNdcJ/training-playing-woman-dog-home-600nw-2667461471.jpg",
      tagline: "Find Your Furry Friend Today!",
      subtext: "Explore hundreds of pets waiting for a loving home.",
    },
    {
      image: "https://i.ibb.co.com/cXs557RY/image.png",
      tagline: "Adopt, Don’t Shop — Give a Pet a Home.",
      subtext: "Make a difference in a rescue pet's life.",
    },
    {
      image:
        "https://i.ibb.co.com/Xx3TLcw9/head-shot-happy-dogs-cats-600nw-2421526621.jpg",
      tagline: "Because Every Pet Deserves Love and Care.",
      subtext: "Find everything you need for your beloved companion.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentSlide((currentSlide + 1) % slides.length);
    } else if (direction === "right") {
      setCurrentSlide(
        currentSlide === 0 ? slides.length - 1 : currentSlide - 1
      );
    }
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full cursor-grab"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) handleSwipe("left");
            else if (info.offset.x > 50) handleSwipe("right");
          }}
        >
          <motion.img
            src={slides[currentSlide].image}
            alt={`Banner ${currentSlide + 1}`}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-4">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              whileHover={{ scale: 1.05 }}
              className="text-3xl md:text-5xl font-bold mb-3"
            >
              {slides[currentSlide].tagline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="text-base md:text-xl"
            >
              {slides[currentSlide].subtext}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button
          className="btn btn-circle"
          onClick={() =>
            setCurrentSlide(
              currentSlide === 0 ? slides.length - 1 : currentSlide - 1
            )
          }
        >
          ❮
        </button>
        <button
          className="btn btn-circle"
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
