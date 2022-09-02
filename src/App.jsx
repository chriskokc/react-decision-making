import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/react-decision-making/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
