import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home_Page from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// 404 Page Component
const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "20px", color: "#CA0F38" }}>
        404
      </h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Page Not Found</h2>
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "30px",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        style={{
          padding: "12px 24px",
          background: "#CA0F38",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          fontSize: "1.1rem",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.background = "#a00d2e")}
        onMouseOut={(e) => (e.target.style.background = "#CA0F38")}
      >
        Go Home
      </a>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="background-light-topright"></div>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
