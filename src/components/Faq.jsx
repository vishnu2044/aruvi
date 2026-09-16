import { useState, useRef, useEffect } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";
import useReveal from "../hooks/useReveal";

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Every project is different. The cost depends on the number of pages, design requirements and functionality. I'll understand your requirements first and provide a project-specific quote."
  },
  {
    question: "How long does a website take to build?",
    answer: "The timeline depends on the scope of the project, content and required functionality. After discussing your requirements, I'll provide an estimated timeline."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes. I can improve an existing website's design, mobile experience, performance, structure and content presentation."
  },
  {
    question: "Can you add WhatsApp and contact forms?",
    answer: "Yes. WhatsApp, contact forms, email links, booking enquiries and similar functionality can be added depending on the project."
  },
  {
    question: "Do you help with domain and hosting?",
    answer: "Yes. I can help with the setup, deployment and getting the website live."
  },
  {
    question: "Can you maintain the website after launch?",
    answer: "If you need ongoing updates or improvements, we can discuss a maintenance or update arrangement based on your requirements."
  }
];

export default function Faq() {
  const headerRef = useReveal();

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  const revealRef = useReveal();

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div 
      className={`faq-item reveal ${isOpen ? 'is-open' : ''}`} 
      ref={revealRef}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <button 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <span className="faq-icon" aria-hidden="true">
          {isOpen ? <HiMinus /> : <HiPlus />}
        </span>
      </button>
      <div 
        className="faq-answer-wrapper" 
        style={{ height: `${height}px` }}
        aria-hidden={!isOpen}
      >
        <div className="faq-answer" ref={contentRef}>
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
