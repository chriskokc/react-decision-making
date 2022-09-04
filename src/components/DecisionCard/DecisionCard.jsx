import "./DecisionCard.scss";

const DecisionCard = ({ type, title, content, date }) => {
  return (
    <div className="card">
      <p className="card__item">Type: {type}</p>
      <p className="card__item">Title: {title} </p>
      <p className="card__item">Content: {content}</p>
      <p className="card__item">Date: {date}</p>
    </div>
  );
};

export default DecisionCard;
