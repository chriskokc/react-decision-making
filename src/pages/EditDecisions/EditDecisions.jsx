import "./EditDecisions.scss";
import blackCross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DecisionCard from "../../components/DecisionCard/DecisionCard";
import Button from "../../components/Button/Button";
import { useContext, useState } from "react";
import DecisionContext from "../../context/DecisionContext";
import ModalBox from "../../components/ModalBox/ModalBox";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import Form from "../../components/Form/Form";

const EditDecisions = () => {
  const { decisionId } = useParams();
  const { userData, getUserData, setToStarList } = useContext(DecisionContext);
  const [isDeleted, setIsDeleted] = useState(false);
  const [toShowDeleteMessage, setToShowDeleteMessage] = useState(false);
  const [toShowEditMessage, setToShowEditMessage] = useState(false);
  const [toShowStarMessage, setToShowStarMessage] = useState(false);
  const [requiresEdit, setRequiresEdit] = useState(false);

  const foundDecision = () => {
    const result = userData.filter((decision) => {
      return decision.id === Number(decisionId);
    });
    return result;
  };

  const handleFavouriteDecision = () => {
    setToStarList((prevState) => [...prevState, foundDecision()[0]]);
    setToShowStarMessage(true);
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
    setToStarList((prevState) => {
      return prevState.filter((decision) => {
        return decision.id !== foundDecision()[0].id;
      });
    });
    getUserData();
  };

  // PUT
  const updateUserDataById = async (id, newUserData) => {
    const url = `http://localhost:8080/decision/${id}`;
    await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    });
  };

  const handleEdit = () => {
    setRequiresEdit(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const typeTarget = event.target[0];
    const titleTarget = event.target[1];
    const contentTarget = event.target[2];

    const newDecisionData = {
      createdBy: "Chris",
      title: titleTarget.value,
      content: contentTarget.value,
      type:
        typeTarget.value.charAt(0).toUpperCase() + typeTarget.value.slice(1),
    };

    await updateUserDataById(Number(decisionId), newDecisionData);
    setToShowEditMessage(true);
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
      {toShowEditMessage && (
        <ModalBox message="You have modified Decision successfully" />
      )}
      {toShowStarMessage && (
        <ModalBox message="You have added Decision to Favourite successfully" />
      )}
      {!isDeleted && (
        <DecisionCard
          type={foundDecision()[0].type}
          title={foundDecision()[0].title}
          content={foundDecision()[0].content}
          date={foundDecision()[0].dateCreated.split("T")[0]}
        />
      )}
      {!isDeleted && !requiresEdit && (
        <>
          <div className="editDecision__btn-container">
            <Button buttonText="Remove" onClick={handleDelete} />
            <Button buttonText="Edit" onClick={handleEdit} />
          </div>
          <span
            className="editDecision__favourite"
            onClick={handleFavouriteDecision}
          >
            Add to Favourite ⭐️
          </span>
        </>
      )}
      {requiresEdit && (
        <form onSubmit={handleSubmit}>
          <DropdownMenu chosenOption={foundDecision()[0].type} />
          <Form
            title="Title"
            isTitleForm={true}
            contentWritten={foundDecision()[0].title}
          />
          <Form
            title="Content"
            isTitleForm={false}
            contentWritten={foundDecision()[0].content}
          />
          <div className="editDecision__btn-container--secondary">
            <Button buttonText="modify" />
          </div>
        </form>
      )}
    </div>
  );
};

export default EditDecisions;
