import "./App.css";
import React, { component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Registration from "./Registration";
// import Login from "./Login";
// import Home from "./Home"
import Home from "./pages";
import Faq from "./pages/faq";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Sos from "./pages/Sos";

import Navbar from "./components/Navbar";

import "antd/dist/antd.css";
import { SsmlProsody } from "twilio/lib/twiml/VoiceResponse";

function App() {
  return (
    // </Router>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sos" element={<Sos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
