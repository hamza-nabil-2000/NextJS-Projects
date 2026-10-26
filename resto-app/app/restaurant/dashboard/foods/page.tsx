import AddFoodItem from "@/app/_components/AddFoodItem";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import Link from "next/link";
import "../../style.css";

export default function FoodsPage() {
  return (
    <div>
      <RestaurantHeader />
      <Link href="/restaurant/dashboard">Dashboard</Link>
      <AddFoodItem />
    </div>
  );
}
