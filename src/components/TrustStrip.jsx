import { HiCheck } from "react-icons/hi2";
import useReveal from "../hooks/useReveal";

const features = [
  "Mobile-friendly",
  "Fast loading",
  "SEO-ready",
  "WhatsApp & enquiry integration",
  "Custom design",
];

export default function TrustStrip() {
  const ref = useReveal();

  return (
    <div className="trust-strip reveal" ref={ref}>
      <div className="container">
        <ul className="trust-strip-list">
          {features.map((feature, index) => (
            <li key={index} className="trust-strip-item">
              <HiCheck className="trust-strip-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
