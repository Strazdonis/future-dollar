import React from 'react';

import './Footer.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Heart from '@fortawesome/fontawesome-free-solid/faHeart';


class Footer extends React.Component {
  render() {
    return (
    <div className="Footer">
      <span className="Footer-text">Made with <FontAwesomeIcon className="Heart" icon={Heart} /> by <a className="link" href="https://github.com/Strazdonis/">Strazdonis</a></span>
    </div>
    );
  }
} 

export default Footer;