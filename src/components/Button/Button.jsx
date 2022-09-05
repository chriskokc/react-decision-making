import "./Button.scss";

const Button = ({ buttonText, onClick }) => {
  return (
    <button className="button" type="submit" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
