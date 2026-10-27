"use client";

import { useParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const EditFoodItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    handleLoadFootItem(id);
  }, [id]);

  const handleLoadFootItem = async (id: string) => {
    let response = await fetch(`/api/restaurant/foods/edit/${id}`);
    const data = await response.json();
    if (data.success) {
      console.log(data.result);
      setName(data.result.name);
      setPrice(data.result.price);
      setPath(data.result.img_path);
      setDescription(data.result.description);
    }
  };

  const handleEditFoodItem = async () => {
    if (!name || !path || !price || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    let response = await fetch(`/api/restaurant/foods/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name,
        price,
        img_path: path,
        description,
      }),
    });
    const data = await response.json();
    if (data.success) {
      router.push("../dashboard");
    } else {
      alert("Data is not Updated Please Try Again");
    }
  };

  return (
    <div className="container">
      <h1>Update Food Item</h1>
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
        <button className="button" onClick={handleEditFoodItem}>
          Update Food Item
        </button>
      </div>

      <div className="input-wrapper">
        <button className="button" onClick={() => router.push("../dashboard")}>
          Back to Food Item List
        </button>
      </div>
    </div>
  );
};

export default function EditFoodItemPage() {
  return (
    <Suspense fallback={<div className="container">Loading food item…</div>}>
      <EditFoodItem />
    </Suspense>
  );
}
