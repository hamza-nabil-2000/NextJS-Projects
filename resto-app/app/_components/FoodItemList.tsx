"use client";

import { useEffect, useState } from "react";

type FoodItem = {
  _id: string;
  name: string;
  price: number;
  description: string;
  img_path: string;
};

const FoodItemList = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    loadFoodItems();
  }, []);

  const loadFoodItems = async () => {
    const restaurantData = JSON.parse(
      localStorage.getItem("restaurantUser") ?? "null",
    );
    const resto_id = restaurantData._id;
    let response = await fetch(`/api/restaurant/foods/${resto_id}`);
    const data: { success: boolean; result: FoodItem[] } =
      await response.json();
    if (data.success) {
      setFoodItems(data.result);
    } else {
      alert("Food Item List not Loading");
    }
  };

  const deleteFoodItems = async (id: String) => {
    let response = await fetch(`/api/restaurant/foods/${id}`, {
      method: "delete",
    });
    const data: { success: boolean } = await response.json();
    if (data.success) {
      loadFoodItems();
    } else {
      alert("Food Item not Deleted");
    }
  };

  return (
    <div>
      <h1>Food Items</h1>
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {foodItems &&
            foodItems.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img src={item.img_path} alt="" />
                </td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => deleteFoodItems(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodItemList;
