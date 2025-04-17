import React from 'react'
import '../css/Footer.css'
export const Footer = () => {
  return (
    <>
<footer className="footer">
  <div className="footer-content">
    <div className="footer-section about-content">
      <h3>Mayilai Cab</h3>
      <div className='empty'></div>
      <p>Reliable and affordable cab service in your city. Available 24/7 to get you where you need <br/> go, safely and comfortably.</p>
    </div>

    <div className="footer-section links">
      <h4>Quick Links</h4>
      <div className='empty'></div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Cars</a></li>
        <li><a href="#">Booking</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div className="footer-section contact">
      <h4>Contact Us</h4>
      <div className='empty'></div>
      <p>Email: support@mayilaicab.com</p>
      <p>Phone: +91 98765 43210</p>
      <p>Mayiladuthurai, Tamil Nadu</p>

      <div className="social-media-footer">
              <p >
                <a href="#"><i class="bi bi-instagram"></i></a>
              </p>
              <p>
                <a href="#"><i class="bi bi-facebook"></i></a>
              </p>
              <p>
                <a href="#"><i class="bi bi-whatsapp"></i></a>
              </p>
              <p>
                <a href="#"><i class="bi bi-phone"></i></a>
              </p>
            </div>
    </div>
  </div>

  <div className="footer-bottom">
    &copy; {new Date().getFullYear()} Mayilai Cab | All Rights Reserved By Sachithananthan
  </div>
</footer>

    </>
  )
}
