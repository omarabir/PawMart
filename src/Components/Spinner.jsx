import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <ClipLoader size={50} />
    </div>
  );
};

export default Spinner;
