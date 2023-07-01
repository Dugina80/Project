import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Helmet>
      <link rel="icon" type="image/png" href="/free-icon-gymnastics-10741808.png" />
    </Helmet>
    <App />
  </>
);

reportWebVitals();
