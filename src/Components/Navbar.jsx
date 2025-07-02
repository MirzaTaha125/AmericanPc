import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiPhone, FiX, FiMail, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import mainLogo from "../assets/main_logo.webp";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },

  {
    label: "Services",
    dropdown: [
      { label: "Website Development", path: "/web-development-service" },
      { label: "Logo Designing", path: "/logo-service" },
      { label: "Branding", path: "/branding-service" },
      { label: "Ecommerce", path: "/ecommerce-service" },
    ],
  },
  { label: "Portfolio", path: "/potfolio" },

  {
    label: "Packages",
    dropdown: [
      { label: "Web Development", path: "/web-development" },
      { label: "Logo", path: "/logo" },
      { label: "Branding", path: "/branding" },
      { label: "Ecommerce", path: "/ecommerce" },
    ],
  },

  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const handleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      }
      lastScrollY.current = window.scrollY;
    };
    const handleClick = () => {
      setShowNavbar(true);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <div>
      {/* Blur overlay when drawer is open on mobile/tablet */}
      {drawerOpen && (
        <div className="drawer-blur-overlay" onClick={closeDrawer}></div>
      )}
      <motion.div
        className="Header_main sticky-navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showNavbar ? 0 : -120, opacity: showNavbar ? 1 : 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <div className="header_child navbar-flex" style={{ paddingLeft: 0 }}>
          <div className="Logo_div" style={{ marginLeft: 0, paddingLeft: 0 }}>
            <Link
              to="/"
              className="logo-text"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 0,
                marginLeft: 0,
                paddingLeft: 0,
              }}
            >
              <img
                src={mainLogo}
                alt="American Design Eagle Logo"
                style={{
                  height: isMobile ? 80 : 130,
                  width: "auto",
                  objectFit: "contain",
                  marginLeft: 0,
                  paddingLeft: 30,
                }}
              />
            </Link>
          </div>
          {/* Centered menu on desktop */}
          <ul className="inline-menu hide-on-mobile">
            {menuItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="dropdown-wrapper"
                  style={{ display: "inline-block" }}
                >
                  <li
                    className="dropdown-parent"
                    ref={openDropdown === item.label ? dropdownRef : null}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <FiChevronDown
                      className={`dropdown-arrow${
                        openDropdown === item.label ? " open" : ""
                      }`}
                    />
                    <ul
                      className={`dropdown-menu${
                        openDropdown === item.label ? " show" : ""
                      }`}
                    >
                      {item.dropdown.map((sub, idx) =>
                        sub.path ? (
                          <li key={sub.label + idx}>
                            <Link to={sub.path} className="nav-link">
                              {sub.label}
                            </Link>
                          </li>
                        ) : (
                          <li key={sub.label + idx}>{sub.label}</li>
                        )
                      )}
                    </ul>
                  </li>
                </div>
              ) : (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className={`nav-link ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="right-section">
            <a
              href="mailto:info@example.com"
              className="circle-icon"
              aria-label="Email"
            >
              <FiMail className="icon-black" />
            </a>
            <a href="tel:1234567890" className="circle-icon" aria-label="Call">
              <FiPhone className="icon-black" />
            </a>
            {/* Hamburger menu only on mobile/tablet */}
            <FiMenu
              className="menu-icon show-on-mobile"
              onClick={handleDrawer}
            />
          </div>
        </div>
      </motion.div>
      {/* Drawer only on mobile/tablet */}
      <div
        className={`drawer ${drawerOpen ? "open" : ""} show-on-mobile`}
        onClick={closeDrawer}
      >
        <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
          <FiX className="close-icon" onClick={closeDrawer} />
          <ul className="drawer-menu">
            {menuItems.map((item) =>
              item.dropdown ? (
                <React.Fragment key={item.label}>
                  <li
                    className="drawer-dropdown-parent"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMobileDropdown(
                        openMobileDropdown === item.label ? null : item.label
                      );
                    }}
                  >
                    {item.label}
                    <FiChevronDown
                      className={`drawer-dropdown-arrow${
                        openMobileDropdown === item.label ? " open" : ""
                      }`}
                    />
                  </li>
                  <div
                    className={`drawer-subitems-wrapper${
                      openMobileDropdown === item.label ? " open" : ""
                    }`}
                  >
                    {openMobileDropdown === item.label &&
                      item.dropdown.map((sub, idx) =>
                        sub.path ? (
                          <li key={sub.label + idx} className="drawer-subitem">
                            <Link
                              to={sub.path}
                              className="nav-link"
                              onClick={closeDrawer}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ) : (
                          <li key={sub.label + idx} className="drawer-subitem">
                            - {sub.label}
                          </li>
                        )
                      )}
                  </div>
                </React.Fragment>
              ) : (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className={`nav-link ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                    onClick={closeDrawer}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
