import '../Footer/Footer.css'
import user_icon from '../../assets/user_icon.svg'
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
        <div className="footer-top-left">
            <h1>Ansari</h1>
            <div className="social-media">
              <p className="fa-brands fa-instagram"></p>
            <p className="fa-brands fa-linkedin"></p>
            <p className="fa-brands fa-github"></p>
            <p className="fa-brands fa-facebook"></p>
            </div>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
               <p> @ 2025 Ansari Zahid Raza. All right reserved.</p>
            </div>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
