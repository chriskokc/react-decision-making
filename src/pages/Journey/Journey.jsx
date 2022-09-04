import "./Journey.scss";
import blackCross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";
import HorizontalNavBar from "../../components/HorizontalNavBar/HorizontalNavBar";
import DecisionCardList from "../../containers/DecisionCardList/DecisionCardList";
import { useState, useEffect } from "react";

const Journey = () => {
  const [userData, setUserData] = useState([]);

  // GET
  const getUserData = async () => {
    const url = "http://localhost:8080/decisions";
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

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
      <HorizontalNavBar />
      <DecisionCardList decisionArr={userData} />
    </div>
  );
};

export default Journey;
