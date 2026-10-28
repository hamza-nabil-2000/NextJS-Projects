import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <div className="main-page-banner">
        <h1>Food Delivery App</h1>
        <div className="input-wrapper">
          <input
            type="text"
            className="select-input"
            placeholder="Select Place"
          />
          <input
            type="text"
            className="search-input"
            placeholder="Enter Food or Restaurant Name"
          />
        </div>
      </div>
    </main>
  );
}
