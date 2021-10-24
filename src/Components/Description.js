import React from "react";
import Button from "react-bootstrap/Button";
import { moviesData } from "../Data";

const Description = ({ history, match, data }) => {
  let movieDesc = moviesData.find((ell) => ell.id == match.params.id);
  return (
    <div>
      <h2>{movieDesc.name}</h2>
      <h2>{movieDesc.description}</h2>
      <h2>{movieDesc.trailer}</h2>
      <Button variant="primary" onClick={() => history.goBack()}>
        Home Page
      </Button>
    </div>
  );
};

export default Description;
