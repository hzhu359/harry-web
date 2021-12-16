import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import reportWebVitals from './reportWebVitals';
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



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
