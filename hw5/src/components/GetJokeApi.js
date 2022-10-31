import React, { useState } from "react";
import Axios from "axios";

function GetJokeApi() {
  const [joke, setJoke] = useState("");
  const getJoke = () => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      console.log("this is inside the components");
      console.log(response);
      setJoke(response.data.message);
    });
  };
  return (
    <div>
      <button onClick={getJoke}> get dog right now</button>
      <img src={joke} />
    </div>
  );
}
export default GetJokeApi;
