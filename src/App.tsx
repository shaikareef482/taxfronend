import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Loginone from './Components/Loginone';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Regone from './Components/Regone';
import LandingPage from './Components/LandingPage';
import NavbarOne from './Components/NavbarOne';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LanderPage from './Demo/LanderPage';
import FooterOne from './Demo/FooterOne';
import Profile from './Demo/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/login' element={<Loginone/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/ladingpage' element={<LanderPage/>}/>
        <Route path='/nav' element={<Navbar/>}/>
        <Route path='/footer' element={<FooterOne/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
