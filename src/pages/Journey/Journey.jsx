import "./Journey.scss";
import blackCross from "../../assets/images/black-cross.png";
import { Link } from "react-router-dom";
import HorizontalNavBar from "../../components/HorizontalNavBar/HorizontalNavBar";

const Journey = () => {
  // GET
  // const getUserData = async () => {
  //   const url = "http://localhost:8080/decisions";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  // };

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
    </div>
  );
};

export default Journey;
