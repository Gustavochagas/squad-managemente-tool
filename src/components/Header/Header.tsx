import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <a href=" " className="header-link"><span>Home</span></a>
        <span>Squad Management Tool</span>
      </div>
      <div className="header-user">
        <span>John Doe</span>
        <div className="user-image">JD</div>
      </div>
    </div>
  );
}

export default Header;
