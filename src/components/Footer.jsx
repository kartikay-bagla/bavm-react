import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BAVM Legal</h3>
            <p>Excellence in Legal Representation Since 1995</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📧 contact@bavmlegal.com</p>
            <p>📱 +1 (555) 123-4567</p>
            <p>📍 123 Legal Street, Suite 400</p>
          </div>
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 BAVM Legal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
