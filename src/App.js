import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Init from './components/Init';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Galery from './components/Galery';
import { Route, Routes } from 'react-router-dom';

function App() {

  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<div><Init/></div>}/>
        <Route path='/about' element={<div><About/></div>}/>
        <Route path='/contact' element={<div><Contact/></div>}/>
        <Route path='/experience' element={<div><Experience/></div>}/>
        <Route path='/gallery' element={<div><Galery/></div>}/>
      </Routes>
    </div>
  );
}

export default App;
