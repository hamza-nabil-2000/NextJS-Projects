"use client";

import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import "./style.css";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <RestaurantHeader />
        <h1>Restaurant Login/Signup Page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}

        <div>
          <button className="button-link" onClick={() => setLogin(!login)}>
            {login
              ? "Don't have Account? SignUp"
              : "Already have Account? Login"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
