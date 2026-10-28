"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Restaurant = {
  _id: string;
  name: string;
  contact: string;
  city: string;
  address: string;
  email: string;
};

export default function Home() {
  const [locations, setLocations] = useState<unknown[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [showLocation, setShowLocation] = useState(false);
  const locationPickerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!showLocation) return;

    const handleOutsidePointer = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !locationPickerRef.current?.contains(event.target)
      ) {
        setShowLocation(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointer);
    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointer);
    };
  }, [showLocation]);

  useEffect(() => {
    loadLocation();
    loadRestaurants({});
  }, []);

  const loadLocation = async () => {
    let response = await fetch("/api/customer/locations");
    let data = (await response.json()) as {
      success: boolean;
      result: unknown[];
    };
    if (data.success) {
      setLocations(data.result);
    }
  };

  const loadRestaurants = async (params: {
    location?: string;
    restaurant?: string;
  }) => {
    let url = "/api/customer";
    if (params?.location) {
      url = url + "?location=" + params.location;
    } else if (params?.restaurant) {
      url = url + "?restaurant=" + params.restaurant;
    }
    let response = await fetch(url);
    let data = (await response.json()) as {
      success: boolean;
      result: Restaurant[];
    };
    if (data.success) {
      setRestaurants(data.result);
    }
  };

  const handleListItem = (item: unknown) => {
    setSelectedLocation(String(item));
    setShowLocation(false);
    loadRestaurants({ location: String(item) });
  };

  return (
    <main>
      <div className="main-page-banner">
        <h1>Food Delivery App</h1>
        <div className="input-wrapper-cus">
          <div className="location-picker" ref={locationPickerRef}>
            <input
              type="text"
              value={selectedLocation}
              readOnly
              onClick={() => setShowLocation(true)}
              className="select-input"
              placeholder="Select Place"
            />

            {showLocation && (
              <ul className="location-list">
                {locations.map((item, index) => (
                  <li onClick={() => handleListItem(item)} key={index}>
                    {String(item)}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input
            type="text"
            className="search-input"
            placeholder="Enter Food or Restaurant Name"
            onChange={(event) =>
              loadRestaurants({ restaurant: event.target.value })
            }
          />
        </div>
      </div>
      <div className="restaurant-list-container">
        {restaurants.map((item) => (
          <div
            onClick={() => router.push("explore/" + item.name)}
            className="restaurant-wrapper"
            key={item._id}
          >
            <div className="heading-wrapper">
              <h3>{item.name}</h3>
              <h5>Contact: {item.contact}</h5>
            </div>

            <div className="address-wrapper">
              <div>{item.city},</div>
              <div className="address">
                {item.address}, Email: {item.email}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
