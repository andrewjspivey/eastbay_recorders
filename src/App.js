import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProducerPage from "./Producer/ProducerPage";
import AlbumPage from "./AlbumPage/AlbumPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/producer/:id" element={<ProducerPage />} />
          <Route exact path="/album/:id" element={<AlbumPage />} />

          {/* <Route exact path="/about" element={<About />} />

          <Route exact path="/gear" element={<Gear/>} />
          <Route exact path="/scene" element={<Scene />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blog" element={<BlogHome />}> 
          <Route exact path="/blog/:id" element={<SingleBlog />}> 
          */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
