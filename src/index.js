import React from "react";
import ReactDOM from "react-dom";

const fName = "Glad";
const lName = "Menumorut";
const luckyNumber = "13";

ReactDOM.render(
  <>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {luckyNumber}.</p>
  </>,
  document.getElementById("root")
);
