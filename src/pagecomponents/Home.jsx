
import React, { useEffect } from 'react';
import '../css/Home.css';
import About from '../pagecomponents/About'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const Home = () => {
useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: false, 
  });
}, []);



  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" >
        <div className="overlay" data-aos="zoom-in">
          <h1 data-aos="fade-right">Welcome to Mayilai Cab</h1>
          <Link to="/booking">
  <button>Book Now</button>
</Link>


        </div>
      </section>



      {/* Services Section */}
      <section className="services" >
        <img src="../images/image.png" alt="cab" className="floating-image"/>

        <div className="best" data-aos="fade-up">
          <h1>Best in City</h1>
          <p>
            Our services are the best in the city. We have a wide range of vehicles<br />
            to cater to your needs. Our drivers are well trained and courteous.
          </p>
          <Link to="/booking"> <button>Book Now</button></Link>

        </div>
      </section>
        

      <section  className='row card-section' id='card'>
        <h1>Choose Your Rider</h1>
        {/* card1 */}
            <div className="card" data-aos="fade-up" >
              <img src="../images/card1.png" className="card-img-top" alt="Cab" />
              <div className="card-body">
                <h5 className="card-title">Economy Class</h5>
                <p> Ideal for daily commutes and budget-friendly travel. Enjoy a smooth ride in our compact and efficient vehicles.</p>
                <h6 className="price"> ₹20/KM</h6>
                <Link to="/booking"> <button className='btn-primary'>Book Now</button></Link>
              </div>
            </div>
            {/* card2 */}
            <div className="card" data-aos="fade-up">
              <img src="../images/card2.png" className="card-img-top" alt="Cab" />
              <div className="card-body">
                <h5 className="card-title">Premium Class</h5>
                      <p>
                      Travel in style with our premium class cabs, comfort, extra space, and top-rated drivers.
                    </p>
                    <h6 className="price"> ₹30/KM</h6>
                    <Link to="/booking"> <button className='btn-primary'>Book Now</button></Link>
              </div>
            </div>
            {/* card3 */}
            <div className="card" data-aos="fade-up">
              <img src="../images/card3.png" className="card-img-top" alt="Cab" />
              <div className="card-body">
                <h5 className="card-title">Business Class</h5>
                <p>
                For executives and special occasions, our business class offers luxury interiors and a first-class experience.
              </p>
              <h6 className="price"> ₹50/KM</h6>
              <Link to="/booking"> <button className='btn-primary'>Book Now</button></Link>
              </div>
            </div>
</section>


<About/>

    </div>
  );
};

export default Home;

