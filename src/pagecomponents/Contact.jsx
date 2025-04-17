
import React, { useState } from 'react';
import '../css/Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    source: '',
    destination: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) 
      newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.source.trim())
       newErrors.source = 'Source is required';
    if (!formData.destination.trim())
       newErrors.destination = 'Destination is required';
    if (!formData.feedback.trim()) 
      newErrors.feedback = 'Feedback is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('Feedback Data:', formData);
      alert('Thank you for your feedback!');
      setFormData({ name: '', email: '', source: '', destination: '', feedback: '' });
      setErrors({});
    }
  };

  return (
    <div className='contact-details'>
      <div id='detail'>
        <h1>Contact Us</h1>
        <p>Email: support@mayilaicab.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Mayiladuthurai, Tamil Nadu</p>
      </div>

      <hr className='line' />

      <form className="feedback" onSubmit={handleSubmit}>
        <h1>Feedback Form</h1>

        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter Your Name'/>
        {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}

        <label>Email:</label>
        <input  type="text"  name="email"  placeholder='Enter Your Email'  value={formData.email}  onChange={handleChange} />
        {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}

        <label>Your Travel Place:</label>
        <input  type="text"  name="source"  placeholder='Enter Your Source'  value={formData.source}  onChange={handleChange}  />
        {errors.source && <small style={{ color: 'red' }}>{errors.source}</small>}

        <input  type="text"  name="destination"  placeholder='Enter Your Destination' value={formData.destination}  onChange={handleChange}  />
        {errors.destination && <small style={{ color: 'red' }}>{errors.destination}</small>}

        <label>Your Feedback:</label>
        <textarea  name="feedback"  placeholder='Write your feedback here...'  value={formData.feedback}  onChange={handleChange}  />
        {errors.feedback && <small style={{ color: 'red' }}>{errors.feedback}</small>}

        <button type="submit">Submit Your Feedback</button>
      </form>
    </div>
  );
};

export default Contact;
