import { useState } from "react";

import "./index.css"; // Import Tailwind CSS instead of App.css
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DonorRegister from "./pages/DonarRegister";
import StudentRegister from "./pages/student-register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor-register" element={<DonorRegister/>} />
        <Route path="/student-register" element={<StudentRegister/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
