import React from "react";
import "../css/Cards.css";
import CardItems from "./CardItems";
import tables from "../../photos/tables.jpg";
import backup from "../../photos/backup.jpg";
import hardware from "../../photos/hardware.jpg";

function Card() {
  return (
    <div className="cards">
      <h1>Services we offer</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={tables}
              title="BEST TABLE"
              text="Want to book the best table in your best resturant. We can do that in an instant."
            />
            <CardItems
              src={backup}
              title="Some Services"
              text="------------------------------------------------------------------------------------------"
            />
            <CardItems
              src={hardware}
              title="Some Services"
              text="------------------------------------------------------------------------------------------"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Card;
