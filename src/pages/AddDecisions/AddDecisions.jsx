import Form from "../../components/Form/Form";
import "./AddDecisions.scss";

const AddDecision = () => {
  return (
    <div className="addDecision">
      <h1 className="addDecision addDecision__heading">
        Add decisions you have made
      </h1>
      <Form title="Title" isTitleForm={true} />
      <Form title="Content" isTitleForm={false} />
    </div>
  );
};

export default AddDecision;
