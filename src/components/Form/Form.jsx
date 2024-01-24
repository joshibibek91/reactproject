import { useState } from "react"
import React from 'react'
import "./style.scss"

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here, e.g., send the data to a server
        console.log('Form submitted:', formData);
      };
    
      return (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {/* <label htmlFor="name">Name:</label> */}
            <div className="nameemail">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="your name"
              value={formData.name}
              onChange={handleChange}
            />
    
            {/* <label htmlFor="email">Email:</label> */}
            <input
            
              type="email"
              id="email"
              name="email"
              placeholder="your email"
              value={formData.email}
              onChange={handleChange}
            /> 
            </div>
    
            {/* <label htmlFor="subject">Subject:</label> */}
            <div className="subject">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="subject"
              value={formData.subject}
              onChange={handleChange}
            /> </div>
    
            {/* <label htmlFor="message">Message:</label> */}

            <div className="msg">
            <textarea
              id="message"
              name="message"
              placeholder="message"
              value={formData.message}
              onChange={handleChange}
            /> 
            </div>
    
            <button type="submit">SEND</button>
          </form>
        </div>
      );
    }

export default Form
