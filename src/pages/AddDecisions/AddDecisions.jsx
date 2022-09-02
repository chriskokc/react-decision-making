import Form from "../../components/Form/Form";

const AddDecision = () => {
  return (
    <div className="addDecision">
      <h1>Add decisions you have made</h1>
      <Form title="Title" isTitleForm={true} />
      <Form title="Content" isTitleForm={false} />
    </div>
  );
};

export default AddDecision;
