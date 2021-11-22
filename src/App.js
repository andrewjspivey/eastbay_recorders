import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProducerPage from "./Producer/ProducerPage";
import { producers } from "./data/producerData";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/producer/:id" element={<ProducerPage />} />
          {/* <Route exact path="/about" element={<About />} />

          <Route exact path="/gear" element={<Gear/>} />
          <Route exact path="/scene" element={<Scene />} />
          <Route exact path="/blog/"> 
          */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
