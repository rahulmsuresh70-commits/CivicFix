import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  MessageSquare,
  Headset,
  FileText,
  ShieldCheck,
  Clock,
  Send,
  User,
  AtSign,
  Phone,
  ChevronDown,
  CheckCircle2,
  CircleHelp,
} from "lucide-react";

import PublicNavbar from "../../components/public/PublicNavbar";
import PublicFooter from "../../components/public/PublicFooter";
import "./Contact.css";

const contactTopics = [
  {
    icon: FileText,
    title: "Complaint-related queries",
    description:
      "Need help understanding complaint submission, status updates, or the complaint process?",
    link: "/how-it-works",
    linkText: "Explore how it works",
  },
  {
    icon: ShieldCheck,
    title: "Account assistance",
    description:
      "Find guidance about citizen registration, login, and accessing your CivicFix account.",
    link: "/login",
    linkText: "Go to citizen login",
  },
  {
    icon: MessageSquare,
    title: "Department information",
    description:
      "Find information about the departments responsible for handling civic complaints.",
    link: "/departments",
    linkText: "View departments",
  },
];

const faqs = [
  {
    question: "How can I report a civic issue?",
    answer:
      "Create a citizen account, sign in, and use the complaint submission facility to provide the issue details and supporting information.",
  },
  {
    question: "How can I check my complaint status?",
    answer:
      "Sign in to your citizen account and access your complaints to review the status information available for your submitted reports.",
  },
  {
    question: "Which department handles my complaint?",
    answer:
      "The responsible department depends on the category and location of the reported issue. Visit the Departments page to explore the available departments.",
  },
  {
    question: "Can I reopen a resolved complaint?",
    answer:
      "The ability to reopen a complaint depends on its current status and the actions permitted by the CivicFix complaint workflow.",
  },
];

