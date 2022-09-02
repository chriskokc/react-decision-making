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
          sectionDescription="You can always learn from your experience.."
        />
        <Section
          sectionTitle="Add decisions"
          sectionRoute="addDecisions"
          sectionDescription="Record the best or worst decisions you have made today"
        />
      </div>
    </div>
  );
};

export default Home;
