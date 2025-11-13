import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import useDynamicTitle from "../Components/useDynamicTitle";

const MainLayout = () => {
  useDynamicTitle();
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
