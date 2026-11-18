import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  UserRound,
  Mail,
  ShieldCheck,
  CalendarDays,
  RefreshCw,
  ArrowLeft,
  CircleCheck,
  PencilLine,
  X,
  Save,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

import api, { getApiErrorMessage } from '../../api/axios';
import './Profile.css';

function formatDate(value) {
  if (!value) return 'Not provided';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return 'Not provided';

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function getDisplayName(user) {
  const fullName = [
    user?.first_name,
    user?.last_name,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  return fullName || user?.email?.split('@')[0] || 'Citizen';
}

function ProfileDetail({ icon: Icon, label, value }) {
  return (
    <div className="cp-detail">
      <span className="cp-detail-icon">
        <Icon size={19} aria-hidden="true" />
      </span>

      <div className="cp-detail-content">
        <span className="cp-detail-label">{label}</span>
        <strong>{value || 'Not provided'}</strong>
      </div>
    </div>
  );
}

function ReadOnlyField({ label, value, hint }) {
  return (
    <div className="cp-form-field">
      <label>{label}</label>

      <div
        className="cp-readonly-field"
        aria-readonly="true"
      >
        {value || 'Not provided'}
      </div>

      {hint && (
        <span className="cp-field-hint">{hint}</span>
      )}
    </div>
  );
}

export default function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem('civicfix_user') || 'null'
      );
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
  });

  const loadProfile = useCallback(async () => {
    const token = localStorage.getItem(
      'civicfix_access_token'
    );

    if (!token) {
      navigate('/login', {
        replace: true,
        state: {
          message: 'Please log in to view your profile.',
        },
      });
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await api.get('/auth/me/');
      const data = response.data;

      if (
        String(data?.role || '').toLowerCase() !== 'citizen'
      ) {
        navigate('/login', {
          replace: true,
          state: {
            message:
              'This profile is available to citizen accounts.',
          },
        });
        return;
      }

      setProfile(data);

      setFormData({
        first_name: data?.first_name || '',
        last_name: data?.last_name || '',
      });

      localStorage.setItem(
        'civicfix_user',
        JSON.stringify(data)
      );
    } catch (requestError) {
      if (requestError?.response?.status === 401) {
        localStorage.removeItem('civicfix_access_token');
        localStorage.removeItem('civicfix_refresh_token');
        localStorage.removeItem('civicfix_user');

        navigate('/login', {
          replace: true,
          state: {
            message:
              'Your session has expired. Please log in again.',
          },
        });
        return;
      }

      setError(
        getApiErrorMessage(requestError) ||
          'Unable to load your profile. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const handleEdit = () => {
    setFormData({
      first_name: profile?.first_name || '',
      last_name: profile?.last_name || '',
    });

    setFormErrors({});
    setError('');
    setSuccess('');
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setFormData({
      first_name: profile?.first_name || '',
      last_name: profile?.last_name || '',
    });

    setFormErrors({});
    setError('');
    setEditing(false);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setFormErrors((current) => ({
      ...current,
      [name]: '',
    }));

    setError('');
    setSuccess('');
  };

  const validateForm = () => {
    const errors = {};

    const firstName = formData.first_name.trim();
    const lastName = formData.last_name.trim();

    if (!firstName) {
      errors.first_name = 'First name is required.';
    } else if (firstName.length > 100) {
      errors.first_name = 'First name cannot exceed 100 characters.';
    }

    if (!lastName) {
      errors.last_name = 'Last name is required.';
    } else if (lastName.length > 100) {
      errors.last_name = 'Last name cannot exceed 100 characters.';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSaveProfile = async (event) => {
    event.preventDefault();

    if (saving || !validateForm()) return;

    setSaving(true);
    setError('');
    setSuccess('');

    const payload = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
    };

    try {
      /*
       * The existing Django /auth/me/ endpoint must implement
       * PATCH before this request can save profile changes.
       */
      await api.patch('/auth/me/', payload);

      /*
       * Fetch the profile again so the displayed values reflect
       * the actual data returned by the backend.
       */
      const refreshedResponse = await api.get('/auth/me/');
      const updatedProfile = refreshedResponse.data;

      setProfile(updatedProfile);

      setFormData({
        first_name: updatedProfile?.first_name || '',
        last_name: updatedProfile?.last_name || '',
      });

      localStorage.setItem(
        'civicfix_user',
        JSON.stringify(updatedProfile)
      );

      setEditing(false);
      setFormErrors({});
      setSuccess(
        'Your profile has been updated successfully.'
      );
    } catch (requestError) {
      const statusCode = requestError?.response?.status;

      if (statusCode === 401) {
        localStorage.removeItem('civicfix_access_token');
        localStorage.removeItem('civicfix_refresh_token');
        localStorage.removeItem('civicfix_user');

        navigate('/login', {
          replace: true,
          state: {
            message:
              'Your session has expired. Please log in again.',
          },
        });
        return;
      }

      if (statusCode === 404 || statusCode === 405) {
        setError(
          'The backend profile update endpoint is not enabled. ' +
            'Please implement PATCH support for /api/auth/me/.'
        );
      } else {
        const data = requestError?.response?.data;
        const fieldErrors = {};

        if (data && typeof data === 'object') {
          ['first_name', 'last_name'].forEach((field) => {
            if (data[field]) {
              fieldErrors[field] = Array.isArray(data[field])
                ? data[field][0]
                : String(data[field]);
            }
          });
        }

        setFormErrors(fieldErrors);

        setError(
          getApiErrorMessage(requestError) ||
            'Unable to save your profile. Please try again.'
        );
      }
    } finally {
      setSaving(false);
    }
  };

  const name = getDisplayName(profile);

  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

  return (
    <section className="cp-page">
      <div className="cp-page-heading">
        <div>
          <span className="cp-eyebrow">ACCOUNT SETTINGS</span>
          <h1>My profile</h1>
          <p>
            View and manage your citizen account information.
          </p>
        </div>

        <Link to="/user/dashboard" className="cp-back-link">
          <ArrowLeft size={17} />
          Dashboard
        </Link>
      </div>

      {error && (
        <div className="cp-alert" role="alert">
          <span>{error}</span>

          <button
            type="button"
            onClick={editing ? () => setError('') : loadProfile}
          >
            {editing ? (
              <X size={15} />
            ) : (
              <RefreshCw size={15} />
            )}
            {editing ? 'Dismiss' : 'Try again'}
          </button>
        </div>
      )}

      {success && (
        <div className="cp-success-alert" role="status">
          <CheckCircle2 size={18} />
          <span>{success}</span>

          <button
            type="button"
            onClick={() => setSuccess('')}
            aria-label="Dismiss success message"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {loading && !profile ? (
        <div className="cp-loading">
          <span className="cp-spinner" />
          <span>Loading your profile...</span>
        </div>
      ) : (
        <>
          <article className="cp-profile-card">
            <div className="cp-profile-cover" />

            <div className="cp-profile-main">
              <div
                className="cp-avatar"
                aria-label={`Avatar for ${name}`}
              >
                {initials || 'C'}
              </div>

              <div className="cp-identity">
                <h2>{name}</h2>
                <p>
                  {profile?.email || 'Email not provided'}
                </p>

                <div className="cp-identity-badges">
                  <span className="cp-role-badge">
                    <UserRound size={14} />
                    Citizen account
                  </span>

                  {profile?.is_verified ? (
                    <span className="cp-verified-badge">
                      <CircleCheck size={14} />
                      Email verified
                    </span>
                  ) : (
                    <span className="cp-unverified-badge">
                      <ShieldCheck size={14} />
                      Verification pending
                    </span>
                  )}
                </div>
              </div>

              {!editing && (
                <button
                  type="button"
                  className="cp-edit-button"
                  onClick={handleEdit}
                >
                  <PencilLine size={16} />
                  Edit profile
                </button>
              )}
            </div>
          </article>

          <div className="cp-content-grid">
            <article className="cp-info-card">
              <div className="cp-card-heading">
                <div>
                  <h2>
                    {editing
                      ? 'Edit personal information'
                      : 'Personal information'}
                  </h2>

                  <p>
                    {editing
                      ? 'Update your account details below.'
                      : 'Details associated with your CivicFix account.'}
                  </p>
                </div>

                <span className="cp-heading-icon">
                  <UserRound size={19} />
                </span>
              </div>

              {editing ? (
                <form
                  className="cp-edit-form"
                  onSubmit={handleSaveProfile}
                  noValidate
                >
                  <div className="cp-form-grid">
                    <div className="cp-form-field">
                      <label htmlFor="cp-first-name">
                        First name
                      </label>

                      <input
                        id="cp-first-name"
                        name="first_name"
                        type="text"
                        value={formData.first_name}
                        onChange={handleFieldChange}
                        autoComplete="given-name"
                        maxLength={100}
                        required
                        aria-invalid={Boolean(
                          formErrors.first_name
                        )}
                        aria-describedby={
                          formErrors.first_name
                            ? 'cp-first-name-error'
                            : undefined
                        }
                      />

                      {formErrors.first_name && (
                        <span
                          className="cp-field-error"
                          id="cp-first-name-error"
                        >
                          <AlertCircle size={13} />
                          {formErrors.first_name}
                        </span>
                      )}
                    </div>

                    <div className="cp-form-field">
                      <label htmlFor="cp-last-name">
                        Last name
                      </label>

                      <input
                        id="cp-last-name"
                        name="last_name"
                        type="text"
                        value={formData.last_name}
                        onChange={handleFieldChange}
                        autoComplete="family-name"
                        maxLength={100}
                        required
                        aria-invalid={Boolean(
                          formErrors.last_name
                        )}
                        aria-describedby={
                          formErrors.last_name
                            ? 'cp-last-name-error'
                            : undefined
                        }
                      />

                      {formErrors.last_name && (
                        <span
                          className="cp-field-error"
                          id="cp-last-name-error"
                        >
                          <AlertCircle size={13} />
                          {formErrors.last_name}
                        </span>
                      )}
                    </div>

                    <div className="cp-form-field cp-form-field-full">
                      <label htmlFor="cp-email">
                        Email address
                      </label>

                      <input
                        id="cp-email"
                        type="email"
                        value={profile?.email || ''}
                        autoComplete="email"
                        readOnly
                        aria-readonly="true"
                      />

                      <span className="cp-field-hint">
                        Email is read-only to protect account
                        verification.
                      </span>
                    </div>

                    <ReadOnlyField
                      label="Account role"
                      value={profile?.role || 'Citizen'}
                      hint="Your account role cannot be changed here."
                    />

                    <ReadOnlyField
                      label="Member since"
                      value={formatDate(
                        profile?.date_joined ||
                          profile?.created_at
                      )}
                    />

                    <ReadOnlyField
                      label="Email verification"
                      value={
                        profile?.is_verified
                          ? 'Verified'
                          : 'Verification pending'
                      }
                    />
                  </div>

                  <div className="cp-edit-notice">
                    <ShieldCheck size={17} />

                    <div>
                      <strong>Account security</strong>

                      <p>
                        Your role, email address, and verification
                        status cannot be changed from this form.
                      </p>
                    </div>
                  </div>

                  <div className="cp-edit-actions">
                    <button
                      type="button"
                      className="cp-cancel-button"
                      onClick={handleCancelEdit}
                      disabled={saving}
                    >
                      <X size={16} />
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="cp-save-button"
                      disabled={saving}
                    >
                      {saving ? (
                        <>
                          <span className="cp-button-spinner" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save size={16} />
                          Save changes
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="cp-details-grid">
                    <ProfileDetail
                      icon={UserRound}
                      label="First name"
                      value={profile?.first_name}
                    />

                    <ProfileDetail
                      icon={UserRound}
                      label="Last name"
                      value={profile?.last_name}
                    />

                    <ProfileDetail
                      icon={Mail}
                      label="Email address"
                      value={profile?.email}
                    />

                    <ProfileDetail
                      icon={ShieldCheck}
                      label="Account role"
                      value={profile?.role || 'Citizen'}
                    />

                    <ProfileDetail
                      icon={CalendarDays}
                      label="Member since"
                      value={formatDate(
                        profile?.date_joined ||
                          profile?.created_at
                      )}
                    />

                    <ProfileDetail
                      icon={ShieldCheck}
                      label="Email verification"
                      value={
                        profile?.is_verified
                          ? 'Verified'
                          : 'Verification pending'
                      }
                    />
                  </div>

                  <div className="cp-edit-notice">
                    <PencilLine size={17} />

                    <div>
                      <strong>
                        Keep your information up to date
                      </strong>

                      <p>
                        Use Edit profile to update your name.
                        Your email, role, and verification status
                        are displayed for reference.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </article>

            <aside className="cp-security-card">
              <div className="cp-security-icon">
                <ShieldCheck size={23} />
              </div>

              <h2>Account security</h2>

              <p>
                Your profile information is loaded from your
                authenticated CivicFix account.
              </p>

              <div className="cp-security-status">
                <span
                  className={
                    profile?.is_verified
                      ? 'cp-status-dot is-verified'
                      : 'cp-status-dot'
                  }
                />

                <span>
                  {profile?.is_verified
                    ? 'Email verification complete'
                    : 'Email verification pending'}
                </span>
              </div>

              <div className="cp-security-divider" />

              <Link
                to="/user/complaints"
                className="cp-secondary-link"
              >
                View my complaints
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/user/notifications"
                className="cp-secondary-link"
              >
                View notifications
                <span aria-hidden="true">→</span>
              </Link>
            </aside>
          </div>

          <div className="cp-page-footer">
            <span>
              © {new Date().getFullYear()} CivicFix
            </span>
            <span>Your account, your community.</span>
          </div>
        </>
      )}
    </section>
  );
}