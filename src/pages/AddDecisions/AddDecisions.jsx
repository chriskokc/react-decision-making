import blackCross from "../../assets/images/black-cross.png";
import Form from "../../components/Form/Form";
import "./AddDecisions.scss";
import { Link } from "react-router-dom";

const AddDecision = () => {
  return (
    <div className="addDecision">
      <Link to="/react-decision-making">
        <img
          src={blackCross}
          className="addDecision addDecision__black-cross"
          alt="black cross"
        />
      </Link>
      <h1 className="addDecision addDecision__heading">
        Add decisions you have made
      </h1>
      <Form title="Title" isTitleForm={true} />
      <Form title="Content" isTitleForm={false} />
    </div>
  );
};

export default AddDecision;
