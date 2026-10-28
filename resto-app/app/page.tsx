"use client";

import { useEffect, useRef, useState } from "react";
import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";

export default function Home() {
  const [locations, setLocations] = useState<unknown[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showLocation, setShowLocation] = useState(false);
  const locationPickerRef = useRef<HTMLDivElement>(null);

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
  }, []);

  const loadLocation = async () => {
    const response = await fetch("/api/customer/locations");
    const data = (await response.json()) as {
      success: boolean;
      result: unknown[];
    };
    if (data.success) {
      setLocations(data.result);
    }
  };

  const handleListItem = (item: unknown) => {
    setSelectedLocation(String(item));
    setShowLocation(false);
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
          />
        </div>
      </div>
    </main>
  );
}
