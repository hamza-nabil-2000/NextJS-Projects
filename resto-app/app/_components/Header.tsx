"use client";

import { usePathname } from "next/navigation";
import CustomerHeader from "./CustomerHeader";
import RestaurantHeader from "./RestaurantHeader";

export default function Header() {
  const pathname = usePathname();
  const isRestaurant =
    pathname === "/restaurant" || pathname.startsWith("/restaurant/");

  return isRestaurant ? <RestaurantHeader /> : <CustomerHeader />;
}
