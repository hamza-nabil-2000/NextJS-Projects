"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const RestaurantHeader = () => {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathname == "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if (data && pathname == "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("restaurantUser");
    router.push("/restaurant");
  };

  return (
    <div className="header-wrapper">
      <div className="logo">
        <img style={{ width: 100 }} src="/header.png" alt="Resto App" />
      </div>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        {details && details.name ? (
          <>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
            <li>
              <Link href="/">Profile</Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/">Login/Sign Up</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantHeader;
