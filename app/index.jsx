import './main.css';
import 'jquery/dist/jquery.min.js';
import 'materialize-css/bin/materialize.js';
import 'materialize-css/dist/css/materialize.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  ReactDOM.render(<App />, app);
}