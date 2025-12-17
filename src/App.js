import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";
import Home from "./pages/home";
import TermsRuminar from "./pages/terms-ruminar";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-ruminar" element={<TermsRuminar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;