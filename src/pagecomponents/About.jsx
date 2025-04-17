
import '../css/About.css';

export const About = () => {
 


  return (
    <>
      <section className='about'>
        <div className='overlay-content' data-aos="zoom-in">
          <h1>Why Choose Us</h1>
        </div>
        <div className='grid-content'>
          <div className='box' data-aos="fade-right">
            <h1>Quick Booking</h1>
            <div className='empty'></div>
            <p>Enjoy the ease of booking your trips within minutes...</p>
          </div>
          <div className='box' data-aos="fade-right">
            <h1>Travel Assurance</h1>
            <div className='empty'></div>
            <p>Travel confidently with our comprehensive assurance plans...</p>
          </div>
          <div className='box' data-aos="fade-left">
            <h1>Low Price</h1>
            <div className='empty'></div>
            <p>Get the best value for your money with our competitive pricing...</p>
          </div>
          <div className='box' data-aos="fade-left">
            <h1>Drive Safe And Fast</h1>
            <div className='empty'></div>
            <p>Experience the perfect balance of speed and safety on the road...</p>
          </div>
        </div>

        {/* Additional Section */}
        <div className='about-details'>
          <div className='section' data-aos="fade-up">
            <h2>Our Mission</h2>
            <p>Our mission is to provide safe, affordable, and fast travel services with exceptional customer support, making your journey stress-free and enjoyable.</p>
          </div>
          <div className='section' data-aos="fade-up">
            <h2>Our Vision</h2>
            <p>We aim to be the leading transport service, known for our reliable vehicles, on-time service, and customer-first approach, while continuously evolving to meet the needs of our passengers.</p>
          </div>
        </div>

   
        {/* Customer Support */}
        <div className='customer'>
          <div className='customer-content' data-aos="zoom-in">
            <h1 id='support'>24 / 7 Customer Support</h1>
            <h2 id='support'>Phone: +91 98765 43210</h2>
            <p id='support'>Get assistance whenever you need it...</p>
          </div>

          <img src="./images/24.png" alt="Customer Support" height="300px" width="300px" data-aos="zoom-in"/>
        </div>
      </section>

     
    </>
  );
};

export default About;

