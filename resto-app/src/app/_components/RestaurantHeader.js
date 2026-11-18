import Link from "next/link";

const RestaurantHeader = () => {
  return (
    <div>
      <div className="logo">
        <img style={{ width: 100 }} src="header.jpeg" />

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/">Login/SignUp</Link>
          </li>

          <li>
            <Link href="/">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantHeader;
