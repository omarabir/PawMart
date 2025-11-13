import { motion } from "framer-motion";

import { Link } from "react-router";

const ListingCard = ({ listing }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="card bg-[#ffd1cd] dark:text-black w-80 shadow-xl h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <figure className="h-48">
        <img
          src={listing.image}
          alt={listing.name}
          className="w-full h-full "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title truncate">{listing.name}</h2>
        <div className="badge bg-[#f86255] text-white">{listing.category}</div>
        <p>
          <strong>Location:</strong> {listing.location}
        </p>
        <p className="font-semibold text-lg text-emerald-400">
          {listing.category === "Pets" && listing.price === 0
            ? "Free for Adoption"
            : `$${listing.price}`}
        </p>
        <div className="card-actions justify-end">
          <Link
            to={`/listing-details/${listing._id}`}
            className="btn bg-[#FE7F73] text-white"
          >
            See Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingCard;
