import React from "react";
import Banner from "../Components/BAnner";
import WhyAdopt from "../Components/WhyAdopt";
import MeetHeros from "../Components/MeetHeros";
import RecentListings from "../Components/RecentListings";
import CategorySection from "../Components/CategorySection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategorySection></CategorySection>
      <RecentListings></RecentListings>
      <WhyAdopt></WhyAdopt>
      <MeetHeros></MeetHeros>
    </div>
  );
};

export default Home;
