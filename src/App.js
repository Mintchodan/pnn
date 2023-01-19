import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Component/LandingPage";
import Detail from "./Component/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={LandingPage} />
        <Route exact path="/detail" element={Detail} />
        <Route
          exact
          path="/event/one"
          element={
            <div>
              <header className="App-header">ReactBlog</header>
              <h2>오늘의이벤트</h2>
              <p>첫 주문시 양배추즙 서비스</p>
            </div>
          }
        />
        <Route
          exact
          path="/event/two"
          element={
            <div>
              <header className="App-header">ReactBlog</header>
              <h2>오늘의이벤트</h2>
              <p>생일기념 쿠폰받기</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
