"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RestaurantHeader = () => {
  const [details, setDetails] = useState<{ name?: string }>();
  const router = useRouter();

  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data) {
      router.push("/restaurant");
    } else {
      setDetails(JSON.parse(data));
    }
  }, []);

  return (
    <div className="header-wrapper">
      <div className="logo">
        <img style={{ width: 100 }} src="/logo.jpeg" alt="" />
      </div>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        {details && details.name ? (
          <>
            <li>
              <button>Logout</button>
            </li>
            <li>
              <Link href="/">Profile</Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/">Login/SignUp</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantHeader;
