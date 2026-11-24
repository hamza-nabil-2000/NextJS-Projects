const RestaurantLogin = () => {
  return (
    <>
      <h2 className="restaurant-auth-heading">Log In</h2>

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
          <button className="button">Login</button>
        </div>
      </div>
    </>
  );
};

export default RestaurantLogin;
