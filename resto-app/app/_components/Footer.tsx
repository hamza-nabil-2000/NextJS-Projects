"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => null;

const Footer = () => {
  const year = useSyncExternalStore(subscribe, getYear, getServerYear);

  return (
    <div className="footer-wrapper">
      <p>© {year} All rights reserved by Resto App</p>
    </div>
  );
};

export default Footer;
