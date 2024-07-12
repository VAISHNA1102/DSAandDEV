import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import Tutorials from './components/Tutorials';
import TutorialPageInfo from './components/TutorialPageInfo';
import Contact from './components/Contact';
import Login from './pages/Login';
import Profile from './pages/Profile'



function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Auth />} /> */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/tutorial' element = {<Tutorials/>}/>
          <Route path="/tutorial/:tutorialName" element={<TutorialPageInfo/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
