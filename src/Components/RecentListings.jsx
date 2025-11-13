import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { Link } from "react-router";

const RecentListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pawmart-server-weld-nu.vercel.app/listings?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch listings:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Recent Listings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
          {listings.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>
      </div>

      <Link to="/pets-and-supplies">
        <button className="btn bg-[#FE7F73] text-white hover:bg-[#FE7F73] block mx-auto mt-8">
          View More
        </button>
      </Link>
    </section>
  );
};

export default RecentListings;
