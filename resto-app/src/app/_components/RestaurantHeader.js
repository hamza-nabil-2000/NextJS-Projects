"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
const RestaurantHeader = () => {
  const [details, setDetails] = useState();
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    const data = localStorage.getItem("restaurantUser");
    if (!data && pathName == "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if (data && pathName == "/restaurant") {
      router.push("/restaurant/dashboard");
    }

    if (data) {
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
        <img style={{ width: 100 }} src="/header.png" />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {details && details.name ? (
            <>
              <Link href="/">Profile</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link href="/">Login/Sign Up</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default RestaurantHeader;
