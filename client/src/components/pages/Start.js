import React from "react";
import { Link, useNavigate } from "react-router-dom";
import start from "../css/Start.css";
import Gridview from "../Grid/Gridview.js";
function Start() {
  return (
    <div className="Home">
      <Gridview title="Reserve Table in your Fav Resturant" />
      {/* <div className="start_container">shiva</div>*/}
    </div>
  );
}

export default Start;
