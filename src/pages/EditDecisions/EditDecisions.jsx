import "./EditDecisions.scss";
import blackCross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DecisionCard from "../../components/DecisionCard/DecisionCard";
import Button from "../../components/Button/Button";
import { useContext, useState } from "react";
import DecisionContext from "../../context/DecisionContext";
import ModalBox from "../../components/ModalBox/ModalBox";

const EditDecisions = () => {
  const { decisionId } = useParams();
  const { userData, getUserData } = useContext(DecisionContext);
  const [isDeleted, setIsDeleted] = useState(false);
  const [toShowDeleteMessage, setToShowDeleteMessage] = useState(false);

  const foundDecision = () => {
    const result = userData.filter((decision) => {
      return decision.id === Number(decisionId);
    });
    return result;
  };

  // DELETE
  const deleteUserDataById = async (id) => {
    const url = `http://localhost:8080/decision/${id}`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  const handleDelete = async () => {
    await deleteUserDataById(foundDecision()[0].id);
    setIsDeleted(true);
    setToShowDeleteMessage(true);
    getUserData();
  };

  return (
    <div className="editDecision">
      <Link to="/react-decision-making/journey">
        <img
          src={blackCross}
          className="editDecision__black-cross"
          alt="black cross"
        />
      </Link>
      <h1 className="editDecision__heading">Decision saved</h1>
      {toShowDeleteMessage && (
        <ModalBox message="You have deleted Decision successfully" />
      )}
      {!isDeleted && (
        <DecisionCard
          type={foundDecision()[0].type}
          title={foundDecision()[0].title}
          content={foundDecision()[0].content}
          date={foundDecision()[0].dateCreated.split("T")[0]}
        />
      )}
      {!isDeleted && (
        <div className="editDecision__btn-container">
          <Button buttonText="Remove" onClick={handleDelete} />
          <Button buttonText="Edit" />
        </div>
      )}
    </div>
  );
};

export default EditDecisions;
