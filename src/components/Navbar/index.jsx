import React from "react";
import "./style.scss";

export default function Navbar() {
  // removed data-scroll-section from navbar div
  return (
    <div className="navbar" data-scroll-section>
      <div>About  &nbsp;</div>

      <div>Portfolio</div>

      <div>History</div>
    </div>
  );
}
