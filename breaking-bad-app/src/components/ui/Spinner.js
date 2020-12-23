import React from "react";
import spinner from "../../img/spinner3.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: "400px", margin: "auto", display: "block" }}
      alt="Loading.."
    />
  );
};

export default Spinner;
