"use client";

import { useState } from "react";

import RestaurantHeader from "../_components/RestaurantHeader";
import "./style.css";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import Footer from "../_components/Footer";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="restaurant-page">
      <div className="container">
        <RestaurantHeader />
        <h1 className="restaurant-auth-title">Restaurant Login &amp; Sign Up</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}

        <button
          className="restaurant-auth-switch"
          type="button"
          onClick={() => setLogin((current) => !current)}
        >
          {login ? "Don’t have an account?" : "Already have an account?"}{" "}
          <strong>{login ? "Sign Up" : "Log In"}</strong>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Restaurant;
