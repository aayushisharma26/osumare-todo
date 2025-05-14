import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import logo from "../assets/image.png"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="logo"><img src={logo} alt="" /></h2>
          <p>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
          <div className="subscribe">
            <input type="email" placeholder="Your email here" />
            <button>Join</button>
          </div>
          <small>By subscribing, you consent to our Privacy Policy and agree to receive updates.</small>
        </div>

        <div className="footer-links">
          <div>
            <h4>Useful Links</h4>
            <ul>
              <li>Home Page</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog Posts</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Help Center</li>
              <li>User Guide</li>
              <li>Community Forum</li>
              <li>Feedback</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4>Connect With Us</h4>
            <ul className="socials">
              <li><FaFacebookF /> Facebook</li>
              <li><FaInstagram /> Instagram</li>
              <li><FaXTwitter /> X</li>
              <li><FaLinkedinIn /> LinkedIn</li>
              <li><FaYoutube /> YouTube</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      
      <div className="footer-bottom">
        <p>© 2024 Osumare. All rights reserved.</p>
        <div className="footer-policy">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Settings</span>
        </div>
      </div>
    </footer>
  );
}
