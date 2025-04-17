import React from 'react';
import '../css/Cars.css'
import { Link } from 'react-router-dom'
const carList = [
  {
    id: 1,
    name: 'Toyota Innova Crysta',
    seats: 7,
    ac: true,
    image: '../images/car3.png',
  },
  {
    id: 2,
    name: 'Maruti Suzuki Dzire',
    seats: 4,
    ac: true,
    image: '../images/car8.png',
  },
  {
    id: 3,
    name: 'Tempo Traveller',
    seats: 12,
    ac: true,
    image: '../images/car2.png',
  },
  {
    id: 4,
    name: 'Hyundai Verna',
    seats: 5,
    ac: true,
    image: '../images/car7.png',
  },
  {
    id: 5,
    name: 'Tata Indica',
    seats: 4,
    ac: false,
    image: '../images/car6.png',
  },
  {
    id: 6,
    name: 'Mahindra Xylo',
    seats: 7,
    ac: true,
    image: '../images/car5.png',
  },
  {
    id: 7,
    name: 'Toyota Etios',
    seats: 4,
    ac: true,
    image: '../images/car1.png',
  },
  {
    id: 8,
    name: 'Maruti Ertiga',
    seats: 6,
    ac: true,
    image: '../images/car4.png',
  },
  {
    id: 9,
    name: 'Mini Bus 21 Seater',
    seats: 21,
    ac: true,
    image: '../images/car9.png',
  },
];


export const Cars = () => {
  return (
  <div className="car">
    <div className="cars-container">
    <h2 className="cars-title">Our Cars</h2>
    <div className="cars-grid">
      {carList.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.image} alt={car.name} className="car-image" />
          <h3 className="car-name">{car.name}</h3>
          <p className="car-info">Seats: {car.seats}</p>
          <p className="car-info">AC: {car.ac ? 'Yes' : 'No'}</p>
          <Link to="/booking"> <button className="car-button">Book Now</button> </Link>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
};

export default Cars;
