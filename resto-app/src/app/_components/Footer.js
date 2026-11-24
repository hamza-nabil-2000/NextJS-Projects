"use client";

import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => setYear(new Date().getFullYear());

    updateYear();
    const timer = window.setInterval(updateYear, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <footer className="footer-wrapper">
      <p>
        © <span suppressHydrationWarning>{year}</span> All Rights Reserved by{" "}
        <strong>Resto App</strong>
      </p>
    </footer>
  );
};

export default Footer;
