"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiHome, FiUser, FiLogOut, FiLogIn } from "react-icons/fi";

const RestaurantHeader = () => {
  const [details, setDetails] = useState(null);
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("restaurantUser");

    if (!data && pathName === "/restaurant/dashboard") {
      router.replace("/restaurant");
    } else if (data && pathName === "/restaurant") {
      router.replace("/restaurant/dashboard");
    }

    setDetails(data ? JSON.parse(data) : null);
  }, [pathName, router]);

  const logout = () => {
    localStorage.removeItem("restaurantUser");
    setDetails(null);
    router.replace("/restaurant");
  };

  return (
    <header className="header-wrapper">
      <div className="logo">
        <Link href="/">
          <img src="/header.png" alt="Food Delivery Logo" />
        </Link>
      </div>

      <nav className="restaurant-navbar">
        <ul>
          <li>
            <Link
              href="/"
              className={`nav-link ${pathName === "/" ? "active" : ""}`}
            >
              <FiHome />
              Home
            </Link>
          </li>

          {details && details.name ? (
            <>
              <li>
                <Link
                  href="/restaurant/profile"
                  className={`nav-link ${
                    pathName === "/restaurant/profile" ? "active" : ""
                  }`}
                >
                  <FiUser />
                  Profile
                </Link>
              </li>

              <li>
                <button className="logout-btn" onClick={logout}>
                  <FiLogOut />
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/restaurant" className="login-btn">
                <FiLogIn />
                Login / Sign Up
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default RestaurantHeader;
