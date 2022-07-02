import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="My-logo">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{this.props.greeting} Here!</p>
          </div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <a
            className="App-link"
            href="https://sites.google.com/view/imran-haider-portfolio/projects/front-end-web-development"
            target="_blank" //Used to open the link in new tab
          >
            My Web Projects
          </a>
        </header>
      </div>
    );
  }
}

export default App;
