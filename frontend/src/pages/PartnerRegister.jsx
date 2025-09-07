import React from 'react';
import '../styles/auth.css';
import { Link } from 'react-router-dom';

const PartnerRegister = () => {
  return (
    <main className="auth-container">
      <section className="auth-card" aria-labelledby="partnerRegisterHeading">
        <span className="role-badge" aria-label="Food partner account">Partner</span>
        <header className="auth-header">
          <h1 id="partnerRegisterHeading">Partner registration</h1>
          <p>List your restaurant and reach more customers.</p>
        </header>
        <form className="form" noValidate>
          <div className="field-grid">
            {/* Full Name */}
            <div className="input-group">
              <label htmlFor="fullName">Full name</label>
              <input id="fullName" name="fullName" type="text" placeholder="Owner full name" />
            </div>
            {/* Email */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="contact@example.com" autoComplete="email" />
            </div>
            {/* Phone */}
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="+91" autoComplete="tel" />
            </div>
            {/* Address */}
            <div className="input-group span-2">
              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" placeholder="Restaurant address" rows={3} />
            </div>
            {/* Password */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" />
            </div>
          </div>
          <div className="actions">
            <button type="button" className="button-primary">Register</button>
            <div className="switch-links">
              Already a partner? <Link to="/food-partner/login">Sign in</Link><br />
              Want a user account? <Link to="/user/register">User sign up</Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};
export default PartnerRegister;