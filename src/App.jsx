import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDecision from "./pages/AddDecisions/AddDecisions";
import Home from "./pages/Home/Home";

import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/react-decision-making/" element={<Home />} />
        <Route
          path="/react-decision-making/addDecisions"
          element={<AddDecision />}
        />
      </Routes>
    </Router>
  );
};

export default App;
