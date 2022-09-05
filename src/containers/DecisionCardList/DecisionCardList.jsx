import "./DecisionCardList.scss";
import DecisionCard from "../../components/DecisionCard/DecisionCard";
import { Link } from "react-router-dom";

const DecisionCardList = ({ decisionArr }) => {
  const decisionJSX = decisionArr.map((decisionObj) => {
    return (
      <Link
        to={`/react-decision-making/${decisionObj.id}`}
        key={decisionObj.id}
        className="card-list__link"
      >
        <DecisionCard
          type={decisionObj.type}
          title={decisionObj.title}
          content={decisionObj.content}
          date={decisionObj.dateCreated.split("T")[0]}
        />
        <span className="card-list__logo">⭐️</span>
      </Link>
    );
  });
  return <div className="card-list">{decisionJSX}</div>;
};

export default DecisionCardList;
