import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNavDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 767) {
        closeDropdown();
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth <= 767) {
      closeDropdown();
    }
  };

  return (
    <div className="nav bg-warning">
      <div className="nav-logo"> <img className="nav-logo-img" src="/sampleLogo.jpg" alt="logo" /> </div>
      <button onClick={toggleNavDropdown} className="btn btn-warning nav-dropdown-btn" > <img className="nav-dropdown-img" src="/menu.svg" alt="" /> </button>
      <div
        ref={dropdownRef} className={`nav-dropdown bg-warning ${isDropdownOpen ? "open" : ""}`}
        style={{ height: isDropdownOpen ? dropdownRef.current?.scrollHeight + "px" : "0px", }} >
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" onClick={handleLinkClick}>About us</Link>
        <Link to="/products" onClick={handleLinkClick}>Products</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact us</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact us</Link>
      </div>
    </div>
  );
}
