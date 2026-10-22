import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignUp = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [c_password, setC_password] = useState("");

  const [name, setName] = useState("");

  const [city, setCity] = useState("");

  const [address, setAddress] = useState("");

  const [contact, setContact] = useState("");

  const router = useRouter();

  const [error, setError] = useState(false);

  const [passwordError, setPasswordError] = useState(false);

  const handleSignUp = async () => {
    if (password !== c_password) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
    }
    if (
      !email ||
      !password ||
      !c_password ||
      !name ||
      !city ||
      !address ||
      !contact
    ) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    const response = await fetch("/api/restaurant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        name,
        city,
        address,
        contact,
      }),
    });
    const result = await response.json();
    if (response.ok && result.success && result.result) {
      setPassword("");
      setC_password("");
      const { result: response1 } = result;
      delete response1.password;
      localStorage.setItem("restaurantUser", JSON.stringify(response1));
      router.push("/restaurant/dashboard");
    }
  };

  return (
    <>
      <h3> Signup </h3>

      <div>
        <div className="input-wrapper">
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />

          {error && !email && (
            <span className="input-error">Please enter valid email</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />

          {passwordError && (
            <span className="input-error">
              Password and Confirm Password do not match.
            </span>
          )}

          {error && !password && (
            <span className="input-error">Please enter valid password</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            className="input-field"
            value={c_password}
            onChange={(event) => setC_password(event.target.value)}
            placeholder="Confirm Password"
          />

          {passwordError && (
            <span className="input-error">
              Password and Confirm Password do not match.
            </span>
          )}

          {error && !c_password && (
            <span className="input-error">
              Please enter valid confirm password
            </span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
          />

          {error && !name && (
            <span className="input-error">Please enter valid name</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="City"
          />

          {error && !city && (
            <span className="input-error">Please enter valid city</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Address"
          />

          {error && !address && (
            <span className="input-error">Please enter valid address</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="tel"
            className="input-field"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            placeholder="Contact"
          />

          {error && !contact && (
            <span className="input-error">
              Please enter valid contact number
            </span>
          )}
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
