import { useEffect } from "react";
import { useLocation } from "react-router";

const useDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const titleMap = {
      "/": "Home",
      "/pets-and-supplies": "Pets & Supplies",
      "/add-listing": "Add Listing",
      "/my-listings": "My Listings",
      "/my-orders": "My Orders",
      "/register": "Register",
      "/login": "Login",
    };

    let pageTitle = "PawMart";
    for (const route in titleMap) {
      if (path.startsWith(route) && route.length > 1) {
        pageTitle = `PawMart | ${titleMap[route]}`;
        break;
      } else if (path === "/") {
        pageTitle = `PawMart | ${titleMap[route]}`;
        break;
      }
    }

    document.title = pageTitle;
  }, [location]);
};

export default useDynamicTitle;
