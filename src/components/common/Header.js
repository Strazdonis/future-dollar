import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';
import Search from './Search';
import './Header.css';



class Header extends React.Component {
	constructor() {
	super();

  this.state = {
    isTop: true,
  };
	}
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  render() {
    return (
    <div className="Header">
    <Link to="/">
      <h2 alt="logo" className="Header-logo">Crypto</h2>
    </Link>

    <Search />
    </div>
    );
  }
} 

export default Header;