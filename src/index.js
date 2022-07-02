import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import MyApp from './containers/MyApp';
import Intro from './containers/Intro';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <App greeting={"React Ninja"}/>
    <MyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
