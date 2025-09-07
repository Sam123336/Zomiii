import React from 'react';
import '../styles/auth.css';
import { Link } from 'react-router-dom';

const PartnerLogin = () => {
  return (
    <main className="auth-container">
      <section className="auth-card" aria-labelledby="partnerLoginHeading">
        <span className="role-badge" aria-label="Food partner account">Partner</span>
        <header className="auth-header">
          <h1 id="partnerLoginHeading">Partner sign in</h1>
          <p>Manage your restaurant profile & orders.</p>
        </header>
        <form className="form" noValidate>
          <div className="field-grid">
            <div className="input-group">
              <label htmlFor="email">Business email</label>
              <input id="email" name="email" type="email" placeholder="you@restaurant.com" autoComplete="email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />
            </div>
          </div>
          <div className="actions">
            <button type="button" className="button-primary">Sign in</button>
            <div className="switch-links">
              New partner? <Link to="/food-partner/register">Create partner account</Link><br />
              User login? <Link to="/user/login">Go here</Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};
export default PartnerLogin;