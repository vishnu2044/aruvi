import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import { scrollToSection } from "../utils/helpers";
import logoImg from "../assets/logos/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Process", path: "/process" },
  { label: "About", path: "/#about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNav = useCallback(
    (path) => {
      setMobileOpen(false);
      navigate(path);
    },
    [navigate]
  );

  // After navigating to /#section from an inner page, scroll to the section
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = setTimeout(() => scrollToSection(id), 200);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        {/* Brand */}
        <button
          className="navbar-brand"
          onClick={() => navigate("/")}
          aria-label="Go to home"
          type="button"
        >
          <img
            src={logoImg}
            alt={`${siteConfig.name} logo`}
            className="navbar-brand-logo"
            width="36"
            height="36"
          />
          <div className="navbar-brand-text">
            <span className="navbar-brand-name">{siteConfig.name}</span>
            <span className="navbar-brand-role">{siteConfig.tagline}</span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <button
              key={link.path}
              className="navbar-link"
              onClick={() => handleNav(link.path)}
              type="button"
            >
              {link.label}
            </button>
          ))}
          <button
            className="navbar-cta"
            onClick={() => handleNav("/contact")}
            type="button"
          >
            Let's Build
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger${mobileOpen ? " open" : ""}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} aria-hidden={!mobileOpen}>
        {navLinks.map((link) => (
          <button
            key={link.path}
            className="mobile-menu-link"
            onClick={() => handleNav(link.path)}
            tabIndex={mobileOpen ? 0 : -1}
            type="button"
          >
            {link.label}
          </button>
        ))}
        <button
          className="mobile-menu-cta"
          onClick={() => handleNav("/contact")}
          tabIndex={mobileOpen ? 0 : -1}
          type="button"
        >
          Let's Build
        </button>
      </div>
    </nav>
  );
}
