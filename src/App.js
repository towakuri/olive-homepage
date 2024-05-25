import React from 'react';
import Header from 'src/components/Header.js';
import Footer from 'src/components/Footer';
import MainContent from 'src/components/MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
