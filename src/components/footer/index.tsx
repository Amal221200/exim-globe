import { FacebookIcon, ImagesIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import "./styles.scss";


const Footer = () => {
  return (
    <footer>
      <div id="footer-top" className="footer-section">
        <div className="left">
          <div className="footer-content">
            <h6>EXIM Elite</h6>
            <p>
              {`"Your Global Trade Partner. Quality exports, diverse products. Join us on the journey!"`}
            </p>

            <p className="small">
              Mon - Sat 09:30 - 18:30, <br />
              Sunday - CLOSED
            </p>
          </div>

          <div className="footer-content">
            <h6>Our Services</h6>
            <nav>
              <a href="">Home</a>
              <a href="">Products</a>
              <a href="">Sourcing Agent</a>
              <a href="">Contact Us</a>
              <a href="">Marketing</a>
            </nav>
          </div>
        </div>

        <div className="right">
          <div className="footer-content">
            <h6>Office in India</h6>
            <p>
              Ambegaon Budruk, Pune, <br />
              Maharashtra 411046 <br />
            </p>

            <div>
              <a href="">+91-98 544 32222</a> <br />
              <a href="">contact@eximelite.com</a>
            </div>
          </div>
          <div className="footer-content">
            <h6>Our Locations</h6>
            <ul>
              <li>India</li>
              <li>Canada</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hr" />

      <div id="footer-bottom" className="footer-section">
        <p>Copyright © 2024 EXIM Global Pune</p>

        <div className="social-links">
          <a href="#"><FacebookIcon /></a>
          <a href="#"><InstagramIcon /></a>
          <a href="#"><TwitterIcon /></a>
          <a href="#"><LinkedinIcon /></a>
          <a href="#"><YoutubeIcon /></a>
          <a href="#"><ImagesIcon /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer