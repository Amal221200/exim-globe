import "./styles.scss";
import Link from "next/link";
import { socialLinks } from "@/lib/constants";


const Footer = () => {
  return (
    <footer>
      <div id="footer-top" className="footer-section">
        <div className="footer-content">
          <h6>EXIM Global</h6>
          <p>
            Expand your reach, and elevate your brand. We're your global xport experts.
          </p>

          <p>
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

        <div className="footer-content">
          <h6>Our Office</h6>
          <p>
            Sai Dham, A11, Akurdi Pradhikaran Road,<br />
            PCNTDA, Pune – 411044, Maharashtra INDIA <br />
          </p>

          <div>
            <a href="" target="_blank">+91 86003 16457</a> <br />
            <a href="" target="_blank">+91 95271 06880</a> <br /> <br />
            <a href="" target="_blank">sales@eximglobal-net.preview-domain.com</a> <br />
            <a href="" target="_blank">marketing.eximglobal@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="hr" />

      <div id="footer-bottom" className="footer-section">
        <p>Copyright © 2024 EXIM Global.</p>

        <div className="social-links-footer">
          {
            socialLinks.map(({ Icon, url }, key) => (
              <a href={url} target="_blank" key={key}>
                <Icon size={25} />
              </a>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer