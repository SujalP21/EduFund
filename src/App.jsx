import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import DonorRegister from './pages/DonarRegister.jsx';
import StudentRegister from './pages/student-register.jsx';
import DonorDashboard from './pages/DonorDashboard.jsx';
import StudentProfile from './pages/StudentProfile.jsx';
import Students from './pages/Students.jsx';
import Transactions from './pages/Transactions.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/donor-register" element={<DonorRegister />} />
            <Route path="/student-register" element={<StudentRegister />} />
            <Route path="/donor-dashboard" element={<DonorDashboard />} />
            <Route path="/student-profile/:id" element={<StudentProfile />} />
            <Route path="/students" element={<Students />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;