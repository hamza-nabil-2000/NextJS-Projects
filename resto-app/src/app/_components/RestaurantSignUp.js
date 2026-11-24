import { useState } from "react";

const RestaurantSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const handleSignup = async () => {
    console.log(email, password, c_password, name, city, address, contact);
    let result = await fetch("/api/restaurant", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        name,
        city,
        address,
        contact,
      }),
    });
    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("Restaurant Registered Successfully!");
    }
  };

  return (
    <>
      <h2 className="restaurant-auth-heading">Sign Up</h2>

      <div>
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Enter Email"
            className="input-field"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter Password"
            className="input-field"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            value={c_password}
            onChange={(event) => setC_password(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Restaurant Name"
            className="input-field"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter City"
            className="input-field"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <textarea
            placeholder="Enter Full Address"
            className="input-field"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            onInput={(event) => {
              const element = event.currentTarget;
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
          <input
            type="tel"
            placeholder="Enter Contact No."
            className="input-field"
            value={contact}
            onChange={(event) =>
              setContact(
                event.target.value
                  .replace(/[^0-9+ ]/g, "")
                  .trimStart()
                  .replace(/(?!^)\+/g, "")
                  .replace(/ {2,}/g, " ")
                  .replace(/^(\+92)(\d)/, "$1 $2")
                  .replace(/^(\+92 \d{3})(\d)/, "$1 $2")
                  .replace(/^(03\d{2})(\d)/, "$1 $2")
                  .replace(/^(\+92(?: ?\d){10}).*$/, "$1")
                  .replace(/^((?!\+92)\+?(?: ?\d){11}).*$/, "$1"),
              )
            }
            pattern="(?:[+]92 3[0-9]{2} [0-9]{7}|03[0-9]{2} [0-9]{7}|[+](?!92)[1-9](?: ?[0-9]){6,10})"
          />
        </div>

        <div className="input-wrapper">
          <button onClick={handleSignup} className="button">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantSignUp;
