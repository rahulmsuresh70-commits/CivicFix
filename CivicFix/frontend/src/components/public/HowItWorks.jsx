
import React from "react";
import {
  UserRound,
  ClipboardList,
  MapPin,
  Camera,
  Building2,
  Search,
  UserCheck,
  ClipboardCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  FileCheck2,
  HeartHandshake,
  AlertCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

import PublicNavbar from "../../components/public/PublicNavbar";
import PublicFooter from "../../components/public/PublicFooter";

import "./HowItWorks.css";

function HowItWorks() {
  const citizenSteps = [
    {
      number: "01",
      icon: UserRound,
      title: "Create Your Account",
      description:
        "Register on CivicFix using your details. Once your account is ready, you can access the citizen platform and submit civic complaints.",
      tag: "Get Started",
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Report a Civic Issue",
      description:
        "Choose the type of problem you want to report. Provide a clear title, description and the information needed to understand the issue.",
      tag: "Submit a Report",
    },
    {
      number: "03",
      icon: MapPin,
      title: "Provide Issue Location",
      description:
        "Add the location where the problem occurred. You can also provide supporting photographs when available to help explain the issue.",
      tag: "Add Details",
    },
    {
      number: "04",
      icon: Search,
      title: "Department Review",
      description:
        "Your submitted complaint enters the review process. The responsible team examines the report and determines the appropriate next action.",
      tag: "Under Review",
    },
    {
      number: "05",
      icon: UserCheck,
      title: "Assignment and Action",
      description:
        "Once approved, the complaint can be assigned to the relevant department and staff for further action.",
      tag: "Work in Progress",
    },
    {
      number: "06",
      icon: CheckCircle2,
      title: "Follow the Resolution",
      description:
        "Check your complaint status and follow its progress through the CivicFix platform as the issue moves through the resolution process.",
      tag: "Track Progress",
    },
  ];

  const workflowStages = [
    {
      icon: ClipboardList,
      title: "Submitted",
      description:
        "Your complaint has been successfully submitted to CivicFix.",
      color: "blue",
    },
    {
      icon: Search,
      title: "Under Review",
      description:
        "The complaint is being examined by the responsible team.",
      color: "purple",
    },
    {
      icon: CheckCircle2,
      title: "Approved",
      description:
        "The complaint has passed the review stage and can proceed.",
      color: "green",
    },
    {
      icon: UserCheck,
      title: "Assigned",
      description:
        "The complaint has been assigned for departmental action.",
      color: "orange",
    },
    {
      icon: RefreshCw,
      title: "In Progress",
      description:
        "The assigned team is working on the reported issue.",
      color: "blue",
    },
    {
      icon: FileCheck2,
      title: "Resolved",
      description:
        "The responsible team has marked the reported issue as resolved.",
      color: "green",
    },
  ];

  const additionalStatuses = [
    {
      title: "Transferred",
      description:
        "The complaint has been transferred to another responsible department.",
    },
    {
      title: "Rejected",
      description:
        "The complaint has not been approved after review.",
    },
    {
      title: "Reopened",
      description:
        "A previously resolved complaint has been reopened for further attention.",
    },
    {
      title: "Verified and Closed",
      description:
        "The resolution has passed the verification process and the complaint is closed.",
    },
  ];

  const responsibilities = [
    {
      icon: UserRound,
      title: "Citizens",
      description:
        "Submit accurate reports, provide useful details and follow complaint updates.",
    },
    {
      icon: Building2,
      title: "Department Managers",
      description:
        "Review complaints, coordinate departmental work and manage assignments.",
    },
    {
      icon: UserCheck,
      title: "Department Staff",
      description:
        "Handle assigned work and update the progress of complaints.",
    },
  ];

  return (
    <>
      <PublicNavbar />

      <main className="hiw-page">

        {/* =========================================
            HERO SECTION
        ========================================= */}

        <section className="hiw-hero">
          <div className="hiw-container">

            <div className="hiw-hero-content">

              <span className="hiw-eyebrow">
                <span className="hiw-eyebrow-line" />
                HOW CIVICFIX WORKS
              </span>

              <h1>
                From Reporting
                <span> to Resolution.</span>
              </h1>

              <p>
                CivicFix makes civic issue reporting more organized
                and accessible. Discover how citizens can report
                problems, how departments handle them and how
                progress can be tracked.
              </p>

              <div className="hiw-hero-actions">

                <Link
                  to="/register"
                  className="hiw-primary-button"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/about"
                  className="hiw-secondary-button"
                >
                  About CivicFix
                </Link>

              </div>

              <div className="hiw-hero-trust">

                <div>
                  <ShieldCheck size={18} />
                  <span>Organized Reporting</span>
                </div>

                <div>
                  <Clock size={18} />
                  <span>Progress Tracking</span>
                </div>

                <div>
                  <Building2 size={18} />
                  <span>Department Coordination</span>
                </div>

              </div>

            </div>

            <div className="hiw-hero-visual">

              <div className="hiw-flow-card">

                <div className="hiw-flow-card-header">
                  <div>
                    <span className="hiw-flow-label">
                      COMPLAINT JOURNEY
                    </span>

                    <h3>Issue Progress</h3>
                  </div>

                  <div className="hiw-flow-header-icon">
                    <ClipboardCheck size={23} />
                  </div>
                </div>

                <div className="hiw-flow-list">

                  <div className="hiw-flow-item completed">
                    <div className="hiw-flow-icon">
                      <CheckCircle2 size={19} />
                    </div>

                    <div>
                      <strong>Issue Submitted</strong>
                      <span>Complaint received</span>
                    </div>

                    <span className="hiw-flow-check">
                      <CheckCircle2 size={17} />
                    </span>
                  </div>

                  <div className="hiw-flow-connector" />

                  <div className="hiw-flow-item completed">
                    <div className="hiw-flow-icon">
                      <Search size={19} />
                    </div>

                    <div>
                      <strong>Under Review</strong>
                      <span>Complaint being examined</span>
                    </div>

                    <span className="hiw-flow-check">
                      <CheckCircle2 size={17} />
                    </span>
                  </div>

                  <div className="hiw-flow-connector" />

                  <div className="hiw-flow-item active">
                    <div className="hiw-flow-icon">
                      <UserCheck size={19} />
                    </div>

                    <div>
                      <strong>Department Action</strong>
                      <span>Assigned for action</span>
                    </div>

                    <span className="hiw-flow-active-dot" />
                  </div>

                  <div className="hiw-flow-connector" />

                  <div className="hiw-flow-item pending">
                    <div className="hiw-flow-icon">
                      <CheckCircle2 size={19} />
                    </div>

                    <div>
                      <strong>Resolution</strong>
                      <span>Final outcome</span>
                    </div>
                  </div>

                </div>

                <div className="hiw-flow-footer">
                  <ShieldCheck size={17} />
                  Follow your complaint through its status updates.
                </div>

              </div>

              <div className="hiw-floating-badge hiw-floating-top">
                <MapPin size={20} />
                <span>Location Based</span>
              </div>

              <div className="hiw-floating-badge hiw-floating-bottom">
                <CheckCircle2 size={20} />
                <span>Structured Process</span>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================
            INTRODUCTION
        ========================================= */}

        <section className="hiw-intro">
          <div className="hiw-container">

            <div className="hiw-section-heading">

              <span className="hiw-eyebrow">
                THE PROCESS
              </span>

              <h2>
                A Clearer Way to
                <span> Report Civic Issues</span>
              </h2>

              <p>
                The CivicFix process connects citizen reports
                with the teams responsible for reviewing and
                handling civic issues.
              </p>

            </div>

            <div className="hiw-intro-highlight">

              <div className="hiw-intro-icon">
                <ClipboardCheck size={30} />
              </div>

              <div>
                <h3>One Platform. A Structured Workflow.</h3>

                <p>
                  From submitting a complaint to following its
                  progress, CivicFix provides a central place
                  for citizens and responsible teams to
                  participate in the reporting process.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================
            CITIZEN STEPS
        ========================================= */}

        <section className="hiw-steps-section">
          <div className="hiw-container">

            <div className="hiw-section-heading">

              <span className="hiw-eyebrow">
                FOR CITIZENS
              </span>

              <h2>
                How to Report an Issue
                <span> Step by Step</span>
              </h2>

              <p>
                Follow these steps to submit a civic complaint
                and stay informed about its progress.
              </p>

            </div>

            <div className="hiw-steps-grid">

              {citizenSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    className="hiw-step-card"
                    key={step.number}
                  >

                    <div className="hiw-step-top">

                      <span className="hiw-step-number">
                        {step.number}
                      </span>

                      <div className="hiw-step-icon">
                        <Icon size={25} />
                      </div>

                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>

                    <span className="hiw-step-tag">
                      {step.tag}
                    </span>

                    {index !== citizenSteps.length - 1 && (
                      <div className="hiw-step-arrow">
                        <ArrowRight size={17} />
                      </div>
                    )}

                  </article>
                );
              })}

            </div>

            <div className="hiw-steps-action">

              <Link
                to="/register"
                className="hiw-primary-button"
              >
                Register as a Citizen
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </section>


        {/* =========================================
            COMPLAINT STATUS
        ========================================= */}

        <section className="hiw-status-section">
          <div className="hiw-container">

            <div className="hiw-section-heading">

              <span className="hiw-eyebrow">
                COMPLAINT TRACKING
              </span>

              <h2>
                Understand Your
                <span> Complaint Status</span>
              </h2>

              <p>
                Your complaint can move through different
                stages depending on the review, assignment
                and resolution process.
              </p>

            </div>

            <div className="hiw-status-timeline">

              {workflowStages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <article
                    className="hiw-status-item"
                    key={stage.title}
                  >

                    <div className={`hiw-status-icon ${stage.color}`}>
                      <Icon size={22} />
                    </div>

                    <div className="hiw-status-content">

                      <span className="hiw-status-number">
                        STAGE {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>{stage.title}</h3>

                      <p>{stage.description}</p>

                    </div>

                  </article>
                );
              })}

            </div>

            <div className="hiw-additional-statuses">

              <div className="hiw-additional-heading">
                <AlertCircle size={20} />

                <h3>Other Possible Status Updates</h3>
              </div>

              <div className="hiw-additional-grid">

                {additionalStatuses.map((status) => (
                  <article key={status.title}>

                    <h4>{status.title}</h4>

                    <p>{status.description}</p>

                  </article>
                ))}

              </div>

              <p className="hiw-status-note">
                The exact status sequence depends on the
                complaint and the actions taken by the
                responsible teams.
              </p>

            </div>

          </div>
        </section>


        {/* =========================================
            WHO IS INVOLVED
        ========================================= */}

        <section className="hiw-roles-section">
          <div className="hiw-container">

            <div className="hiw-section-heading">

              <span className="hiw-eyebrow">
                WORKING TOGETHER
              </span>

              <h2>
                Everyone Has a Role
                <span> in Civic Improvement</span>
              </h2>

              <p>
                CivicFix brings citizens, department managers
                and staff together through an organized
                complaint management process.
              </p>

            </div>

            <div className="hiw-roles-grid">

              {responsibilities.map((role) => {
                const Icon = role.icon;

                return (
                  <article
                    className="hiw-role-card"
                    key={role.title}
                  >

                    <div className="hiw-role-icon">
                      <Icon size={27} />
                    </div>

                    <h3>{role.title}</h3>

                    <p>{role.description}</p>

                  </article>
                );
              })}

            </div>

          </div>
        </section>


        {/* =========================================
            SENIOR CITIZEN ASSISTANCE
        ========================================= */}

        <section className="hiw-assistance-section">
          <div className="hiw-container">

            <div className="hiw-assistance-card">

              <div className="hiw-assistance-icon">
                <HeartHandshake size={35} />
              </div>

              <div className="hiw-assistance-content">

                <span className="hiw-eyebrow">
                  DEDICATED COMMUNITY SUPPORT
                </span>

                <h2>
                  Senior Citizen Assistance
                </h2>

                <p>
                  CivicFix also provides a dedicated workflow
                  for senior citizen assistance requests.
                  These requests can be coordinated through
                  the senior citizen management team and
                  assigned staff.
                </p>

                <Link
                  to="/login"
                  className="hiw-primary-button"
                >
                  Access CivicFix
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>
        </section>


        {/* =========================================
            FINAL CTA
        ========================================= */}

        <section className="hiw-cta">
          <div className="hiw-container">

            <div className="hiw-cta-content">

              <span className="hiw-cta-eyebrow">
                YOUR COMMUNITY MATTERS
              </span>

              <h2>
                Ready to Make a Difference?
              </h2>

              <p>
                Join CivicFix and take an active role in
                reporting civic issues and improving
                your community.
              </p>

              <div className="hiw-cta-actions">

                <Link
                  to="/register"
                  className="hiw-cta-button"
                >
                  Create Your Account
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/departments"
                  className="hiw-cta-link"
                >
                  Explore Departments
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

export default HowItWorks;
