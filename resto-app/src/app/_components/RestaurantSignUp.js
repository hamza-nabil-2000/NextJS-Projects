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

  const handleSignup = async () => {
    if (password != c_password) {
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

    console.log(email, password, c_password, name, city, address, contact);
    let response = await fetch("/api/restaurant", {
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
    response = await response.json();
    console.log(response);
    if (response.success) {
      console.log(response);
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
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

          {error && !email && (
            <span className="input-error">Please Enter Valid Email!</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter Password"
            className="input-field"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {passwordError && (
            <span className="input-error">
              Password & Confirm Password Doesn't Match!
            </span>
          )}

          {error && !password && (
            <span className="input-error">Please Enter Valid Password!</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            value={c_password}
            onChange={(event) => setC_password(event.target.value)}
          />

          {passwordError && (
            <span className="input-error">
              Password & Confirm Password Doesn't Match
            </span>
          )}

          {error && !c_password && (
            <span className="input-error">
              Please Enter Valid Confirm Password!
            </span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Restaurant Name"
            className="input-field"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          {error && !name && (
            <span className="input-error">
              Please Enter Valid Restaurant Name!
            </span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter City"
            className="input-field"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />

          {error && !city && (
            <span className="input-error">Please Enter Valid City Name!</span>
          )}
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

          {error && !address && (
            <span className="input-error">Please Enter Valid Address!</span>
          )}
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

          {error && !contact && (
            <span className="input-error">
              Please Enter Valid Contact Number!
            </span>
          )}
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
