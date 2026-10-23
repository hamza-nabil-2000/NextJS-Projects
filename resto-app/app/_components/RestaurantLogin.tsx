import { useState } from "react";

const RestaurantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    let response = await fetch("/api/restaurant", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        login: true,
      }),
    });

    const result = (response = await response.json());
    if (result.success) {
      alert("Login Successful");
    } else { 
      alert("Login Failed");
    }
  };

  return (
    <>
      <h3>Login</h3>

      <div>
        <div className="input-wrapper">
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          {error && !email && (
            <span className="input-error">Please Enter Valid Email.</span>
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

          {error && !password && (
            <span className="input-error">Please Enter Valid Password.</span>
          )}
        </div>

        <div className="input-wrapper">
          <button onClick={handleLogin} className="button">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantLogin;
