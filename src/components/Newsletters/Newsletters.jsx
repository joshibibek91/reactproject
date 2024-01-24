import React, { useState } from 'react';
import "./style.scss"

function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to handle the newsletter subscription
    console.log('Email submitted:', email);
    // You can send the email to a server or perform other actions
  };

  return (
    <div>
      {/* <h2>Subscribe to Our Newsletter</h2> */}
      <div className="newslettercontainer">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="email">Email:</label> */}
        <input
        
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="your email"
          required
        />
        <button type="submit"><i class="bi bi-arrow-right"></i></button>
      </form>
      </div>
    </div>
  );
}

export default NewsletterSignup;