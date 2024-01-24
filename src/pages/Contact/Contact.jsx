import React from 'react'
import "./style.scss"
import Form from '../../components/Form/Form'
import Map from '../../components/Google Map/Map'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <div className="containercontact">Contact</div>
      <div className="container2">
        <div className="left">
          <div className="info">
            <div className="heading">CONTACT INFO</div>
            <div className="location">
            <i className="bi bi-geo-alt" />
            <p>Location: <br />Tinkune, Kathmandu</p>
            </div>
            <div className="phonemail">
              <div className="phone"><i className="bi bi-phone-vibrate" />
            <p>Phone: <br />+977 9836456215</p></div>
              <div className="email"><i className="bi bi-envelope" />
            <p>Mail: <br />info@epasal.com</p></div>
            </div>
          </div>
          <div className="getintouch">
            <div className="heading">GET IN TOUCH</div><br />
            <div className="form">
              <Form/>
            </div>
            
          </div>
        </div>
        <div className="right"><Map/></div>

      </div>
      <Footer/>
    </>
  )
}

export default Contact
