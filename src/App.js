import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/search">
            <SearchComponent searchAnime={searchAnime} />
            <Search searchContent={searchContent} />
          </Route>
          <Route path="/Watchlist">
            <SearchComponent searchAnime={searchAnime} />
            <Watchlist />
          </Route>
          <Route exact path="/categories">
            <SearchComponent searchAnime={searchAnime} />
            <Category />
          </Route>
          <Route exact path="/anime/:id">
            <AnimeDetails />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
