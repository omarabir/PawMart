import React from "react";
import { motion } from "framer-motion";

const MeetHeros = () => {
  const heroes = [
    {
      name: "Sarah & Luna",
      img: "https://picsum.photos/seed/hero1/400/400",
      story:
        "Sarah adopted Luna, a shy rescue dog, and gave her a loving home. Now, Luna is the happiest dog on the block!",
    },
    {
      name: "Mike & Whiskers",
      img: "https://picsum.photos/seed/hero2/400/400",
      story:
        "Mike found Whiskers, a senior cat, through PawMart. He proves that older pets have just as much love to give.",
    },
    {
      name: "The Ali Family & Patches",
      img: "https://picsum.photos/seed/hero3/400/400",
      story:
        "The Ali family wanted a playful kitten. They found Patches, who has brought endless joy and laughter to their home.",
    },
    {
      name: "Emma & Coco",
      img: "https://picsum.photos/seed/hero4/400/400",
      story:
        "Emma rescued Coco from a shelter and together they’ve created a bond full of trust, cuddles, and fun adventures.",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-yellow-800">
           Meet Our Pet Heroes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {heroes.map((hero, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <figure className="overflow-hidden">
                <img
                  src={hero.img}
                  alt={hero.name}
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </figure>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-3 text-yellow-900">
                  {hero.name}
                </h3>
                <p className="text-gray-700 flex-1">{hero.story}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetHeros;
