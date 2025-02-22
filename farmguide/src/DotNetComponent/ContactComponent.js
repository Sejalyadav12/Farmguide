import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ContactUs.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form Data Submitted:', formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="login-card" style={{top:30}}>
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Please fill out this form and we'll get in touch with you shortly.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        {submitted && <p className="text-success mt-3">Thank you for contacting us! We'll get back to you soon.</p>}
      </form>
    </div>
  );
}
