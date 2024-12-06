
import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import LiveDemo from './pages/LiveDemo';
import Parking from './pages/Parking';
import Team from './pages/Team';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route Route path='/' element={<Home />}></Route>
        <Route Route path='/about' element={<About />}></Route>
        <Route Route path='/livedemo' element={<LiveDemo />}></Route>
        <Route Route path='/ourteam' element={<Team />}></Route>
        <Route Route path='/livedemo/test' element={<Parking />}></Route>
        <Route Route path='/livedemo/:id' element={<Parking />}></Route>
      </Routes>
    </>
  );
}

