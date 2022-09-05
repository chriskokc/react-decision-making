import "./Form.scss";

const Form = ({ title, isTitleForm }) => {
  return (
    <div className="form">
      <label htmlFor={`${title}-form`} className="form__heading">
        {title}:
      </label>
      <textarea
        name={`${title}-form`}
        className="form__textarea"
        cols="40"
        rows={isTitleForm ? "4" : "9"}
        placeholder={
          isTitleForm ? "Insert title here" : "Write your content here"
        }
      ></textarea>
    </div>
  );
};

export default Form;
