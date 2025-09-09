import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegister from "../src/pages/UserRegister.jsx";
import UserLogin from "../src/pages/UserLogin.jsx";
import PartnerRegister from "../src/pages/PartnerRegister.jsx";
import PartnerLogin from "../src/pages/PartnerLogin.jsx";
import Home from "../src/pages/general/Home.jsx"; 
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* User Auth */}
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        {/* Food Partner Auth */}
        <Route path="/food-partner/register" element={<PartnerRegister />} />
        <Route path="/food-partner/login" element={<PartnerLogin />} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
};
export default AppRoutes;