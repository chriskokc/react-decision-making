import "./EditDecisions.scss";
import blackCross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DecisionCard from "../../components/DecisionCard/DecisionCard";
import Button from "../../components/Button/Button";
import { useContext } from "react";
import DecisionContext from "../../context/DecisionContext";

const EditDecisions = () => {
  const { decisionId } = useParams();
  const { userData } = useContext(DecisionContext);

  const foundDecision = () => {
    const result = userData.filter((decision) => {
      return decision.id === Number(decisionId);
    });
    return result;
  };

  return (
    <div className="editDecision">
      <Link to="/react-decision-making">
        <img
          src={blackCross}
          className="editDecision__black-cross"
          alt="black cross"
        />
      </Link>
      <h1 className="editDecision__heading">Decisions saved</h1>
      <DecisionCard
        type={foundDecision()[0].type}
        title={foundDecision()[0].title}
        content={foundDecision()[0].content}
        date={foundDecision()[0].dateCreated.split("T")[0]}
      />
      <Button buttonText="edit" />
    </div>
  );
};

export default EditDecisions;
