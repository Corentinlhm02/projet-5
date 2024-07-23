import React from 'react';
import myImage from '../assets/img/LOGOfooter.png';

function Footer() {
  return (
    <footer>
        <img src={myImage} alt="logo kasa" />
      <p>&copy;  2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
