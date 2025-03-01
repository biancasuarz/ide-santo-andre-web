import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <ToastContainer />
      <header>
        <h1>Navbar</h1>
      </header>
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <footer>
        <h1>Footer</h1>
      </footer>
    </Router>
  );
}

export default App;
