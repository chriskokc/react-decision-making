const Journey = () => {
  // GET
  const getUserData = async () => {
    const url = "http://localhost:8080/decisions";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  };

  return (
    <div>
      <h1>Journey</h1>
      <button onClick={() => getUserData()}>Click</button>
    </div>
  );
};

export default Journey;
