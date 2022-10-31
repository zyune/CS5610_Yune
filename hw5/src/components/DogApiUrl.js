import React from "react";
import axios from "axios";

function DogApiUrl() {
  const val = axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      //console.log(response.data.message);

      //console.log(aaa);

      return response.data.message;
    });
  //console.log(val);
  //   console.log(<img src={val} alt="profilePicture" />);
  console.log(<img src={val} alt="profilePicture" />);
  return <img src={val} alt="profilePicture" />;
}

export default DogApiUrl;
