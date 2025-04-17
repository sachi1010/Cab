import React, { useState, useRef } from 'react';
import '../css/Booking.css';

const Booking = ({ carList }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    time: '',
    date: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Refs for inputs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const vehicleRef = useRef(null);
  const timeRef = useRef(null);
  const dateRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.vehicle) newErrors.vehicle = 'Please choose a vehicle';
    if (!formData.time) newErrors.time = 'Travel time is required';
    if (!formData.date) newErrors.date = 'Travel date is required';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    // Focus on the first input with an error
    if (Object.keys(formErrors).length > 0) {
      if (formErrors.name) nameRef.current.focus();
      else if (formErrors.email) emailRef.current.focus();
      else if (formErrors.phone) phoneRef.current.focus();
      else if (formErrors.vehicle) vehicleRef.current.focus();
      else if (formErrors.time) timeRef.current.focus();
      else if (formErrors.date) dateRef.current.focus();
    } else {
      alert('Your Booking is confirmed');
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        time: '',
        date: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="book">

   
    <div className="booking">
      <form className="Booking-form" onSubmit={handleSubmit}>
        <h1>Book Your Ride</h1>

        <p>
          <label>Name:</label>
          <input  type="text"  name="name" value={formData.name} onChange={handleChange}/>
          {errors.name && <span className="error">{errors.name}</span>}
        </p>

        <p>
          <label>Email:</label>
          <input  type="email"  name="email"  value={formData.email}   onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </p>

        <p>
          <label>Phone:</label>
          <input  type="text"  name="phone"  value={formData.phone}  onChange={handleChange}/>
          {errors.phone && <span className="error">{errors.phone}</span>}
        </p>

        <p>
          <label>Choose Vehicle:</label>
          <select name="vehicle" value={formData.vehicle} onChange={handleChange}>
            <option value="">-- Select Vehicle --</option>
            {carList.map((car) => (
              <option key={car.id} value={car.id}>
                {car.name} ({car.seats} seats)
              </option>
            ))}
          </select>
          {errors.vehicle && <span className="error">{errors.vehicle}</span>}
        </p>

        <p>
          <label>Travel Time:</label>
          <input  type="time"  name="time"  value={formData.time}  onChange={handleChange} />
          {errors.time && <span className="error">{errors.time}</span>}
        </p>

        <p>
          <label>Travel Date:</label>
          <input type="date" name="date" value={formData.date}  onChange={handleChange}  />
          {errors.date && <span className="error">{errors.date}</span>}
        </p>

        <button type="submit">Book Now</button>

        {submitted && <p className="success">Booking successful!</p>}
      </form>
    </div>
    </div>
  );
};

export default Booking;
