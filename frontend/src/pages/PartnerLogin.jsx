import React, { useState } from 'react';
import '../styles/auth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PartnerLogin = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState({ loading: false, error: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '' });

    const form = e.currentTarget;
    const email = form.email.value.trim();
    const password = form.password.value;

    try {
      const { data } = await axios.post(
        '/api/auth/foodpartner/login',
        { email, password },
        { withCredentials: true }
      );
      console.log('Partner login successful:', data);
      navigate('/');
    } catch (err) {
      const msg = err?.response?.data?.message || err?.response?.data || err.message;
      setStatus({ loading: false, error: String(msg || 'Login failed. Please try again.') });
      return;
    }

    setStatus({ loading: false, error: '' });
  };

  return (
    <main className="auth-container">
      <section className="auth-card" aria-labelledby="partnerLoginHeading">
        <span className="role-badge" aria-label="Food partner account">Partner</span>
        <header className="auth-header">
          <h1 id="partnerLoginHeading">Partner sign in</h1>
          <p>Manage your restaurant profile & orders.</p>
        </header>
        <form className="form" noValidate onSubmit={handleSubmit}>
          <div className="field-grid">
            <div className="input-group">
              <label htmlFor="email">Business email</label>
              <input id="email" name="email" type="email" placeholder="you@restaurant.com" autoComplete="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" required />
            </div>
          </div>

          {status.error && <p role="alert" style={{ color: '#c62828' }}>{status.error}</p>}

          <div className="actions">
            <button type="submit" className="button-primary" disabled={status.loading}>
              {status.loading ? 'Signing in…' : 'Sign in'}
            </button>
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