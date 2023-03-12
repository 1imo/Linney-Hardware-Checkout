import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './pages/unauthorized/Login';
import { Routes, BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './pages/authorized/Dashboard';
import UserContext from './str/UserContext';
import Catch from './pages/authorized/Catch';
import Details from './pages/authorized/Details';
import Org from './pages/authorized/Org';


function App() {
 

  const UserCtx= useContext(UserContext);
  console.log(UserCtx.user)

  return (
   
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<Catch />} />
        <Route path="/org" element={<Org />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
