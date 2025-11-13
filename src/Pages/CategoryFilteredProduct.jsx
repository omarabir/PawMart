import React from "react";
import { useLoaderData } from "react-router";
import ListingCard from "../Components/ListingCard";

const CategoryFilteredProduct = () => {
  const listings = useLoaderData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Category Results{" "}
        <span className="text-[#FE7F73] "> {listings[0]?.category}</span>
      </h1>

      {listings.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilteredProduct;
