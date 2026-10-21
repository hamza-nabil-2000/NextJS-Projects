import { useState } from "react";

const RestaurantSignUp = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [city, setCity] = useState("");

  const [address, setAddress] = useState("");

  const [mobile, setMobile] = useState("");

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log(email, password, confirmPassword, name, city, address, mobile);
  };

  return (
    <>
      <h3>SignUp Component</h3>

      <div>
        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            className="input-field"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirm Password"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="City"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Address"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="tel"
            className="input-field"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
            placeholder="Mobile"
          />
        </div>

        <div className="input-wrapper">
          <button className="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantSignUp;
