import "./styles.scss";
import Link from "next/link";
import { socialLinks } from "@/lib/constants";


const Footer = () => {
  return (
    <footer>
      <div id="footer-top" className="footer-section">
        <div className="left">
          <div className="footer-content">
            <h6>Exim Global</h6>
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
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/sourcing-agent">Sourcing Agent</Link>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/marketing">Marketing</Link>
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
              <a href="" target="_blank">+91-98 544 32222</a> <br />
              <a href="" target="_blank">contact@eximelite.com</a>
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

        <div className="social-links-footer">
          {
            socialLinks.map(({ Icon, url }, key) => (
              <a href={url} target="_blank" key={key}>
                <Icon size={18} />
              </a>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer