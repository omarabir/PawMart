import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { BeatLoader } from "react-spinners";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pawmart-server-weld-nu.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load categories:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <BeatLoader />;
  }

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Shop by Category:
          <span style={{ color: " #f86255", fontWeight: "semibold" }}>
            <Typewriter
              words={["Accessories", "Care Products", "Foods", "Pets"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        {categories.length === 0 ? (
          <p className="text-gray-500">No categories found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="card bg-[#fcb2ab]  shadow-lg p-8 rounded-2xl cursor-pointer hover:shadow-xl"
              >
                <Link
                  to={`/category-filtered-product/${encodeURIComponent(
                    category
                  )}`}
                >
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className="text-sm text-gray-500">View products →</p>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
