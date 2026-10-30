"use client";
import { Suspense, use, useEffect, useState } from "react";

type RestaurantDetails = {
  _id: string;
  name: string;
  email: string;
  city: string;
  address: string;
  contact: string;
};

type FoodItem = {
  _id: string;
  name: string;
  price: number;
  img_path: string;
  description: string;
  resto_id: string;
};

type RestaurantResponse = {
  success: boolean;
  details: RestaurantDetails | null;
  foodItems: FoodItem[];
};

type ExplorePageProps = {
  params: Promise<{ name: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const RestaurantContent = ({ params, searchParams }: ExplorePageProps) => {
  const { name } = use(params);
  const { id: queryId } = use(searchParams);
  const id = Array.isArray(queryId) ? queryId[0] : queryId;
  const [restaurantDetails, setRestaurantDetails] =
    useState<RestaurantDetails | null>(null);
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    const loadRestaurantDetails = async () => {
      try {
        const response = await fetch(
          "/api/customer/" + encodeURIComponent(id),
          {
            signal: controller.signal,
          },
        );
        if (!response.ok) return;

        const data: RestaurantResponse = await response.json();
        if (data.success) {
          setRestaurantDetails(data.details);
          setFoodItems(data.foodItems);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Failed to load restaurant details", error);
        }
      }
    };

    void loadRestaurantDetails();
    return () => controller.abort();
  }, [id]);

  return (
    <div>
      <div className="restaurant-page-banner">
        <h1>{decodeURI(name)}</h1>
      </div>

      <div>
        <h3>{restaurantDetails?.contact}</h3>
        <h3>{restaurantDetails?.city}</h3>
        <h3>{restaurantDetails?.address}</h3>
        <h3>{restaurantDetails?.email}</h3>
      </div>

      <div>
        {foodItems.map((item) => (
          <div key={item._id}>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.description}</div>
            <img style={{ width: 100 }} src={item.img_path} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Page(props: ExplorePageProps) {
  return (
    <Suspense fallback={<p role="status">Loading restaurant...</p>}>
      <RestaurantContent {...props} />
    </Suspense>
  );
}
