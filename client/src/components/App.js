import NavBar from "./NavBar/NavBar";
import LandingPage from "./Landingpage/LandingPage";
import Items from "./items/items"
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Detail from "./Detail/Detail";
import ExTable from "./example/ExTable";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: "100vh" }}>
        {/* 요청 경로로 페이지 이동: 특정 컴포넌트 실행  */}
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/movie/:movieId" element={<Detail />} />
            <Route path="/items" element={<Items />} />
            <Route path="/example/table" element={<ExTable />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;