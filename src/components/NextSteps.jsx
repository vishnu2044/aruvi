import useReveal from "../hooks/useReveal";

const steps = [
  {
    number: "01",
    title: "Tell me about your business",
    description: "Send a quick enquiry through the form, WhatsApp or email.",
  },
  {
    number: "02",
    title: "We discuss your requirements",
    description: "I'll understand what you need, your goals and the type of website that fits your business.",
  },
  {
    number: "03",
    title: "You receive a project proposal",
    description: "I'll outline the recommended scope, features, timeline and project cost.",
  },
  {
    number: "04",
    title: "We start building",
    description: "Once everything is agreed, the design and development process begins.",
  },
];

export default function NextSteps() {
  const headerRef = useReveal();

  return (
    <section className="section next-steps" id="next-steps">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Next Steps</span>
          <h2 className="section-title">What happens after you send an enquiry?</h2>
        </div>

        <div className="next-steps-grid">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }) {
  const ref = useReveal();

  return (
    <div 
      className="next-steps-card reveal" 
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="next-steps-number">{step.number}</div>
      <h3 className="next-steps-title">{step.title}</h3>
      <p className="next-steps-description">{step.description}</p>
    </div>
  );
}
