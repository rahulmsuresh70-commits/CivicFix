import { Link } from 'react-router-dom';
import PublicNavbar from '../../components/public/PublicNavbar';
import PublicFooter from '../../components/public/PublicFooter';

const features = [
  {
    number: '01',
    icon: '◎',
    title: 'Report Civic Issues',
    description:
      'Submit a complaint about a civic issue and provide the information and supporting evidence required by the platform.',
  },
  {
    number: '02',
    icon: '↗',
    title: 'Follow Your Complaint',
    description:
      'Access your submitted complaints and review the latest status information available from the system.',
  },
  {
    number: '03',
    icon: '✓',
    title: 'Track Resolution',
    description:
      'Review resolution details and use the verification or reopening actions when permitted by the complaint workflow.',
  },
];

const workflow = [
  {
    number: '01',
    title: 'Submit an issue',
    description:
      'Sign in to your citizen account and submit a complaint with the required details.',
  },
  {
    number: '02',
    title: 'Department review',
    description:
      'The responsible department reviews the complaint according to its existing workflow.',
  },
  {
    number: '03',
    title: 'Assignment and action',
    description:
      'Eligible complaints can be assigned to department staff for the permitted follow-up actions.',
  },
  {
    number: '04',
    title: 'Review the outcome',
    description:
      'Check the reported resolution and use any verification or reopening options available to you.',
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M12 5L19 12L12 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L20 6V11.5C20 16.2 16.8 20 12 21C7.2 20 4 16.2 4 11.5V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 12L10.8 14.3L15.8 9.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureIcon({ children }) {
  return (
    <span className="feature-icon" aria-hidden="true">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="public-site">
      <PublicNavbar />

      <main>
        {/* Hero */}

        <section className="hero-section">
          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />

          <div className="container hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot" />

                <span>
                  A digital platform for civic services
                </span>
              </div>

              <h1>
                Better communities
                <br />

                <span>start with action.</span>
              </h1>

              <p className="hero-description">
                Report civic issues, follow complaint progress,
                and access a clearer process for engaging with
                the services responsible for your community.
              </p>

              <div className="hero-actions">
                <Link
                  to="/register"
                  className="button button-primary button-large"
                >
                  Get Started
                  <ArrowIcon />
                </Link>

                <Link
                  to="/how-it-works"
                  className="button button-secondary button-large"
                >
                  See How It Works
                </Link>
              </div>

              <div className="hero-assurance">
                <span className="assurance-icon">
                  <ShieldIcon />
                </span>

                <div>
                  <strong>One platform, clear progress</strong>

                  <span>
                    Follow the complaint workflow from submission
                    to the available resolution updates.
                  </span>
                </div>
              </div>
            </div>

            {/* Illustrative dashboard preview */}

            <div className="hero-visual">
              <div className="visual-glow" />

              <div className="dashboard-preview">
                <div className="preview-topbar">
                  <div className="preview-brand">
                    <span className="preview-brand-icon">
                      C
                    </span>

                    <span>CivicFix</span>
                  </div>

                  <span className="preview-user">
                    Citizen Portal
                  </span>
                </div>

                <div className="preview-content">
                  <div className="preview-welcome">
                    <div>
                      <span className="preview-overline">
                        CITIZEN WORKSPACE
                      </span>

                      <h2>Welcome back</h2>

                      <p>
                        Your civic activity at a glance.
                      </p>
                    </div>

                    <span className="preview-avatar">
                      C
                    </span>
                  </div>

                  <div className="preview-summary-grid">
                    <div className="preview-summary-card">
                      <span className="summary-label">
                        My complaints
                      </span>

                      <div className="summary-visual">
                        <span className="summary-symbol blue">
                          ◉
                        </span>

                        <span className="summary-placeholder">
                          Overview
                        </span>
                      </div>

                      <span className="summary-footnote">
                        Your submitted reports
                      </span>
                    </div>

                    <div className="preview-summary-card">
                      <span className="summary-label">
                        Latest updates
                      </span>

                      <div className="summary-visual">
                        <span className="summary-symbol green">
                          ✓
                        </span>

                        <span className="summary-placeholder">
                          Activity
                        </span>
                      </div>

                      <span className="summary-footnote">
                        Available status information
                      </span>
                    </div>
                  </div>

                  <div className="preview-activity">
                    <div className="preview-activity-heading">
                      <strong>Complaint workflow</strong>

                      <span>Illustration</span>
                    </div>

                    {[
                      {
                        title: 'Complaint submission',
                        subtitle: 'Provide issue details',
                        number: '01',
                      },
                      {
                        title: 'Department review',
                        subtitle: 'Review and assignment',
                        number: '02',
                      },
                      {
                        title: 'Resolution updates',
                        subtitle: 'Follow the reported outcome',
                        number: '03',
                      },
                    ].map((item) => (
                      <div
                        className="preview-activity-row"
                        key={item.number}
                      >
                        <span className="activity-number">
                          {item.number}
                        </span>

                        <div className="activity-copy">
                          <strong>{item.title}</strong>

                          <span>{item.subtitle}</span>
                        </div>

                        <ArrowIcon />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="floating-note">
                <span className="floating-note-icon">
                  <ShieldIcon />
                </span>

                <div>
                  <strong>Citizen-focused</strong>

                  <span>
                    Clear complaint tracking
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-bottom-line" />
        </section>

        {/* Platform introduction */}

        <section className="section features-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                What CivicFix offers
              </span>

              <h2>
                A clearer way to engage
                <br />

                with civic services.
              </h2>

              <p>
                Access the complaint-management workflow through
                a single citizen-facing platform designed to
                organize reporting, updates, and resolution
                information.
              </p>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <article
                  className="feature-card"
                  key={feature.number}
                >
                  <div className="feature-card-top">
                    <FeatureIcon>
                      {feature.icon}
                    </FeatureIcon>

                    <span className="feature-number">
                      {feature.number}
                    </span>
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <Link
                    to="/how-it-works"
                    className="feature-link"
                  >
                    Learn more
                    <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}

        <section className="section workflow-section">
          <div className="container workflow-grid">
            <div className="workflow-intro">
              <span className="eyebrow">
                How it works
              </span>

              <h2>
                From reporting
                <br />

                to resolution.
              </h2>

              <p>
                CivicFix organizes the complaint process into
                clear stages. Available actions and status
                updates depend on the existing complaint workflow.
              </p>

              <Link
                to="/how-it-works"
                className="button button-primary"
              >
                Explore the process
                <ArrowIcon />
              </Link>
            </div>

            <div className="workflow-list">
              {workflow.map((item, index) => (
                <article
                  className="workflow-item"
                  key={item.number}
                >
                  <div className="workflow-number">
                    {item.number}
                  </div>

                  <div className="workflow-item-content">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>

                  {index !== workflow.length - 1 && (
                    <span className="workflow-connector" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Citizen portal CTA */}

        <section className="section cta-section">
          <div className="container">
            <div className="cta-card">
              <div className="cta-decoration" />

              <div className="cta-content">
                <span className="cta-eyebrow">
                  YOUR CITIZEN PORTAL
                </span>

                <h2>
                  Make your civic concerns
                  <br />

                  part of the process.
                </h2>

                <p>
                  Create a citizen account to access complaint
                  submission, status tracking, and other
                  available citizen services.
                </p>

                <div className="cta-actions">
                  <Link
                    to="/register"
                    className="button button-white"
                  >
                    Create Citizen Account
                    <ArrowIcon />
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
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                    >
                      <path
                        d="M50 12L78 28V52C78 70 65 83 50 89C35 83 22 70 22 52V28L50 12Z"
                        stroke="white"
                        strokeWidth="3"
                      />

                      <path
                        d="M36 50L46 60L66 39"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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