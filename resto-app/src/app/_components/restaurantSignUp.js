const RestaurantSignUp = () => {
  return (
    <>
      <h3>SignUp</h3>

      <div>
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Enter Email"
            className="input-field"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter Password"
            className="input-field"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Restaurant Name"
            className="input-field"
          />
        </div>

        <div className="input-wrapper">
          <input type="text" placeholder="Enter City" className="input-field" />
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Full Address"
            className="input-field"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="tel"
            placeholder="Enter Contact No."
            className="input-field"
          />
        </div>

        <div className="input-wrapper">
          <button className="button">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default RestaurantSignUp;
