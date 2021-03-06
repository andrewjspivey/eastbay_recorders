import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlbumPage from "./AlbumPage/AlbumPage";
import About from "./About/About";
import Gear from "./Gear/Gear";
import Scene from "./Scene/Scene";
import Contact from "./Contact/Contact";
import Navbar from "./Nav/NavBar";
import BlogHome from "./BlogHome/BlogHome";
import BlogShowPage from "./BlogShowPage/BlogShowPage";
import SessionShowPage from "./SessionNotes/SessionShowPage";
import HomeFooter from "./Home/HomeFooter/HomeFooter";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/album/:id" element={<AlbumPage />} />
        <Route exact path="/gear" element={<Gear />} />
        <Route exact path="/scene" element={<Scene />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blog" element={<BlogHome />} />
        <Route exact path="/blog/:id" element={<BlogShowPage />} />
        <Route exact path="/sessionNotes/:id" element={<SessionShowPage />} />
      </Routes>
      <HomeFooter />
    </Router>
  );
}

export default App;
