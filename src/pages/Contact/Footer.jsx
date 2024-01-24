import React from 'react'
import "./style.scss"
import NewsletterSignup from '../../components/Newsletters/Newsletters'

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="upper">
            <div className="epasal">
              <div className="head">EPASAL</div><br />
              <p>Get 10% discount with notified about <br /> the latest news and updates.</p>
            </div>
            <div className="newsletter">Newsletter <br /><br />
            <NewsletterSignup/>
            </div>
            <div className="contactus">
              <div className="head">Contact Us</div><br />
              <p>Tinkune, Kathmandu <br /> +98453265331</p>
            </div>
            <div className="followus">
              <div className="head">Follow Us</div><br />
              <div className="logos">
              <i class="fa-brands fa-facebook-f fa-sm"></i>
              <i class="fa-brands fa-google fa-sm"></i>
              <i class="fa-brands fa-twitter fa-sm"></i>
              <i class="fa-brands fa-instagram fa-sm"></i>
              </div>
            </div>
        </div>
        <div className="lower">
          <div className="left">
          © 2018 Epasal All Right Reserved.
          </div>
          <div className="right">
            <div className="myaccount">My Account</div>
            <div className="wishlist">Wish List</div>
            <div className="contactus">Contact Us</div>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default Footer
