import { Link } from "react-router-dom";
import "./Section.scss";

const Section = ({ sectionTitle, sectionRoute, sectionDescription }) => {
  return (
    <div className="section">
      <div className="section__container">
        <h2 className="section__heading">{sectionTitle}</h2>
        <Link
          to={`/react-decision-making/${sectionRoute}`}
          className="section__link"
        >
          🌎
        </Link>
      </div>
      <p className="section__description">{sectionDescription}</p>
      <hr className="section__hr" />
    </div>
  );
};

export default Section;
