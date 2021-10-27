import React from 'react';
import { ShoppingCart } from 'react-feather'
import logo from '../../assets/images/icons/bejamas.png';

const Header: React.FC = () => (
  <div>
    <header className="header d-flex-center justify-between">
      <div className="header__menu d-flex-center">
        <img className="header__logo" src={logo} alt="logo" />

      </div>
      <div className="header__action d-flex-center">
        <ShoppingCart size={28} />
      </div>
    </header>

    <header className="mobile-header justify-between">
      <img className="mobile-header__logo img-logo" src={logo} alt="logo" />
      <div>
        <ShoppingCart size={28} />
      </div>
    </header>
  </div>
)


export default Header;
