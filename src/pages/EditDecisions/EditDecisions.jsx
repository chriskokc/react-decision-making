import "./EditDecisions.scss";
import blackCross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const EditDecisions = () => {
  return (
    <div className="editDecision">
      <Link to="/react-decision-making">
        <img
          src={blackCross}
          className="editDecision__black-cross"
          alt="black cross"
        />
      </Link>
      <h1 className="editDecision__heading">Decision</h1>
      <Button buttonText="edit" />
    </div>
  );
};

export default EditDecisions;
