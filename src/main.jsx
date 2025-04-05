
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import React, { StrictMode } from "react";


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );


import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter,  } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <AuthProvider>
        <App />
      </AuthProvider>
    
  </StrictMode>
);