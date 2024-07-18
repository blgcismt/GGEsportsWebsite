import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import './App.css';
import HomePage from './HomePage';
import Navbar from './Navbar';  
import Footer from './Footer';  
import Tournaments from './Tournaments';  
import Standings from './Standings';      
import Coaches from './Coaches';          
import Profile from './Profile';          
import SignInModal from './SignInModal';
import RegisterModal from './RegisterModal';


function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleSignInClose = () => setShowSignIn(false);
  const handleRegisterClose = () => setShowRegister(false);
  const handleSwitchToRegister = () => {
    setShowSignIn(false);
    setShowRegister(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSignInClick={() => setShowSignIn(true)} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
        {showSignIn && <SignInModal onClose={handleSignInClose} onSwitchToRegister={handleSwitchToRegister} />}
        {showRegister && <RegisterModal onClose={handleRegisterClose} />}
      </div>
    </Router>
  );
}

export default App;
