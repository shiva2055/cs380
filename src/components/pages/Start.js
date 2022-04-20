import React from "react";
import { Link, useNavigate } from "react-router-dom";
import start from "../css/Start.css";
import Grid from "../Grid.js";
function Start() {
  return (
    <div className="Home">
      <Grid title="Reserve Table in your Fav Resturant" />
      {/* <div className="start_container">shiva</div>*/}
    </div>
  );
}

export default Start;
