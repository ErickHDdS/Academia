import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Secretary from "./pages/Secretary";
import Teacher from "./pages/Teacher";
import Home from "./pages/Home";
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
