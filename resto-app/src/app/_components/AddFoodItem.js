import { useState } from "react";

const AddFoodItems = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const handleAddFoodItem = async () => {
    console.log(name, price, path, description);
    let resto_id;
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    if (restaurantData) {
      resto_id = restaurantData._id;
    }
    let response = await fetch("/api/restaurant/foods", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        img_path: path,
        description,
        resto_id,
      }),
    });
    response = await response.json();
    if (response.success) {
      alert("Food Item Added Successfully!!");
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
      </div>

      <div className="input-wrapper">
        <div className="price-input">
          <span className="currency-label">Rs.</span>

          <input
            type="number"
            className="input-field"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
          />
        </div>
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Image Path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <textarea
          placeholder="Enter Description"
          className="input-field"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onInput={(e) => {
            const element = e.currentTarget;
            element.style.height = "auto";
            element.style.height =
              element.scrollHeight +
              (element.offsetHeight - element.clientHeight) +
              "px";
          }}
          rows={1}
          wrap="soft"
        />
      </div>

      <div className="input-wrapper">
        <button className="button" onClick={handleAddFoodItem}>
          Add Food Item
        </button>
      </div>
    </div>
  );
};

export default AddFoodItems;
