import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Policy from "./components/Policy"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;