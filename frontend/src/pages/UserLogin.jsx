import React, { useState } from 'react';
import '../styles/auth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
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
        '/api/auth/user/login',
        { email, password },
        { withCredentials: true }
      );
      console.log('Login successful:', data);
      navigate('/');
    } catch (error) {
      const msg = error?.response?.data?.message || error?.response?.data || error.message;
      setStatus({ loading: false, error: String(msg) });
      return;
    }
    setStatus({ loading: false, error: '' });
  };

  return (
    <main className="auth-container">
      <section className="auth-card" aria-labelledby="userLoginHeading">
        <span className="role-badge" aria-label="User account">User</span>
        <header className="auth-header">
          <h1 id="userLoginHeading">Sign in</h1>
          <p>Access your account to continue ordering.</p>
        </header>
        <form className="form" noValidate onSubmit={handleSubmit}>
          <div className="field-grid">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
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