import { useNavigate } from "react-router";
import React, {useState} from "react";
import "../css/Home.css";
import "../css/Button.css";
import {useNaviagte} from "react-router-dom";

function Login() {
  const tasks = ["Sign up", "Log in"];
  const [show, setShow] = useState(false);
  const history = useNavigate();
  const handelRoute = () => {
    history("/start");
  }

  return (
    <>
    <div className="Home">
      <section className="container">
        <p>hello</p>
      </section>
    </div>
    </>
  );
}

export default Login;
