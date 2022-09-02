import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home home__title">Welcome to Insights</h1>
      <div className="home home__main">
        <Link to="/react-decision-making/journey" className="home home__link">
          Journey
        </Link>
        <Link
          to="/react-decision-making/addDecisions"
          className="home home__link"
        >
          Add decisions for the day
        </Link>
      </div>
    </div>
  );
};

export default Home;
