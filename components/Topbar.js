import React from "react";
import Link from "next/link";
function Topbar(props) {
  return (
    <div>
      <span className="mr-3 text-blue-600">
        <Link href="/">Home</Link>
      </span>
      <span className="mr-3 text-blue-600">
        <Link href="/about-us">About Us</Link>
      </span>
      <span className="mr-3 text-blue-600">
        <Link href="/contact-us">Contact Us</Link>
      </span>
    </div>
  );
}

export default Topbar;
