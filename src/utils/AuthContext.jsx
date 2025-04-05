import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for user data
    const userData = localStorage.getItem('eduFundUser');
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('eduFundUser', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('eduFundUser');
    return true;
  };

  const updateUser = (userData) => {
    setCurrentUser({ ...currentUser, ...userData });
    localStorage.setItem('eduFundUser', JSON.stringify({ ...currentUser, ...userData }));
    return true;
  };

  const value = {
    currentUser,
    login,
    logout,
    updateUser,
    isAuthenticated: !!currentUser,
    isStudent: currentUser?.role === 'student',
    isDonor: currentUser?.role === 'donor',
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};