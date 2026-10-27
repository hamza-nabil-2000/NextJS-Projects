"use client";

import { useState } from "react";

const AddFoodItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleAddFoodItem = async () => {
    console.log(name, price, path, description);
    if (!name || !path || !price || description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    let resto_id;
    const restaurantData = JSON.parse(
      localStorage.getItem("restaurantUser") ?? "null",
    );
    if (restaurantData) {
      resto_id = restaurantData._id;
    }
    const response = await fetch("/api/foods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price,
        resto_id,
        img_path: path,
        description,
      }),
    });
    const result = await response.json();
    if (result.success) {
      alert("Food Item Added");
    } else {
      alert("Food Item not Added");
    }
  };

  return (
    <div className="container">
      <h1>Add New Food Item</h1>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Food Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && !name && (
          <span className="input-error">Please Enter Valid Name</span>
        )}
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {error && !price && (
          <span className="input-error">Please Enter Valid Price</span>
        )}
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Image Path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
        {error && !path && (
          <span className="input-error">Please Enter Valid Path</span>
        )}
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {error && !description && (
          <span className="input-error">Please Enter Valid Description</span>
        )}
      </div>

      <div className="input-wrapper">
        <button className="button" onClick={handleAddFoodItem}>
          Add Food Item
        </button>
      </div>
    </div>
  );
};

export default AddFoodItem;
