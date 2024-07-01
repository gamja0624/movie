import NavBar from "./NavBar/NavBar";
import LandingPage from "./Landingpage/LandingPage";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Detail from "./Detail/Detail";
import Items from "./Items/Items";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: "100vh" }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Items" element={<Items />} />
            <Route path="/movie/:movieId" element={<Detail />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;