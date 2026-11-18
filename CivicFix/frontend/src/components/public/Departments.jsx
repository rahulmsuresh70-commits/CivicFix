
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Building2,
  Search,
  RefreshCw,
  ArrowRight,
  ShieldCheck,
  Users,
  ClipboardList,
  MapPin,
  AlertCircle,
  CheckCircle2,
  Landmark,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import api, { getApiErrorMessage } from "../../api/axios";
import PublicNavbar from "../../components/public/PublicNavbar";
import PublicFooter from "../../components/public/PublicFooter";

import "./Departments.css";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const loadDepartments = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      // Use the existing CivicFix active-departments endpoint.
      const response = await api.get("/departments/active/");

      const data = response.data;

      const departmentList = Array.isArray(data)
        ? data
        : Array.isArray(data?.results)
          ? data.results
          : Array.isArray(data?.data)
            ? data.data
            : [];

      setDepartments(departmentList);
    } catch (err) {
      setDepartments([]);
      setError(getApiErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDepartments();
  }, [loadDepartments]);

  const filteredDepartments = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return departments;

    return departments.filter((department) => {
      const searchableValues = [
        department.name,
        department.department_name,
        department.description,
        department.short_description,
        department.code,
        department.email,
        department.contact_email,
        department.phone,
        department.phone_number,
        department.location,
        department.address,
      ];

      return searchableValues.some((value) =>
        String(value || "").toLowerCase().includes(query)
      );
    });
  }, [departments, search]);

  const getDepartmentName = (department) =>
    department.name ||
    department.department_name ||
    "Department";

  const getDepartmentDescription = (department) =>
    department.description ||
    department.short_description ||
    department.about ||
    "This department is part of the CivicFix public service directory.";

  const getDepartmentContact = (department) =>
    department.email ||
    department.contact_email ||
    department.phone ||
    department.phone_number ||
    "";

  const getDepartmentLocation = (department) =>
    department.location ||
    department.address ||
    "";

  const clearSearch = () => setSearch("");

  return (
    <>
      <PublicNavbar />

      <main className="dept-page">

        {/* HERO */}
        <section className="dept-hero">
          <div className="dept-container">

            <div className="dept-hero-content">

              <span className="dept-eyebrow">
                <span />
                CIVICFIX DEPARTMENTS
              </span>

              <h1>
                The Departments
                <span> Behind Better Communities.</span>
              </h1>

              <p>
                Explore the departments connected through CivicFix.
                Find the teams responsible for handling civic services
                and coordinating responses to reported community issues.
              </p>

              <div className="dept-hero-points">
                <div>
                  <ShieldCheck size={18} />
                  <span>Organized Services</span>
                </div>

                <div>
                  <Building2 size={18} />
                  <span>Department Directory</span>
                </div>

                <div>
                  <ClipboardList size={18} />
                  <span>Issue Coordination</span>
                </div>
              </div>

            </div>

            <div className="dept-hero-visual">

              <div className="dept-visual-main">
                <div className="dept-visual-icon">
                  <Landmark size={38} />
                </div>

                <span className="dept-visual-label">
                  CIVICFIX DIRECTORY
                </span>

                <h3>Connected Departments</h3>

                <p>
                  A central directory for discovering the departments
                  participating in the CivicFix platform.
                </p>

                <div className="dept-visual-divider" />

                <div className="dept-visual-footer">
                  <div>
                    <Building2 size={18} />
                    <span>Active departments</span>
                  </div>

                  <strong>
                    {loading ? "—" : departments.length}
                  </strong>
                </div>
              </div>

              <div className="dept-floating-icon dept-floating-one">
                <Users size={22} />
              </div>

              <div className="dept-floating-icon dept-floating-two">
                <CheckCircle2 size={22} />
              </div>

            </div>

          </div>
        </section>


        {/* INTRODUCTION */}
        <section className="dept-intro">
          <div className="dept-container">

            <div className="dept-section-heading">
              <span className="dept-eyebrow">
                OUR DEPARTMENT NETWORK
              </span>

              <h2>
                Discover the Teams
                <span> Serving Your Community</span>
              </h2>

              <p>
                CivicFix provides a shared platform where citizens
                can discover participating departments and understand
                the teams involved in civic issue management.
              </p>
            </div>

            <div className="dept-feature-grid">

              <article className="dept-feature-card">
                <div className="dept-feature-icon blue">
                  <Building2 size={24} />
                </div>

                <h3>Department Directory</h3>

                <p>
                  Explore the active departments available
                  through the CivicFix platform.
                </p>
              </article>

              <article className="dept-feature-card">
                <div className="dept-feature-icon purple">
                  <ClipboardList size={24} />
                </div>

                <h3>Organized Coordination</h3>

                <p>
                  Departments help organize the review,
                  assignment and handling of civic complaints.
                </p>
              </article>

              <article className="dept-feature-card">
                <div className="dept-feature-icon green">
                  <Users size={24} />
                </div>

                <h3>Connected Teams</h3>

                <p>
                  Department managers and staff participate
                  in handling assigned responsibilities.
                </p>
              </article>

            </div>

          </div>
        </section>


        {/* DEPARTMENT DIRECTORY */}
        <section className="dept-directory">
          <div className="dept-container">

            <div className="dept-directory-heading">

              <div>
                <span className="dept-eyebrow">
                  EXPLORE DEPARTMENTS
                </span>

                <h2>
                  Department Directory
                </h2>

                <p>
                  Browse the departments currently available
                  on the CivicFix platform.
                </p>
              </div>

              <button
                type="button"
                className="dept-refresh-button"
                onClick={loadDepartments}
                disabled={loading}
              >
                <RefreshCw
                  size={16}
                  className={loading ? "dept-spin" : ""}
                />
                Refresh
              </button>

            </div>


            {/* SEARCH */}
            <div className="dept-search-area">

              <div className="dept-search-box">
                <Search size={19} />

                <input
                  type="text"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search departments by name, description or contact..."
                  aria-label="Search departments"
                />

                {search && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    aria-label="Clear search"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              <div className="dept-result-count">
                <Building2 size={16} />

                <span>
                  {loading
                    ? "Loading departments..."
                    : `${filteredDepartments.length} department${
                        filteredDepartments.length === 1 ? "" : "s"
                      } found`}
                </span>
              </div>

            </div>


            {/* ERROR */}
            {error && (
              <div className="dept-message dept-error">
                <AlertCircle size={20} />

                <div>
                  <strong>Unable to load departments</strong>
                  <p>{error}</p>

                  <button
                    type="button"
                    onClick={loadDepartments}
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}


            {/* LOADING */}
            {loading && (
              <div className="dept-loading">
                <RefreshCw size={28} className="dept-spin" />

                <h3>Loading Departments</h3>

                <p>
                  Please wait while we retrieve the department directory.
                </p>
              </div>
            )}


            {/* EMPTY */}
            {!loading && !error && filteredDepartments.length === 0 && (
              <div className="dept-empty">

                <div className="dept-empty-icon">
                  {search ? (
                    <Search size={30} />
                  ) : (
                    <Building2 size={30} />
                  )}
                </div>

                <h3>
                  {search
                    ? "No Matching Departments"
                    : "No Departments Available"}
                </h3>

                <p>
                  {search
                    ? "Try another search term to find a department."
                    : "There are currently no active departments available in the directory."}
                </p>

                {search && (
                  <button
                    type="button"
                    onClick={clearSearch}
                  >
                    Clear Search
                  </button>
                )}

              </div>
            )}


            {/* DEPARTMENT CARDS */}
            {!loading && !error && filteredDepartments.length > 0 && (
              <div className="dept-cards-grid">

                {filteredDepartments.map((department, index) => {
                  const name = getDepartmentName(department);
                  const description = getDepartmentDescription(department);
                  const contact = getDepartmentContact(department);
                  const location = getDepartmentLocation(department);

                  return (
                    <article
                      className="dept-card"
                      key={
                        department.id ??
                        department.pk ??
                        `${name}-${index}`
                      }
                    >

                      <div className="dept-card-top">

                        <div className="dept-card-icon">
                          <Building2 size={25} />
                        </div>

                        <span className="dept-active-badge">
                          <span />
                          Active
                        </span>

                      </div>

                      <div className="dept-card-body">

                        <span className="dept-card-label">
                          CIVICFIX DEPARTMENT
                        </span>

                        <h3>{name}</h3>

                        <p>{description}</p>

                        {location && (
                          <div className="dept-card-detail">
                            <MapPin size={15} />
                            <span>{location}</span>
                          </div>
                        )}

                        {contact && (
                          <div className="dept-card-detail">
                            <Users size={15} />
                            <span>{contact}</span>
                          </div>
                        )}

                      </div>

                      <div className="dept-card-footer">
                        <span>Department Information</span>
                        <ArrowRight size={17} />
                      </div>

                    </article>
                  );
                })}

              </div>
            )}

          </div>
        </section>


        {/* HOW DEPARTMENTS WORK */}
        <section className="dept-process">
          <div className="dept-container">

            <div className="dept-section-heading">
              <span className="dept-eyebrow">
                DEPARTMENT RESPONSIBILITIES
              </span>

              <h2>
                From Citizen Report
                <span> to Department Action</span>
              </h2>

              <p>
                Departments participate in the complaint management
                process through review, assignment and resolution activities.
              </p>
            </div>

            <div className="dept-process-grid">

              <article>
                <span className="dept-process-number">01</span>
                <div className="dept-process-icon">
                  <ClipboardList size={24} />
                </div>
                <h3>Review Reports</h3>
                <p>
                  Submitted complaints are reviewed to understand
                  the reported issue and determine the next action.
                </p>
              </article>

              <article>
                <span className="dept-process-number">02</span>
                <div className="dept-process-icon">
                  <Users size={24} />
                </div>
                <h3>Coordinate Teams</h3>
                <p>
                  Department managers coordinate the relevant
                  staff and responsibilities for handling reports.
                </p>
              </article>

              <article>
                <span className="dept-process-number">03</span>
                <div className="dept-process-icon">
                  <CheckCircle2 size={24} />
                </div>
                <h3>Update Progress</h3>
                <p>
                  Assigned teams work on complaints and update
                  their progress through the platform.
                </p>
              </article>

            </div>

            <div className="dept-process-link">
              <Link to="/how-it-works">
                Learn How CivicFix Works
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        </section>


        {/* CTA */}
        <section className="dept-cta">
          <div className="dept-container">

            <div className="dept-cta-content">

              <span>BE PART OF THE CHANGE</span>

              <h2>
                Help Build Better Communities with CivicFix
              </h2>

              <p>
                Register on CivicFix to report civic issues
                and follow their progress through the platform.
              </p>

              <div className="dept-cta-actions">

                <Link
                  to="/register"
                  className="dept-cta-primary"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/about"
                  className="dept-cta-secondary"
                >
                  About CivicFix
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

export default Departments;
