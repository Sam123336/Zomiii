import React from 'react';
import '../styles/auth.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserRegister = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const password = e.target.password.value;
    console.log({ firstName, lastName, email, phone, address, password });

    axios.post('/api/users/register', {
      firstName,
      lastName,
      email,
      phone,
      address,
      password
    })
    .then(response => {
      console.log('Registration successful:', response.data);
      // Redirect or show success message
    })
    .catch(error => {
      console.error('There was an error registering!', error);
      // Show error message to user
    });

  }
  return (
    <main className="auth-container">
      <section className="auth-card" aria-labelledby="userRegisterHeading">
        <span className="role-badge" aria-label="User account">User</span>
        <header className="auth-header">
          <h1 id="userRegisterHeading">Create your account</h1>
          <p>Join us to explore great food nearby.</p>
        </header>
        <form className="form" noValidate>
          <div className="field-grid">
            <div className="input-group">
              <label htmlFor="fullName">Full name</label>
              <input id="fullName" name="fullName" type="text" placeholder="John Doe" autoComplete="name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="+91" autoComplete="tel" />
            </div>
            <div className="input-group span-2">
              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" placeholder="Street, City, State" rows={3} />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" />
            </div>
          </div>
          <div className="actions">
            <button type="button" className="button-primary">Create account</button>
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