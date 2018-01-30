import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/index.jsx';
import sass from './sass/style.sass'

render(
  <App />,
  document.getElementById('app')
);

console.log('Hola mundo desde react con webpack');
