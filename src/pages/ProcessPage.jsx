import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowUpRight } from "react-icons/hi2";
import useReveal from "../hooks/useReveal";

export default function ProcessPage() {
  const headerRef = useReveal();
  const timelineRef = useReveal();
  const afterLaunchRef = useReveal();
  const expectRef = useReveal();

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Link to="/" className="page-back-link">
            <HiArrowLeft /> Back to Home
          </Link>
          <div className="page-hero-content reveal" ref={headerRef}>
            <span className="section-label">PROCESS</span>
            <h1 className="page-hero-title">We build it together</h1>
            <p className="page-hero-subtitle">
              A simple, collaborative process from the first conversation to launch — with your ideas and feedback involved throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="process-page-timeline reveal" ref={timelineRef}>
            
            <div className="process-timeline-step visible">
              <div className="process-timeline-left">
                <div className="process-timeline-number">01</div>
                <div className="process-timeline-line" aria-hidden="true" />
              </div>
              <div className="process-timeline-content">
                <span className="process-card-tag-dot" aria-hidden="true" />
                <span className="process-tag-inline">DISCOVER & UNDERSTAND</span>
                <h3 className="process-timeline-title">Start with your business</h3>
                <p className="process-timeline-description">We start by understanding your business, services, customers, brand and what you want the website to achieve.</p>
                <div className="service-type-meta" style={{marginTop: '20px', paddingTop: '0', border: 'none'}}>
                  <ul className="service-type-list">
                    <li>Business goals</li>
                    <li>Target customers</li>
                    <li>Services & content</li>
                    <li>Website requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="process-timeline-step visible">
              <div className="process-timeline-left">
                <div className="process-timeline-number">02</div>
                <div className="process-timeline-line" aria-hidden="true" />
              </div>
              <div className="process-timeline-content">
                <span className="process-card-tag-dot" aria-hidden="true" />
                <span className="process-tag-inline">PLAN TOGETHER</span>
                <h3 className="process-timeline-title">Shape the website</h3>
                <p className="process-timeline-description">We work through the structure, content and visual direction so the website feels right for your business before development begins.</p>
                <div className="service-type-meta" style={{marginTop: '20px', paddingTop: '0', border: 'none'}}>
                  <ul className="service-type-list">
                    <li>Page structure</li>
                    <li>Content organisation</li>
                    <li>Visual direction</li>
                    <li>User experience</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="process-timeline-step visible">
              <div className="process-timeline-left">
                <div className="process-timeline-number">03</div>
                <div className="process-timeline-line" aria-hidden="true" />
              </div>
              <div className="process-timeline-content">
                <span className="process-card-tag-dot" aria-hidden="true" />
                <span className="process-tag-inline">BUILD & REFINE</span>
                <h3 className="process-timeline-title">Turn the idea into a website</h3>
                <p className="process-timeline-description">I develop the website, test it across devices and refine the details based on your feedback.</p>
                <div className="service-type-meta" style={{marginTop: '20px', paddingTop: '0', border: 'none'}}>
                  <ul className="service-type-list">
                    <li>Development</li>
                    <li>Mobile responsiveness</li>
                    <li>Performance</li>
                    <li>Feedback & revisions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="process-timeline-step visible">
              <div className="process-timeline-left">
                <div className="process-timeline-number">04</div>
              </div>
              <div className="process-timeline-content">
                <span className="process-card-tag-dot" aria-hidden="true" />
                <span className="process-tag-inline">LAUNCH & CONTINUE</span>
                <h3 className="process-timeline-title">Go live — and keep improving</h3>
                <p className="process-timeline-description">Once everything is approved, I help get the website live. And when your business changes, we can continue updating and improving the website.</p>
                <div className="service-type-meta" style={{marginTop: '20px', paddingTop: '0', border: 'none'}}>
                  <ul className="service-type-list">
                    <li>Final review</li>
                    <li>Launch</li>
                    <li>Content updates</li>
                    <li>Future improvements</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION — AFTER LAUNCH */}
      <section className="section" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="section-header reveal" ref={afterLaunchRef}>
            <span className="section-label">AFTER LAUNCH</span>
            <h2 className="section-title">The work doesn't have to stop at launch</h2>
            <p className="section-subtitle">
              Your business will change over time. Your website can change with it.
            </p>
          </div>
          
          <div className="future-support-grid">
            <div className="future-support-card">
              <div className="philosophy-num" style={{marginBottom: '12px'}}>01</div>
              <h3 className="future-support-title">New Content</h3>
              <p className="future-support-desc">Add new services, projects, testimonials, images or pages.</p>
            </div>
            <div className="future-support-card">
              <div className="philosophy-num" style={{marginBottom: '12px'}}>02</div>
              <h3 className="future-support-title">New Features</h3>
              <p className="future-support-desc">Introduce bookings, forms, integrations, galleries or other functionality when you need them.</p>
            </div>
            <div className="future-support-card">
              <div className="philosophy-num" style={{marginBottom: '12px'}}>03</div>
              <h3 className="future-support-title">Improvements</h3>
              <p className="future-support-desc">Refresh the design, improve performance or make changes based on how your business evolves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION — WHAT YOU CAN EXPECT */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-header reveal" ref={expectRef}>
            <h2 className="section-title">What you can expect</h2>
          </div>
          <div className="expect-grid">
            <div className="expect-card">
              <h3 className="expect-title">Clear communication</h3>
              <p className="expect-desc">I'll keep you involved and make the process easy to understand.</p>
            </div>
            <div className="expect-card">
              <h3 className="expect-title">Your feedback matters</h3>
              <p className="expect-desc">The website is refined based on your feedback throughout the project.</p>
            </div>
            <div className="expect-card">
              <h3 className="expect-title">No cookie-cutter approach</h3>
              <p className="expect-desc">The website is shaped around your business instead of forcing your business into a template.</p>
            </div>
            <div className="expect-card">
              <h3 className="expect-title">Room to grow</h3>
              <p className="expect-desc">We can start with the essentials and expand the website later.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-box">
            <h2>Ready to build something together?</h2>
            <p>Tell me about your business, what you need and where you'd like to take it. We'll figure out the next step together.</p>
            <Link to="/contact" className="btn btn-primary">
              Let's Talk <HiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
