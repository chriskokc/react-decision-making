import "./Home.scss";
import Section from "../../components/Section/Section";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Welcome to Insights</h1>
      <div className="home__main">
        <Section
          sectionTitle="Journey"
          sectionRoute="journey"
          sectionDescription="You can always learn from your experience and they are valuable indeed.."
        />
        <Section
          sectionTitle="Add decisions"
          sectionRoute="addDecisions"
          sectionDescription="Record the best and the most important decisions you have made today"
        />
      </div>
    </div>
  );
};

export default Home;
