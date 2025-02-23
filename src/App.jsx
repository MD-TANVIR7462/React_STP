import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about/:id" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
