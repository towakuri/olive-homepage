import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Information from './components/Information';
import './App.css';
import usePageViews from './usePageViews';

function App() {
  return (
    <Router>
      <PageViewWrapper />
    </Router>
  );
}

function PageViewWrapper() {
  usePageViews(); // ページビューのトラッキングを適用

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
