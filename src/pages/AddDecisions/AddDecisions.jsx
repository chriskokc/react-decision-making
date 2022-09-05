import blackCross from "../../assets/images/black-cross.png";
import Form from "../../components/Form/Form";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import Button from "../../components/Button/Button";
import "./AddDecisions.scss";
import { Link } from "react-router-dom";

const AddDecision = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const typeTarget = event.target.firstChild[0];
    const titleTarget = event.target.firstChild.nextSibling[0];
    const contentTarget = event.target.firstChild.nextSibling.nextSibling[0];

    const decisionData = {
      createdBy: "Chris",
      title: titleTarget.value,
      content: contentTarget.value,
      type:
        typeTarget.value.charAt(0).toUpperCase() + typeTarget.value.slice(1),
    };

    // POST
    const saveUserData = async (userData) => {
      const url = "http://localhost:8080/decision";
      await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
    };

    saveUserData(decisionData);
  };

  return (
    <div className="addDecision">
      <Link to="/react-decision-making">
        <img
          src={blackCross}
          className="addDecision__black-cross"
          alt="black cross"
        />
      </Link>
      <h1 className="addDecision__heading">Add decisions you have made</h1>

      <form onSubmit={handleSubmit}>
        <DropdownMenu />
        <Form title="Title" isTitleForm={true} />
        <Form title="Content" isTitleForm={false} />
        <Button buttonText="save" />
      </form>
    </div>
  );
};

export default AddDecision;
