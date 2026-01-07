import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";
import Home from "./pages/home";
import TermsRuminar from "./pages/terms-ruminar";
import ResetSenha from "./pages/reset-senha";
import PrivacyTruckage from "./pages/terms-truckage";
import PrivacyClinic from "./pages/terms-cleuza";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-ruminar" element={<TermsRuminar />} />
            <Route path="/privacy-truckage" element={<PrivacyTruckage />} />
             <Route path="/privacy-cleuza" element={<PrivacyClinic />} />
           <Route path="/reset-senha" element={<ResetSenha />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;