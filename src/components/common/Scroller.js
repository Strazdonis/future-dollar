import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    isTop: true,
  };

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
      <div style={{ height: '200vh' }}>
        <h2 style={{ position: 'fixed', top: 0 }}>Scroll {this.state.isTop ? 'down' : 'up'}!</h2>
      </div>
    );
  }
} 

export default Scroll;