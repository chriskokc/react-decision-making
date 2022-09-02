import "./Form.scss";

const Form = ({ title, isTitleForm }) => {
  return (
    <form className="form">
      <p className="form form__heading">
        <label htmlFor={`${title}-form`}>{title}:</label>
      </p>
      <textarea
        name={`${title}-form`}
        className={`form__${title}`}
        cols="40"
        rows={isTitleForm ? "8" : "20"}
      ></textarea>
    </form>
  );
};

export default Form;
