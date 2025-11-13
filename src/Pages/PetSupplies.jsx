import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import ListingCard from "../Components/ListingCard";
import { AuthContext } from "../Context/AuthContext";
import Spinner from "../Components/Spinner";

const PetSupplies = () => {
  const listingData = useLoaderData();
  const { loading } = useContext(AuthContext);
  const listings = Array.isArray(listingData) ? listingData : [];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [...new Set(listings.map((listing) => listing.category))];

  const filteredListings = listings.filter((listing) => {
    const matchesCategory =
      selectedCategory === "All" || listing.category === selectedCategory;
    const matchesSearch = listing.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        All Pets & Supplies
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-base-200 rounded-lg shadow">
        {/* Category Filter */}
        <div className="form-control w-full md:w-1/3">
          <label className="label">
            <span className="label-text">Filter by Category</span>
          </label>
          <select
            className="select select-bordered"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Search by Name */}
        <div className="form-control w-full md:w-1/3">
          <label className="label">
            <span className="label-text">Search by Name</span>
          </label>
          <input
            type="text"
            placeholder="Search for a pet or product..."
            className="input input-bordered"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : filteredListings.length === 0 ? (
        <div className="text-center p-10">
          <p className="text-xl text-gray-500">No listings found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
          {filteredListings.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PetSupplies;
