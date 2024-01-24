import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

function Header() {
  return (
    <>
      <div className="navbar">
      <div className="container">
        <div className="left">
          <div className="title">EPASAL</div>
        </div>
        <div className="middle">
          <Link className="home" to="/">Home</Link>
          <Link className="shop" aria-current="page" to="/shop">Shop</Link>
          <Link className="categories" to="/categories">Categories</Link>
          <Link className="blog" to="/blog">Blog</Link>
          <Link className="about" to="/about">About</Link>
          <Link className="contact" aria-current="page" to="/contact">Contact</Link>
          {/* <Link className="nav-link active" aria-current="page" to="contact">Contact</Link> */}


        </div>
        <div className="right">
          <div className="search"><i className="fa-solid fa-magnifying-glass" />
        </div>
          <div className="login"><i className="fa-regular fa-user" />
        </div>
          <div className="cart"><i className="fa-solid fa-cart-arrow-down" />
        </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Header
