import "./DecisionCardList.scss";
import DecisionCard from "../../components/DecisionCard/DecisionCard";

const DecisionCardList = ({ decisionArr }) => {
  const decisionJSX = decisionArr.map((decisionObj) => {
    return (
      <DecisionCard
        key={decisionObj.id}
        type={decisionObj.type}
        title={decisionObj.title}
        content={decisionObj.content}
        date={decisionObj.dateCreated}
      />
    );
  });
  return <div className="card-list">{decisionJSX}</div>;
};

export default DecisionCardList;
