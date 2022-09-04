import "./DecisionCard.scss";

const DecisionCard = ({ type, title, content, date }) => {
  return (
    <div className="card">
      <p>Type: {type}</p>
      <p>Title: {title} </p>
      <p>Content: {content}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default DecisionCard;
