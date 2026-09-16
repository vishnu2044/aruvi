import {
  HiOutlinePencilSquare,
  HiOutlineDevicePhoneMobile,
  HiOutlineBolt,
  HiOutlineMagnifyingGlass,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import useReveal from "../hooks/useReveal";

const features = [
  {
    title: "Custom Design",
    description: "Designed around your business, audience and goals instead of using a generic one-size-fits-all layout.",
    icon: HiOutlinePencilSquare,
  },
  {
    title: "Mobile Responsive",
    description: "Your website works properly across phones, tablets and desktop screens.",
    icon: HiOutlineDevicePhoneMobile,
  },
  {
    title: "Fast Performance",
    description: "Built with performance in mind for a smooth and fast browsing experience.",
    icon: HiOutlineBolt,
  },
  {
    title: "SEO-ready Structure",
    description: "Clean page structure and essential SEO foundations to help search engines understand your website.",
    icon: HiOutlineMagnifyingGlass,
  },
  {
    title: "Easy Enquiries",
    description: "WhatsApp, email, contact forms and other enquiry options can be integrated based on your business needs.",
    icon: HiOutlineChatBubbleOvalLeftEllipsis,
  },
  {
    title: "Launch Support",
    description: "Help with domain, hosting, deployment and getting your website ready to go live.",
    icon: HiOutlineRocketLaunch,
  },
];

export default function WhatYouGet() {
  const headerRef = useReveal();

  return (
    <section className="section what-you-get" id="features">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Features</span>
          <h2 className="section-title">What you get with your website</h2>
          <p className="section-subtitle">
            Everything you need to launch a professional online presence without unnecessary complexity.
          </p>
        </div>

        <div className="what-you-get-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  const ref = useReveal();
  const Icon = feature.icon;

  return (
    <div className="what-you-get-card reveal" ref={ref}>
      <div className="what-you-get-icon">
        <Icon />
      </div>
      <h3 className="what-you-get-title">{feature.title}</h3>
      <p className="what-you-get-description">{feature.description}</p>
    </div>
  );
}
