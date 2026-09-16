import { HiArrowRight } from "react-icons/hi2";
import { scrollToSection } from "../utils/helpers";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        {/* Content */}
        <div className="hero-content">
          <div className="hero-availability">
            <span className="hero-availability-dot" aria-hidden="true"></span>
            Available for new projects
          </div>

          <h1 className="hero-title">
            Professional websites for small businesses.
          </h1>

          <p className="hero-subtitle">
            I design and build fast, modern websites that help businesses look professional, attract customers and make it easy for people to get in touch.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("contact")}
              type="button"
            >
              Start a Project <HiArrowRight />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("portfolio")}
              type="button"
            >
              View My Work <HiArrowRight />
            </button>
          </div>

          <div className="hero-trust" aria-label="Services offered">
            <span>Business Websites</span>
            <span>Landing Pages</span>
            <span>Portfolio Websites</span>
            <span>Website Redesigns</span>
          </div>
        </div>

        {/* Visual */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-mockup">
            <div className="hero-mockup-toolbar">
              <span className="hero-mockup-dot"></span>
              <span className="hero-mockup-dot"></span>
              <span className="hero-mockup-dot"></span>
              <span className="hero-mockup-url">yourbusiness.com</span>
            </div>
            <div className="hero-mockup-body">
              <div className="hero-mockup-nav">
                <div className="hero-mockup-logo"></div>
                <div className="hero-mockup-nav-links">
                  <span className="hero-mockup-nav-link"></span>
                  <span className="hero-mockup-nav-link"></span>
                  <span className="hero-mockup-nav-link"></span>
                </div>
              </div>
              <div className="hero-mockup-headline">
                <div className="hero-mockup-headline-bar"></div>
                <div className="hero-mockup-headline-bar"></div>
              </div>
              <div>
                <div className="hero-mockup-text-bar"></div>
                <div className="hero-mockup-text-bar"></div>
                <div className="hero-mockup-text-bar"></div>
              </div>
              <div className="hero-mockup-btn-placeholder"></div>
              <div className="hero-mockup-grid">
                <div className="hero-mockup-card"></div>
                <div className="hero-mockup-card"></div>
                <div className="hero-mockup-card"></div>
              </div>
            </div>
          </div>

          {/* Floating Labels */}
          <div className="hero-labels">
            <span className="hero-label">Responsive</span>
            <span className="hero-label">Fast</span>
            <span className="hero-label">Mobile First</span>
            <span className="hero-label">SEO Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
