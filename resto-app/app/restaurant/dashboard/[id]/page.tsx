"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditFoodItem = (props: { setAddItem: (open: boolean) => void }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleEditFoodItem = async () => {
    if (!name || !path || !price || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
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

export default EditFoodItem;
