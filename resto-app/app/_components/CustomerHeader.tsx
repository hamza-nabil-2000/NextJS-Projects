import Link from "next/link";

const CustomerHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img style={{ width: 100 }} src="/logo.jpeg" alt="" />
      </div>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/">Login</Link>
        </li>

        <li>
          <Link href="/">Signup</Link>
        </li>

        <li>
          <Link href="/">Cart(0)</Link>
        </li>

        <li>
          <Link href="/">Add Restaurant</Link>
        </li>
      </ul>
    </div>
  );
};

export default CustomerHeader;
