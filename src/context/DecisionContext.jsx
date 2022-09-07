import { createContext, useState, useEffect } from "react";

const DecisionContext = createContext({});

export const DecisionProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [toShowMyDecisions, setToShowMyDecisions] = useState(false);

  // GET
  const getUserData = async () => {
    const url = "http://localhost:8080/decisions";
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data);
  };

  const handleGetMyDecisions = () => {
    setToShowMyDecisions(true);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <DecisionContext.Provider
      value={{
        userData,
        toShowMyDecisions,
        handleGetMyDecisions,
        getUserData,
      }}
    >
      {children}
    </DecisionContext.Provider>
  );
};

export default DecisionContext;