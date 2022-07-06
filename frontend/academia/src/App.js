import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Secretary from "./pages/Secretary";
import Teacher from "./pages/Teacher";
import Doctor from "./pages/Doctor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/secretary" exact element={<Secretary />} />
        <Route path="/teacher" exact element={<Teacher />} />
        <Route path="/doctor" exact element={<Doctor />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
