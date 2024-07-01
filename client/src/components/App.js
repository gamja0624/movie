import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Detail from "./Detail/Detail";
import Footer from "./Footer/Footer";
import LandingPage from "./Landingpage/LandingPage";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: "100vh" }}>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/detail/:movieId" element={<Detail />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;