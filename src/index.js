import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import MainGrid from './components/MainGrid.js'
// import { ThemeProvider } from "@material-ui/core/styles";
// import theme from './components/theme.js'

// console.log(process.env.PUBLIC_URL)
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <MainGrid />
  </Router>,
  document.getElementById('root'),
);

// deploy: https://github.com/gitname/react-gh-pages

