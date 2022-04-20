import React, { useState } from "react";
import "../css/App.css";
import table from "../../photos/table.png";
import "../css/Home.css";
import { Button } from "../Button";
import Cards from "../Cards";
import { useNavigate } from "react-router-dom";
//import spoon from "../../photos/";

const Home = () => {
  const task = ["Reserve Now", "Resturant Owner"];
  const [show, setShow] = useState(false);
  const [container, setContainer] = useState(false);
  const history = useNavigate();
  const handleRoute = () => {
    history("/start");
  };
  return (
    <>
      <div className="Home">
        <h1 className="h1--main"> Online Table reservation</h1>

        <section className="container">
          {task.map((task) => (
            <button onClick={() => setShow(task)} className="button">
              {task}
            </button>
          ))}
          <div>
            {(show === "Reserve Now" || show === false) && (
              <div>
                <h1 className="h1">
                  {" "}
                  Reserve Table In Your Favorite Resturant.
                </h1>
                <br />
                <br />
                <br />
                <button onClick={handleRoute} className="btn--outline">
                  GET STARTED
                </button>
                <p className="p1">Own a resturant? Partner with ReserveIt</p>
              </div>
            )}
            {show === "Resturant Owner" && (
              <div>
                <h1 className="h1"> Sign in your resturant.</h1>
                <br />
                <br />
                <br />
                <Button buttonStyle="btn--outline">GET STARTED</Button>
                <p className="p1">Own a resturant? Partner with ReserveIt</p>
              </div>
            )}
          </div>

          <br />
        </section>

        <section className="card--section">
          <Cards />
        </section>
      </div>
    </>
  );
};

export default Home;
