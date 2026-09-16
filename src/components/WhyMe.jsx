import {
  HiOutlineUser,
  HiOutlineCurrencyRupee,
  HiOutlineDevicePhoneMobile,
  HiOutlineBolt,
} from "react-icons/hi2";
import useReveal from "../hooks/useReveal";

const reasons = [
  {
    title: "Direct Communication",
    description: "You work directly with the person designing and building your website.",
    icon: HiOutlineUser,
  },
  {
    title: "No Agency Overhead",
    description: "Get a professional website without the unnecessary complexity of a large agency team.",
    icon: HiOutlineCurrencyRupee,
  },
  {
    title: "Built Around Your Business",
    description: "Your website is shaped around your services, customers and goals.",
    icon: HiOutlineDevicePhoneMobile,
  },
  {
    title: "Simple & Practical",
    description: "No unnecessary features. Just a website that does what your business actually needs.",
    icon: HiOutlineBolt,
  },
];

export default function WhyMe() {
  const headerRef = useReveal();

  return (
    <section className="section why-me" id="why-me">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Why Me</span>
          <h2 className="section-title">
            Why work with me?
          </h2>
        </div>

        <div className="why-me-grid">
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} reason={reason} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason }) {
  const ref = useReveal();
  const Icon = reason.icon;

  return (
    <div className="why-me-item reveal" ref={ref}>
      <div className="why-me-icon" aria-hidden="true">
        <Icon />
      </div>
      <h3 className="why-me-title">{reason.title}</h3>
      <p className="why-me-description">{reason.description}</p>
    </div>
  );
}