function ContactArrow() {
  return <ArrowRight size={17} aria-hidden="true" />;
}

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formMessage, setFormMessage] = useState("");

  const updateForm = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFormMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // The current backend source does not establish a public
    // contact-message submission endpoint.
    setFormMessage(
      "Your details have been validated, but message submission is not connected to the backend yet."
    );
  };

  return (
    <div className="public-site contact-page">
      <PublicNavbar />

      <main>
        {/* CONTACT HERO */}

        <section className="contact-hero">
          <div className="contact-hero-decoration contact-decoration-one" />
          <div className="contact-hero-decoration contact-decoration-two" />

          <div className="container contact-hero-inner">
            <div className="contact-hero-content">
              <span className="hero-badge">
                <span className="hero-badge-dot" />
                WE ARE HERE TO HELP
              </span>

              <h1>
                Let's make your
                <br />
                <span>voice heard.</span>
              </h1>

              <p className="contact-hero-description">
                Have a question about CivicFix? Need guidance
                with reporting a civic issue or using the
                citizen portal? Find the right information
                and explore the available support resources.
              </p>

              <div className="contact-hero-actions">
                <a
                  href="#contact-form"
                  className="button button-primary button-large"
                >
                  Send a Message
                  <ContactArrow />
                </a>

                <Link
                  to="/how-it-works"
                  className="button button-secondary button-large"
                >
                  How It Works
                </Link>
              </div>

              <div className="contact-hero-assurance">
                <span className="contact-assurance-icon">
                  <ShieldCheck size={22} />
                </span>

                <div>
                  <strong>Citizen-focused assistance</strong>
                  <span>
                    Find guidance about the CivicFix complaint
                    and citizen service process.
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-hero-visual">
              <div className="contact-visual-glow" />

              <div className="contact-visual-card">
                <div className="contact-visual-top">
                  <div className="contact-visual-brand">
                    <span className="contact-visual-brand-icon">
                      <Headset size={20} />
                    </span>

                    <div>
                      <strong>CivicFix Support</strong>
                      <span>Citizen assistance centre</span>
                    </div>
                  </div>

                  <span className="contact-visual-status">
                    <span />
                    SUPPORT
                  </span>
                </div>

                <div className="contact-visual-body">
                  <span className="contact-visual-eyebrow">
                    HOW CAN WE HELP?
                  </span>

                  <h2>
                    We're here to make
                    things clearer.
                  </h2>

                  <p>
                    Choose the topic you need help with and
                    explore the available CivicFix resources.
                  </p>

                  <div className="contact-visual-options">
                    <div>
                      <span className="contact-option-icon blue">
                        <FileText size={19} />
                      </span>

                      <div>
                        <strong>Complaint guidance</strong>
                        <span>Reporting and tracking</span>
                      </div>

                      <ArrowRight size={17} />
                    </div>

                    <div>
                      <span className="contact-option-icon purple">
                        <User size={19} />
                      </span>

                      <div>
                        <strong>Account assistance</strong>
                        <span>Citizen portal support</span>
                      </div>

                      <ArrowRight size={17} />
                    </div>

                    <div>
                      <span className="contact-option-icon green">
                        <MessageSquare size={19} />
                      </span>

                      <div>
                        <strong>Department information</strong>
                        <span>Find the right department</span>
                      </div>

                      <ArrowRight size={17} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-floating-card">
                <span>
                  <CheckCircle2 size={21} />
                </span>

                <div>
                  <strong>Clear information</strong>
                  <small>Better citizen experience</small>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-bottom-line" />
        </section>

        {/* CONTACT OPTIONS */}

        <section className="section contact-options-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                GET THE RIGHT GUIDANCE
              </span>

              <h2>
                How can we
                <br />
                help you today?
              </h2>

              <p>
                Explore the available CivicFix resources to
                find information about complaints, citizen
                accounts, and department services.
              </p>
            </div>

            <div className="contact-options-grid">
              {contactTopics.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    className="contact-option-card"
                    key={item.title}
                  >
                    <div className="contact-option-card-top">
                      <span className={`contact-option-card-icon icon-${index}`}>
                        <Icon size={24} />
                      </span>

                      <span className="contact-option-number">
                        0{index + 1}
                      </span>
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <Link
                      to={item.link}
                      className="feature-link"
                    >
                      {item.linkText}
                      <ContactArrow />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* MESSAGE FORM */}

        <section
          className="section contact-form-section"
          id="contact-form"
        >
          <div className="container contact-form-layout">
            <div className="contact-form-intro">
              <span className="eyebrow">
                CONTACT CIVICFIX
              </span>

              <h2>
                Have something
                <br />
                to tell us?
              </h2>

              <p>
                Use the form to prepare your enquiry. The
                current project backend does not yet expose
                a verified public contact-message endpoint,
                so this form does not claim to send or store
                your message.
              </p>

              <div className="contact-help-list">
                <div className="contact-help-item">
                  <span>
                    <CircleHelp size={19} />
                  </span>

                  <div>
                    <strong>Need help using CivicFix?</strong>
                    <p>
                      Explore the complaint process and
                      citizen portal information.
                    </p>
                  </div>
                </div>

                <div className="contact-help-item">
                  <span>
                    <Clock size={19} />
                  </span>

                  <div>
                    <strong>Looking for an update?</strong>
                    <p>
                      Check your complaint status through
                      your citizen account.
                    </p>
                  </div>
                </div>

                <div className="contact-help-item">
                  <span>
                    <ShieldCheck size={19} />
                  </span>

                  <div>
                    <strong>Need department details?</strong>
                    <p>
                      Browse the available CivicFix
                      departments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <div className="contact-form-heading">
                <div className="contact-form-heading-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <h3>Send an enquiry</h3>
                  <p>
                    Fill in the details below.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <label className="contact-field">
                    <span>
                      Full Name <b>*</b>
                    </span>

                    <div className="contact-input-wrap">
                      <User size={17} />

                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={updateForm}
                        maxLength={120}
                        autoComplete="name"
                        required
                      />
                    </div>
                  </label>

                  <label className="contact-field">
                    <span>
                      Email Address <b>*</b>
                    </span>

                    <div className="contact-input-wrap">
                      <AtSign size={17} />

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={updateForm}
                        maxLength={254}
                        autoComplete="email"
                        required
                      />
                    </div>
                  </label>

                  <label className="contact-field contact-field-full">
                    <span>
                      Subject <b>*</b>
                    </span>

                    <div className="contact-input-wrap">
                      <MessageSquare size={17} />

                      <input
                        type="text"
                        name="subject"
                        placeholder="What would you like to ask about?"
                        value={form.subject}
                        onChange={updateForm}
                        maxLength={180}
                        required
                      />
                    </div>
                  </label>

                  <label className="contact-field contact-field-full">
                    <span>
                      Your Message <b>*</b>
                    </span>

                    <textarea
                      name="message"
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={updateForm}
                      rows={6}
                      maxLength={3000}
                      required
                    />
                  </label>
                </div>

                {formMessage && (
                  <div
                    className="contact-form-notice"
                    role="status"
                  >
                    <CircleHelp size={18} />
                    <span>{formMessage}</span>
                  </div>
                )}

                <div className="contact-form-bottom">
                  <p>
                    <ShieldCheck size={15} />
                    Your message is not submitted or stored.
                  </p>

                  <button
                    type="submit"
                    className="button button-primary contact-submit-button"
                  >
                    Validate Message
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="section contact-faq-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                QUICK ANSWERS
              </span>

              <h2>
                Frequently asked
                <br />
                questions.
              </h2>

              <p>
                Find answers to common questions about
                using the CivicFix platform.
              </p>
            </div>

            <div className="contact-faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    className={`contact-faq-item ${isOpen ? "faq-open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="contact-faq-question"
                      onClick={() =>
                        setOpenFaq(isOpen ? -1 : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span className="contact-faq-number">
                        0{index + 1}
                      </span>

                      <strong>{faq.question}</strong>

                      <ChevronDown
                        size={19}
                        className="contact-faq-chevron"
                      />
                    </button>

                    {isOpen && (
                      <div className="contact-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="section contact-cta-section">
          <div className="container">
            <div className="cta-card contact-cta-card">
              <div className="cta-decoration" />

              <div className="cta-content">
                <span className="cta-eyebrow">
                  YOUR CIVICFIX JOURNEY
                </span>

                <h2>
                  Let's build better
                  communities together.
                </h2>

                <p>
                  Join CivicFix and take an active role in
                  reporting civic concerns and following
                  the complaint process.
                </p>

                <div className="cta-actions">
                  <Link
                    to="/register"
                    className="button button-white"
                  >
                    Get Started
                    <ContactArrow />
                  </Link>

                  <Link
                    to="/login"
                    className="cta-login-link"
                  >
                    Already registered?
                    <strong> Sign in</strong>
                  </Link>
                </div>
              </div>

              <div className="cta-art" aria-hidden="true">
                <div className="cta-art-circle">
                  <div className="cta-art-inner">
                    <Headset size={65} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}