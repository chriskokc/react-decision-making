import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDecision from "./pages/AddDecisions/AddDecisions";
import EditDecisions from "./pages/EditDecisions/EditDecisions";
import Home from "./pages/Home/Home";
import Journey from "./pages/Journey/Journey";

import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/react-decision-making/" element={<Home />} />
        <Route path="/react-decision-making/journey" element={<Journey />} />
        <Route
          path="/react-decision-making/addDecisions"
          element={<AddDecision />}
        />
        <Route
          path="/react-decision-making/:decisionId"
          element={<EditDecisions />}
        />
      </Routes>
    </Router>
  );
};

export default App;
