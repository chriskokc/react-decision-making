import "./Form.scss";

const Form = ({ title, isTitleForm }) => {
  return (
    <form className="form">
      <p className="form__heading">
        <label htmlFor={`${title}-form`}>{title}:</label>
      </p>
      <textarea
        name={`${title}-form`}
        className="form__textarea"
        cols="40"
        rows={isTitleForm ? "8" : "18"}
        placeholder={
          isTitleForm ? "Insert title here" : "Write your content here"
        }
      ></textarea>
    </form>
  );
};

export default Form;
