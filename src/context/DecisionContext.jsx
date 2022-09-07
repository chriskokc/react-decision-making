import { createContext, useState, useEffect } from "react";

const DecisionContext = createContext({});

export const DecisionProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [toStarList, setToStarList] = useState([]);
  const [toShowInspirations, setToShowInspirations] = useState(false);
  const [toShowMyDecisions, setToShowMyDecisions] = useState(false);
  const [toShowFavourite, setToShowFavourite] = useState(false);

  // GET
  const getUserData = async () => {
    const url = "http://localhost:8080/decisions";
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data);
  };

  const handleGetInspirations = () => {
    setToShowMyDecisions(false);
    setToShowFavourite(false);
    setToShowInspirations(true);
  };

  const handleGetMyDecisions = () => {
    setToShowInspirations(false);
    setToShowFavourite(false);
    setToShowMyDecisions(true);
  };

  const handleGetFavouriteDecision = () => {
    setToShowInspirations(false);
    setToShowMyDecisions(false);
    setToShowFavourite(true);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <DecisionContext.Provider
      value={{
        userData,
        toStarList,
        setToStarList,
        toShowInspirations,
        toShowMyDecisions,
        toShowFavourite,
        handleGetInspirations,
        handleGetMyDecisions,
        handleGetFavouriteDecision,
        getUserData,
      }}
    >
      {children}
    </DecisionContext.Provider>
  );
};

export default DecisionContext;
