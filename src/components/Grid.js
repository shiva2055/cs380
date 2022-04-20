import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "../components/Button.js";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TextField from "@mui/material/TextField";
const styles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 1rem 0 1rem",
    backgroundColor: "#e2f0f3",
    height: "30%",
    border: "2px solid black",
    opacity: "89%",
  },
  item: {
    paddingTop: "1rem",
  },
  icon: {
    color: "black",
    marginLeft: "auto",
    marginRight: "auto",
    marginLeft: "10rem",
    marginBottom: "0rem",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#e2f0f3",
      transition: "all 0.3s ease-out",
      color: "rgb(0, 0, 0)",
      transition: "250ms",
      border: "6px solid #fff",
    },
  },
  textfield: {
    fontSize: "20px",
    paddingLeft: "1px",
    paddingBottom: "10px",
    margin: "0px 40px 1px 10px",
    borderRadius: "20px",
    boxShadow: "0 0 15px 4px rgba(0,0,0,0.06)",
    fontSize: "20px",
  },
  text: {
    color: "black",

    marginLeft: "10rem",
    fontSize: "20px",
  },
});

function Grid(props) {
  const { icon, title, btnTitle } = props;
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.item}>{icon}</div>
      <Typography className={classes.item} variant="h3">
        {title}
      </Typography>
      <br />
      <div className={classes.items}>
        <PeopleAltIcon sx={{ fontSize: 100 }} className={classes.icon}>
          {" "}
        </PeopleAltIcon>
        <CalendarMonthIcon sx={{ fontSize: 100 }} className={classes.icon}>
          {" "}
        </CalendarMonthIcon>
        <AccessTimeFilledIcon sx={{ fontSize: 100 }} className={classes.icon}>
          Party
        </AccessTimeFilledIcon>
        <input
          className={classes.textfield}
          placeholder="Location, Resturant"
          label="Please input zip code or location, or Resturant"
        ></input>
        <button className="btn--outline">Next</button>{" "}
      </div>
    </div>
  );
}

export default Grid;
