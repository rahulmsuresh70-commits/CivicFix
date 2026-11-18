
import React from "react";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Users,
  ClipboardList,
  HeartHandshake,
  MapPin,
  CheckCircle2,
  Building2,
  MessageCircle,
  HandHeart,
} from "lucide-react";

import { Link } from "react-router-dom";

import PublicNavbar from "../../components/public/PublicNavbar";
import PublicFooter from "../../components/public/PublicFooter";

import "./About.css";

function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Transparency",
      description:
        "We believe citizens deserve clear information about their complaints, responsible departments and resolution progress.",
    },
    {
      icon: Users,
      title: "Community Participation",
      description:
        "We encourage citizens to actively participate in improving their neighbourhoods and public spaces.",
    },
    {
      icon: HeartHandshake,
      title: "Responsibility",
      description:
        "We connect citizens with the appropriate departments so that reported problems receive proper attention.",
    },
    {
      icon: CheckCircle2,
      title: "Accountability",
      description:
        "We support a structured complaint management process that makes progress and outcomes easier to track.",
    },
  ];

  const features = [
    {
      icon: ClipboardList,
      title: "Report Civic Issues",
      description:
        "Citizens can submit complaints about public infrastructure, sanitation, roads, drainage and other civic problems.",
    },
    {
      icon: MapPin,
      title: "Location-Based Reporting",
      description:
        "Location information helps identify where a civic issue has occurred and supports the responsible department.",
    },
    {
      icon: Building2,
      title: "Department Coordination",
      description:
        "Complaints can be directed to the relevant departments for review, assignment and action.",
    },
    {
      icon: MessageCircle,
      title: "Track Progress",
      description:
        "Citizens can follow the progress of their submitted complaints and stay informed about updates.",
    },
  ];

  return (
    <>
      <PublicNavbar />

      <main className="about-page">

        {/* HERO SECTION */}

        <section className="about-hero">
          <div className="about-container">

            <div className="about-hero-content">

              <span className="about-eyebrow">
                <span className="about-eyebrow-line" />
                ABOUT CIVICFIX
              </span>

              <h1>
                Building Better Communities
                <span> Through Civic Action.</span>
              </h1>

              <p>
                CivicFix is a civic issue reporting and management
                platform designed to connect citizens with the
                departments responsible for maintaining their
                communities.
              </p>

              <div className="about-hero-actions">

                <Link
                  to="/how-it-works"
                  className="about-primary-button"
                >
                  Discover How It Works
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/departments"
                  className="about-secondary-button"
                >
                  Explore Departments
                </Link>

              </div>

            </div>

            <div className="about-hero-visual">

              <div className="about-visual-card">

                <div className="about-visual-icon">
                  <HeartHandshake size={42} />
                </div>

                <span>One Connected Community</span>

                <h3>
                  Citizens and Departments
                  Working Together
                </h3>

                <div className="about-visual-divider" />

                <div className="about-visual-points">

                  <div>
                    <CheckCircle2 size={17} />
                    Report civic problems
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Connect with departments
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Follow complaint progress
                  </div>

                </div>

              </div>

              <div className="about-floating-icon about-floating-one">
                <Building2 size={24} />
              </div>

              <div className="about-floating-icon about-floating-two">
                <Users size={24} />
              </div>

            </div>

          </div>
        </section>


        {/* INTRODUCTION */}

        <section className="about-introduction">
          <div className="about-container">

            <div className="about-section-heading">

              <span className="about-eyebrow">
                WHO WE ARE
              </span>

              <h2>
                Making Civic Engagement
                <span> Simpler and More Accessible</span>
              </h2>

              <p>
                CivicFix provides a digital platform where citizens
                can report civic issues and communicate their
                concerns through a structured process.
              </p>

            </div>

            <div className="about-intro-grid">

              <article className="about-intro-card">

                <div className="about-card-icon blue">
                  <Target size={25} />
                </div>

                <h3>Our Mission</h3>

                <p>
                  To make civic issue reporting easier, improve
                  communication between citizens and government
                  departments, and support a more organized
                  approach to resolving community problems.
                </p>

              </article>

              <article className="about-intro-card">

                <div className="about-card-icon purple">
                  <Eye size={25} />
                </div>

                <h3>Our Vision</h3>

                <p>
                  To contribute to cleaner, safer and better
                  maintained communities through citizen
                  participation, transparency and coordinated
                  public service management.
                </p>

              </article>

            </div>

          </div>
        </section>


        {/* VALUES */}

        <section className="about-values">
          <div className="about-container">

            <div className="about-section-heading">

              <span className="about-eyebrow">
                WHAT GUIDES US
              </span>

              <h2>
                The Values Behind
                <span> CivicFix</span>
              </h2>

              <p>
                Our platform is built around principles that
                encourage meaningful citizen participation and
                responsible civic administration.
              </p>

            </div>

            <div className="about-values-grid">

              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    className="about-value-card"
                    key={index}
                  >

                    <div className="about-card-icon blue">
                      <Icon size={24} />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                  </article>
                );
              })}

            </div>

          </div>
        </section>


        {/* PLATFORM FEATURES */}

        <section className="about-features">
          <div className="about-container">

            <div className="about-features-heading">

              <div>
                <span className="about-eyebrow">
                  OUR PLATFORM
                </span>

                <h2>
                  How CivicFix Supports
                  <span> Citizens</span>
                </h2>
              </div>

              <p>
                A structured digital experience that helps
                citizens report problems and follow their
                progress.
              </p>

            </div>

            <div className="about-features-grid">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    className="about-feature-card"
                    key={index}
                  >

                    <div className="about-feature-icon">
                      <Icon size={25} />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                  </article>
                );
              })}

            </div>

          </div>
        </section>


        {/* SENIOR CITIZEN ASSISTANCE */}

        <section className="about-senior-section">
          <div className="about-container">

            <div className="about-senior-content">

              <div className="about-senior-icon">
                <HandHeart size={34} />
              </div>

              <span className="about-eyebrow">
                COMMUNITY CARE
              </span>

              <h2>
                Supporting Senior Citizens
                <span> Through Dedicated Assistance</span>
              </h2>

              <p>
                CivicFix also supports senior citizen assistance
                through a dedicated service workflow. It helps
                coordinate assistance requests and connects
                those requests with the responsible management
                teams and staff.
              </p>

              <Link
                to="/login"
                className="about-primary-button"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </section>


        {/* FINAL CTA */}

        <section className="about-cta">
          <div className="about-container">

            <div className="about-cta-content">

              <h2>
                Be Part of a Better Community
              </h2>

              <p>
                Your voice matters. Report civic issues,
                participate in community improvement and
                help make public services more accessible.
              </p>

              <div className="about-cta-actions">

                <Link
                  to="/register"
                  className="about-cta-button"
                >
                  Create an Account
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/how-it-works"
                  className="about-cta-link"
                >
                  Learn How It Works
                </Link>

              </div>

            </div>

          </div>
        </section>

      </main>

      <PublicFooter />
    </>
  );
}

export default About;
