import React, { useContext, useEffect, useState } from "react";
import { BiMoon } from "react-icons/bi";
import { PiSun } from "react-icons/pi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "daisyui/components/toast";
import { BeatLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");

  const handleLogout = () => {
    signOutUser()
      .then(() => toast.success("User logged out successfully!"))
      .catch((error) => toast.error(error.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#FE7F73] font-semibold"
              : "hover:text-[#FE7F73] transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pets-and-supplies"
          className={({ isActive }) =>
            isActive
              ? "text-[#FE7F73] font-semibold"
              : "hover:text-[#FE7F73] transition"
          }
        >
          Pets & Supplies
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-listing"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FE7F73] font-semibold"
                  : "hover:text-[#FE7F73] transition"
              }
            >
              Add Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-listings"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FE7F73] font-semibold"
                  : "hover:text-[#FE7F73] transition"
              }
            >
              My Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FE7F73] font-semibold"
                  : "hover:text-[#FE7F73] transition"
              }
            >
              My Orders
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const authLinks = (
    <>
      <li>
        <Link to="/login" className="btn btn-outline btn-error w-full">
          Login
        </Link>
      </li>
      <li>
        <Link to="/register" className="btn bg-[#FE7F73] text-white w-full">
          Register
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50 mb-10">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
            {!user && authLinks}{" "}
            {/* Show login/register in mobile dropdown if not logged in */}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl font-bold text-primary"
        >
          <p className="text-[#FE7F73]">PawMart</p>
        </Link>
      </div>

      {/* Navbar Center - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2">
        {/* Theme Toggle */}
        <label className="swap swap-rotate btn btn-ghost btn-circle">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            defaultChecked={theme === "dark"}
            type="checkbox"
          />
          <PiSun className="swap-on fill-current w-5 h-5" />
          <BiMoon className="swap-off fill-current w-5 h-5" />
        </label>

        {/* User/Login */}
        {loading ? (
          <BeatLoader />
        ) : user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL || `https://i.pravatar.cc/150?u=${user.uid}`
                  }
                  alt="User avatar"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 py-4 px-5 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-semibold">
                Name: {user.displayName || "Profile"}
              </li>
              <li className="my-2">Email: {user.email}</li>
              <li className="text-center">
                <button
                  onClick={handleLogout}
                  className="btn bg-[#FE7F73] text-center w-full"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          // Desktop Login/Register Buttons
          <>
            <Link to="/login" className="btn btn-outline btn-error">
              Login
            </Link>
            <Link to="/register" className="btn bg-[#FE7F73] text-white">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
