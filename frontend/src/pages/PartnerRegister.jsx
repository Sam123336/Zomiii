import React, { useState } from 'react';
import '../styles/auth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PartnerRegister() {
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    const form = e.currentTarget;
    const fullName = form.fullName.value.trim();
    const businessName = form.businessName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const address = form.address.value.trim();
    const password = form.password.value;

    try {
      await axios.post(
        '/api/auth/foodpartner/register',
        { fullName, businessName, email, phone, address, password },
        { withCredentials: true }
      );
      setStatus({ loading: false, error: '', success: 'Registration successful!' });
      navigate('/food-partner/login');
    } catch (err) {
      const msg = err?.response?.data?.message || err?.response?.data || err.message;
      setStatus({ loading: false, error: String(msg || 'Registration failed. Please try again.'), success: '' });
    }
  };

  return (
    <main className="auth-container">
      <section className="auth-card" aria-labelledby="partnerRegisterHeading">
        <span className="role-badge" aria-label="Food partner account">Partner</span>
        <header className="auth-header">
          <h1 id="partnerRegisterHeading">Partner registration</h1>
          <p>List your restaurant and reach more customers.</p>
        </header>
        <form className="form" noValidate onSubmit={handleSubmit}>
          <div className="field-grid">
            {/* Full Name */}
            <div className="input-group">
              <label htmlFor="fullName">Full name</label>
              <input id="fullName" name="fullName" type="text" placeholder="Owner full name" required />
            </div>
            {/* Business Name */}
            <div className="input-group">
              <label htmlFor="businessName">Business name</label>
              <input id="businessName" name="businessName" type="text" placeholder="Restaurant name" required />
            </div>
            {/* Email */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="contact@example.com" autoComplete="email" required />
            </div>
            {/* Phone */}
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="+91" autoComplete="tel" required />
            </div>
            {/* Address */}
            <div className="input-group span-2">
              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" placeholder="Restaurant address" rows={3} required />
            </div>
            {/* Password */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" placeholder="********" autoComplete="new-password" required />
            </div>
          </div>

          {status.error && <p role="alert" style={{ color: '#c62828' }}>{status.error}</p>}
          {status.success && <p role="status" style={{ color: '#2e7d32' }}>{status.success}</p>}

          <div className="actions">
            <button type="submit" className="button-primary" disabled={status.loading}>
              {status.loading ? 'Registering…' : 'Register'}
            </button>
            <div className="switch-links">
              Already a partner? <Link to="/food-partner/login">Sign in</Link><br />
              Want a user account? <Link to="/user/register">User sign up</Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}