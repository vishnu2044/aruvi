import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import useReveal from "../hooks/useReveal";

const industries = [
  { 
    label: "Restaurants & Cafés", 
    emoji: "☕", 
    desc: "Menus, locations, reservations & enquiries" 
  },
  { 
    label: "Interior Designers", 
    emoji: "🛋️", 
    desc: "Project galleries, services & enquiries" 
  },
  { 
    label: "Salons & Spas", 
    emoji: "💆", 
    desc: "Services, pricing, location & appointments" 
  },
  { 
    label: "Photographers", 
    emoji: "📸", 
    desc: "Portfolio, galleries & booking enquiries" 
  },
  { 
    label: "Consultants", 
    emoji: "💼", 
    desc: "Professional profile, services & lead enquiries" 
  },
  { 
    label: "Clinics & Healthcare", 
    emoji: "⚕️", 
    desc: "Services, doctors & appointment booking" 
  },
  { 
    label: "Construction & Trades", 
    emoji: "🏗️", 
    desc: "Services, projects & customer enquiries" 
  },
  { 
    label: "Local Services", 
    emoji: "📍", 
    desc: "Services, locations & easy contact" 
  },
];

export default function Industries() {
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="section industries" id="industries">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Who I Build For</span>
          <h2 className="section-title">Is your business here?</h2>
          <p className="section-subtitle">
            I build websites for businesses like yours.
          </p>
        </div>

        <div className="industries-grid reveal" ref={gridRef}>
          {industries.map((item) => (
            <Link to="/services" key={item.label} className="industry-card">
              <span className="industry-card-emoji" aria-hidden="true">
                {item.emoji}
              </span>
              <div className="industry-card-content">
                <span className="industry-card-label">{item.label}</span>
                <span className="industry-card-desc">{item.desc}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="section-footer reveal" style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link to="/services" className="btn btn-secondary">
            Explore Services <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
