import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext'; // You'll need to create this context

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // Assuming you'll have an auth context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold">EduFund</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md font-medium hover:bg-blue-500">Home</Link>
                <Link to="/students" className="px-3 py-2 rounded-md font-medium hover:bg-blue-500">Students</Link>
                <Link to="/about" className="px-3 py-2 rounded-md font-medium hover:bg-blue-500">About</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user ? (
                <>
                  {user.role === 'donor' && (
                    <Link to="/donor-dashboard" className="px-3 py-2 rounded-md font-medium hover:bg-blue-500">
                      Dashboard
                    </Link>
                  )}
                  {user.role === 'student' && (
                    <Link to={`/student-profile/${user.id}`} className="px-3 py-2 rounded-md font-medium hover:bg-blue-500">
                      My Profile
                    </Link>
                  )}
                  <button 
                    onClick={handleLogout}
                    className="px-4 py-2 ml-2 bg-red-500 hover:bg-red-600 rounded-md font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="px-3 py-2 rounded-md font-medium hover:bg-blue-500">Login</Link>
                  <Link to="/register" className="px-4 py-2 ml-2 bg-green-500 hover:bg-green-600 rounded-md font-medium">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-500">Home</Link>
            <Link to="/students" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-500">Students</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-500">About</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-blue-500">
            {user ? (
              <div className="px-2 space-y-1">
                {user.role === 'donor' && (
                  <Link to="/donor-dashboard" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-500">
                    Dashboard
                  </Link>
                )}
                {user.role === 'student' && (
                  <Link to={`/student-profile/${user.id}`} className="block px-3 py-2 rounded-md font-medium hover:bg-blue-500">
                    My Profile
                  </Link>
                )}
                <button 
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md font-medium hover:bg-red-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="px-2 space-y-1">
                <Link to="/login" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-500">Login</Link>
                <Link to="/register" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-500">Register</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;