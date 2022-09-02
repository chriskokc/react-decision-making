import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Welcome to Insights</h1>
      <h2>Journey</h2>
      <Link to="/react-decision-making/addDecisions" className="home__link">
        Add decisions for the day
      </Link>
      <h2>For future self</h2>
      <h2>Sharing with others</h2>
    </div>
  );
};

export default Home;
