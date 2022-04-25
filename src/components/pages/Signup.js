import { withStyles, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router";
import React, {useState} from "react";
function Signup() {
  const tasks = ["Sign up", "Log in"];
  const [show, setShow] = useState(false);
  const history = useNavigate();
  const handelRoute = () => {
    history("/start");
  }

  return (
    <div className="Home">
      <h1 className="h1--main">Sign up</h1>
      <section className="container">
        
      </section>
    </div>
  );
}

export default Signup;
