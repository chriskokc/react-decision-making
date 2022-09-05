import "./Journey.scss";
import blackCross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";
import HorizontalNavBar from "../../components/HorizontalNavBar/HorizontalNavBar";
import DecisionCardList from "../../containers/DecisionCardList/DecisionCardList";
import { useContext } from "react";
import DecisionContext from "../../context/DecisionContext";

const Journey = () => {
  const { userData, toShowMyDecisions, handleGetMyDecisions } =
    useContext(DecisionContext);

  return (
    <div className="journey">
      <Link to="/react-decision-making">
        <img
          src={blackCross}
          className="journey__black-cross"
          alt="black cross"
        />
      </Link>
      <h1 className="journey__heading">Journey</h1>
      <HorizontalNavBar getMyDecisions={handleGetMyDecisions} />
      {toShowMyDecisions && <DecisionCardList decisionArr={userData} />}
    </div>
  );
};

export default Journey;
