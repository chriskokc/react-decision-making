import "./InspirationCard.scss";

const InspirationCard = () => {
  return (
    <div className="inspiration">
      <p className="inspiration__content">
        Have the courage to follow your heart and intuition. They somehow know
        what you truly want to become —{" "}
        <span className="inspiration__person">Steve Jobs</span>
      </p>
      <p className="inspiration__content">
        May your choices reflect your hopes, not your fears. —{" "}
        <span className="inspiration__person">Nelson Mandela</span>
      </p>
      <p className="inspiration__content">
        The only real failure in life is not to be true to the best one knows. —{" "}
        <span className="inspiration__person">Buddha</span>
      </p>
      <p className="inspiration__content">
        The quality of decision is like the well-timed swoop of a falcon which
        enables it to strike and destroy its victim. —{" "}
        <span className="inspiration__person">Sun Tzu</span>
      </p>
    </div>
  );
};

export default InspirationCard;
