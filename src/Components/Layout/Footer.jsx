export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__sections">
                <div className="footer__section">
                    <h3>Company</h3>
                    <a href="#about" className="footer__link">About Us</a>
                    <a href="#careers" className="footer__link">Careers</a>
                    <a href="#press" className="footer__link">Press</a>
                    <a href="#blog" className="footer__link">Blog</a>
                </div>
                <div className="footer__section">
                    <h3>Support</h3>
                    <a href="#help" className="footer__link">Help Center</a>
                    <a href="#contact" className="footer__link">Contact Us</a>
                    <a href="#terms" className="footer__link">Terms of Service</a>
                    <a href="#privacy" className="footer__link">Privacy Policy</a>
                </div>
                <div className="footer__section">
                    <h3>Resources</h3>
                    <a href="#trading-guides" className="footer__link">Trading Guides</a>
                    <a href="#market-insights" className="footer__link">Market Insights</a>
                    <a href="#security" className="footer__link">Security</a>
                </div>
                <div className="footer__section footer__socials">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#facebook" className="social-icon">📘</a>
                        <a href="#twitter" className="social-icon">🐦</a>
                        <a href="#linkedin" className="social-icon">🔗</a>
                        <a href="#instagram" className="social-icon">📸</a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </footer>
    );
};
