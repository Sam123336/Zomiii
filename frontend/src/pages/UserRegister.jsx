import React from 'react';
import '../styles/auth.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const address = form.address.value.trim();
    const password = form.password.value;

    console.log({ fullName, email, phone, address, password });

    try {
      const { data } = await axios.post(
        '/api/auth/user/register',
        { fullName, email, phone, address, password },{
          withCredentials: true
        }
      );
      console.log('Registration successful:', data);
      navigate('/');
      // TODO: redirect or show success message
    } catch (error) {
      console.error('There was an error registering!', error?.response?.data || error.message);
      // TODO: show error to user
    }
  };

  return (
    <main className="auth-container">
      <section className="auth-card" aria-labelledby="userRegisterHeading">
        <span className="role-badge" aria-label="User account">User</span>
        <header className="auth-header">
          <h1 id="userRegisterHeading">Create your account</h1>
          <p>Join us to explore great food nearby.</p>
        </header>
        <form className="form" noValidate onSubmit={handleSubmit}>
          <div className="field-grid">
            <div className="input-group">
              <label htmlFor="fullName">Full name</label>
              <input id="fullName" name="fullName" type="text" placeholder="John Doe" autoComplete="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="+91" autoComplete="tel" required />
            </div>
            <div className="input-group span-2">
              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" placeholder="Street, City, State" rows={3} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" required />
            </div>
          </div>
          <div className="actions">
            <button type="submit" className="button-primary">Create account</button>
            <div className="switch-links">
              Already have an account? <Link to="/user/login">Sign in</Link><br />
              Are you a food partner? <Link to="/food-partner/register">Register here</Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default UserRegister;