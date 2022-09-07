import "./HorizontalNavBar.scss";

const HorizontalNavBar = ({ getInspirations, getMyDecisions }) => {
  return (
    <nav className="navbar">
      <p className="navbar__item" onClick={getInspirations}>
        Inspirations from others
      </p>
      <p className="navbar__item" onClick={getMyDecisions}>
        My Decisions
      </p>
      <p className="navbar__item">Favourite Decisions</p>
    </nav>
  );
};

export default HorizontalNavBar;
