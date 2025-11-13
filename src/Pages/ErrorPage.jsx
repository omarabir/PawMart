import React from "react";
import { Link } from "react-router";
import errorImage from "../assets/404 page.png";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 dark:bg-gray-700">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <img src={errorImage} alt="" />
          <p className="text-2xl md:text-3xl dark:text-gray-300">
            Sorry, we couldn't find this page.
          </p>
          <Link
            to="/"
            className="px-6 py-4 text-xl font-semibold rounded bg-[#FE7F73] text-gray-50 hover:text-gray-200"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
