import React from 'react';
import '../styles/auth.css';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  return (
    <main className="auth-container">
      <section className="auth-card" aria-labelledby="userLoginHeading">
        <span className="role-badge" aria-label="User account">User</span>
        <header className="auth-header">
          <h1 id="userLoginHeading">Sign in</h1>
          <p>Access your account to continue ordering.</p>
        </header>
        <form className="form" noValidate>
          <div className="field-grid">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />
            </div>
          </div>
          <div className="actions">
            <button type="button" className="button-primary">Sign in</button>
            <div className="switch-links">
              New here? <Link to="/user/register">Create account</Link><br />
              Food partner? <Link to="/food-partner/login">Partner login</Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};
export default UserLogin;