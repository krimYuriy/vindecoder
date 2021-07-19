import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
   return (
      <header className="header">
         <div className="container _header-container">
            <Link to="/">
               <div className="header__logo">
                  Decoder logo
               </div>
            </Link>
            <nav className="header__menu">
               <div className="header__list">
                  <li><NavLink exact to="/" activeClassName="header__link-selected" className="header__link">Vehicle Decoder</NavLink></li>
                  <li><NavLink to="/variables" activeClassName="header__link-selected" className="header__link">Vehicle Info</NavLink></li>
               </div>
            </nav>
         </div>
      </header>
   )
}

export default Header
