import React from 'react';
import './index.css';

import ReactDOM from 'react-dom/client';
import App from './components/App';
// import 'semantic-ui-css/semantic.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.body.classList.add('my-background');



