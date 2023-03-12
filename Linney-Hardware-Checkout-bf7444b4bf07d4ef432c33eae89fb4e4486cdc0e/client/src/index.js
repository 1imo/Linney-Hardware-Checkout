import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextHandler } from './str/UserContext';
import { DevContextHandler } from './str/DevContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DevContextHandler>
      <UserContextHandler>
        <App />
      </UserContextHandler>
    </DevContextHandler>
  </React.StrictMode>
);


