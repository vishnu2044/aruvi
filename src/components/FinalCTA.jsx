import { HiArrowRight } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import useReveal from "../hooks/useReveal";

export default function FinalCTA() {
  const ref = useReveal();

  return (
    <section className="section final-cta" id="final-cta">
      <div className="container">
        <div className="final-cta-content reveal" ref={ref}>
          <h2 className="final-cta-title">Ready to build your website?</h2>
          <p className="final-cta-subtitle">
            Tell me a little about your business and what you need. I'll get back to you with the next steps.
          </p>
          <div className="final-cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Start a Project <HiArrowRight />
            </Link>
            <a 
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
