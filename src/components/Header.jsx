import React from 'react'

function Header() {
   return (
      <header className="header">
         <div className="container _header-container">
            <div className="header__logo">
               Decoder logo
            </div>
            <nav className="header__menu">
               <div className="header__list">
                  <li><a href="" className="header__link">Vehicle Decoder</a></li>
                  <li><a href="" className="header__link">Vehicle Info</a></li>
               </div>
            </nav>
         </div>
      </header>
   )
}

export default Header
