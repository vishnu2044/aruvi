import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import industries from "../data/industries";
import { HiArrowLeft, HiArrowUpRight, HiCheckBadge } from "react-icons/hi2";
import useReveal from "../hooks/useReveal";

export default function ServicesPage() {
  const headerRef = useReveal();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = setTimeout(() => {
        const el = document.getElementById("industry-picker");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const whatIBuildRef = useReveal();
  const philosophyRef = useReveal();
  const industryRef = useReveal();
  const futureRef = useReveal();

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Link to="/" className="page-back-link">
            <HiArrowLeft /> Back to Home
          </Link>
          <div className="page-hero-content reveal" ref={headerRef}>
            <span className="section-label">WHAT I CAN OFFER</span>
            <h1 className="page-hero-title">Services</h1>
            <p className="page-hero-subtitle">
              Every website is tailored to your business goals — from the first idea to future updates and improvements.
            </p>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal" ref={whatIBuildRef}>
            <span className="section-label">SERVICE TYPES</span>
            <h2 className="section-title">What I build</h2>
            <p className="section-subtitle">
              Whether you're starting from scratch or improving an existing website, I focus on building something useful, clear and easy to grow.
            </p>
          </div>
          
          <div className="services-type-grid">
            <div className="service-type-card">
              <h3 className="service-type-title">Business Websites</h3>
              <p className="service-type-desc">Professional websites that explain what you do, build trust with visitors and make it easy for customers to contact you.</p>
              <div className="service-type-meta">
                <h4>Suitable For</h4>
                <ul className="service-type-list">
                  <li>Small Businesses</li>
                  <li>Service Businesses</li>
                  <li>Consultants</li>
                  <li>Agencies</li>
                </ul>
                <h4 style={{marginTop: '16px'}}>Key Features</h4>
                <ul className="service-type-list">
                  <li>Responsive design</li>
                  <li>Clear service presentation</li>
                  <li>Contact & enquiry options</li>
                  <li>Mobile-first experience</li>
                </ul>
              </div>
            </div>

            <div className="service-type-card">
              <h3 className="service-type-title">Portfolio Websites</h3>
              <p className="service-type-desc">Websites designed to showcase your work, projects and experience in a way that makes your work easy to explore and understand.</p>
              <div className="service-type-meta">
                <h4>Suitable For</h4>
                <ul className="service-type-list">
                  <li>Photographers</li>
                  <li>Designers</li>
                  <li>Architects</li>
                  <li>Freelancers</li>
                </ul>
                <h4 style={{marginTop: '16px'}}>Key Features</h4>
                <ul className="service-type-list">
                  <li>Project galleries</li>
                  <li>Image-focused layouts</li>
                  <li>Work categorisation</li>
                  <li>Easy future updates</li>
                </ul>
              </div>
            </div>

            <div className="service-type-card">
              <h3 className="service-type-title">Landing Pages</h3>
              <p className="service-type-desc">Focused pages designed around a specific goal such as enquiries, bookings, campaigns, services or lead generation.</p>
              <div className="service-type-meta">
                <h4>Key Features</h4>
                <ul className="service-type-list">
                  <li>Clear messaging</li>
                  <li>Strong call-to-actions</li>
                  <li>Mobile-first design</li>
                  <li>Fast loading</li>
                </ul>
              </div>
            </div>

            <div className="service-type-card">
              <h3 className="service-type-title">Website Updates & Refresh</h3>
              <p className="service-type-desc">Improve an existing website with a cleaner design, better mobile experience, updated content, improved performance or new sections.</p>
              <div className="service-type-meta">
                <h4>Key Features</h4>
                <ul className="service-type-list">
                  <li>Design refresh</li>
                  <li>Responsive fixes</li>
                  <li>Content updates</li>
                  <li>Performance improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION — WHAT MAKES THE APPROACH DIFFERENT */}
      <section className="section" style={{ background: "var(--bg-surface-2)" }}>
        <div className="container">
          <div className="section-header reveal" ref={philosophyRef}>
            <span className="section-label">WHY WORK WITH ME</span>
            <h2 className="section-title">More than just a website</h2>
            <p className="section-subtitle">
              I don't just build a website and hand it over. We work together throughout the project, and your website can continue to evolve as your business changes.
            </p>
          </div>
          
          <div className="philosophy-list">
            <div className="philosophy-item">
              <div className="philosophy-num">01</div>
              <div className="philosophy-title">Built around your business</div>
              <div className="philosophy-desc">No one-size-fits-all approach. The structure, content and design are shaped around your business, customers and goals.</div>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-num">02</div>
              <div className="philosophy-title">Built to grow</div>
              <div className="philosophy-desc">Start with what you need today and add new pages, content, features or integrations when you need them.</div>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-num">03</div>
              <div className="philosophy-title">Support after launch</div>
              <div className="philosophy-desc">Your website doesn't have to stay the same after launch. I can help with content changes, improvements, new sections and future updates.</div>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-num">04</div>
              <div className="philosophy-title">Direct collaboration</div>
              <div className="philosophy-desc">You communicate directly with the person designing and building your website, keeping feedback and decisions simple.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Industry Picker */}
      <section
        className="section"
        id="industry-picker"
      >
        <div className="container">
          <div className="section-header reveal" ref={industryRef}>
            <span className="section-label">WHO I BUILD FOR</span>
            <h2 className="section-title">Built around your kind of business</h2>
            <p className="section-subtitle">
              Different businesses need different websites. Select an industry to see the type of website, features and content I would focus on.
            </p>
          </div>
          <IndustryPicker initialHash={location.hash} />
        </div>
      </section>

      {/* NEW SECTION — FUTURE SUPPORT */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-header reveal" ref={futureRef}>
            <span className="section-label">AFTER LAUNCH</span>
            <h2 className="section-title">Your website can grow with your business</h2>
            <p className="section-subtitle">
              Your first website doesn't need to contain everything. We can start with what your business needs today and add more as your needs change.
            </p>
          </div>
          
          <div className="future-support-grid">
            <div className="future-support-card">
              <h3 className="future-support-title">New Content</h3>
              <p className="future-support-desc">Add new services, projects, images, testimonials and pages.</p>
            </div>
            <div className="future-support-card">
              <h3 className="future-support-title">New Features</h3>
              <p className="future-support-desc">Add booking systems, forms, galleries, integrations or other functionality when needed.</p>
            </div>
            <div className="future-support-card">
              <h3 className="future-support-title">Ongoing Improvements</h3>
              <p className="future-support-desc">Refresh the design, improve performance or update the experience as your business evolves.</p>
            </div>
          </div>
          
          <div style={{ marginTop: '40px' }}>
            <Link to="/contact" className="section-header-link" style={{ fontSize: '1rem' }}>
              Have something in mind? Let's talk <HiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-box">
            <h2>Have a website in mind?</h2>
            <p>Tell me what you're looking to build or improve, and we can figure out the right approach together.</p>
            <Link to="/contact" className="btn btn-primary">
              Let's Build <HiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Interactive Industry Picker ── */
function IndustryPicker({ initialHash }) {
  const [activeId, setActiveId] = useState(() => {
    if (initialHash) {
      const id = initialHash.slice(1);
      const found = industries.find((i) => i.id === id);
      if (found) return found.id;
    }
    return industries[0].id;
  });

  const active = industries.find((i) => i.id === activeId) || industries[0];

  return (
    <div className="industry-picker">
      {/* Tab row */}
      <div className="industry-picker-tabs" role="tablist" aria-label="Select your industry">
        {industries.map((industry) => (
          <button
            key={industry.id}
            role="tab"
            aria-selected={activeId === industry.id}
            className={`industry-tab${activeId === industry.id ? " active" : ""}`}
            onClick={() => setActiveId(industry.id)}
            type="button"
          >
            <span className="industry-tab-emoji" aria-hidden="true">
              {industry.emoji}
            </span>
            {industry.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="industry-panel" key={activeId} role="tabpanel">
        <div className="industry-panel-inner">
          {/* Left: content */}
          <div className="industry-panel-content">
            <div className="industry-panel-header">
              <span className="industry-panel-emoji" aria-hidden="true">
                {active.emoji}
              </span>
              <div>
                <h3 className="industry-panel-title">{active.label}</h3>
                <span className="industry-panel-badge">{active.websiteType}</span>
              </div>
            </div>

            <p className="industry-panel-tagline">{active.tagline}</p>
            <p className="industry-panel-description">{active.description}</p>

            <div className="industry-panel-features">
              {active.features.map((f) => (
                <div key={f.title} className="industry-panel-feature">
                  <HiCheckBadge className="industry-panel-feature-icon" aria-hidden="true" />
                  <div>
                    <span className="industry-panel-feature-title">{f.title}</span>
                    <span className="industry-panel-feature-detail">{f.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="industry-panel-outcome">
              <span className="industry-panel-outcome-label">Typical Focus</span>
              <span className="industry-panel-outcome-value" style={{ fontWeight: 600, color: 'var(--accent-dark)' }}>{active.outcome}</span>
            </div>
          </div>

          {/* Right: mock browser */}
          <div className="industry-panel-mockup" aria-hidden="true">
            <div className="mock-browser">
              <div className="mock-browser-bar">
                <div className="mock-browser-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="mock-browser-url">aruvi.design/{active.id}</div>
                <div className="mock-browser-live">● Live</div>
              </div>
              <div className="mock-browser-body">
                <div className="mock-content-label">{active.label.toUpperCase()}</div>
                <div className="mock-content-headline">{active.tagline}</div>
                <div className="mock-content-cards">
                  {active.features.slice(0, 2).map((f) => (
                    <div key={f.title} className="mock-content-card">
                      <div className="mock-content-card-label">{f.title.toUpperCase()}</div>
                      <div className="mock-content-card-value">{f.detail}</div>
                    </div>
                  ))}
                </div>
                <div className="mock-content-outcome" style={{ background: 'var(--accent-glow)', color: 'var(--accent-dark)' }}>
                  <span>{active.outcome}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
