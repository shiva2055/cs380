import React, { useState } from "react";
import {
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { Button } from "../Button";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TextField from "@mui/material/TextField";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Resturant from "../map/Resturant.js";
import useStyles from "./style";

function Gridview(props) {
  const task = ["Party", "Calender", "Time"];
  const { icon, title, btnTitle } = props;
  // show and hide functions
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  //for calander
  const [value, onChange] = useState(new Date());
  const [party, setparty] = useState("2");
  const [time, setTime] = useState("7");
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.items}>
          <Typography variant="h3">{title}</Typography>
          <br />
          <PeopleAltIcon
            sx={{ fontSize: 100 }}
            className={classes.icon}
            onClick={() => setShow(!show)}
          ></PeopleAltIcon>

          <CalendarMonthIcon
            sx={{ fontSize: 100 }}
            onClick={() => setShow2(!show2)}
            className={classes.icon}
          ></CalendarMonthIcon>

          <AccessTimeFilledIcon
            sx={{ fontSize: 100 }}
            onClick={() => setShow3(!show3)}
            className={classes.icon}
          ></AccessTimeFilledIcon>
        </div>

        <div className={classes.drag}>
          {show && (
            <div className={classes.drag_inside}>
              <FormControl className={classes.FormControl}>
                <InputLabel> Party</InputLabel>
                <Select
                  value={party}
                  onChange={(e) => setparty(e.target.value)}
                >
                  <MenuItem value={1}>1 People</MenuItem>
                  <MenuItem value={2}>2 People</MenuItem>
                  <MenuItem value={3}>3 People</MenuItem>
                  <MenuItem value={4}>4 People</MenuItem>
                  <MenuItem value={5}>5 People</MenuItem>
                  <MenuItem value={6}>6 People</MenuItem>
                  <MenuItem value={7}>7 People</MenuItem>
                  <MenuItem value={8}>8 People</MenuItem>
                  <MenuItem value={9}>9 People</MenuItem>
                  <MenuItem value={10}>10 People</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
          {show2 && (
            <div className={classes.drag_inside}>
              <InputLabel> Calendar</InputLabel>
              <Calendar onChange={onChange} value={value} />
            </div>
          )}
          {show3 && (
            <div className={classes.drag_inside}>
              <FormControl className={classes.FormControl}>
                <InputLabel> Time</InputLabel>
                <Select value={time} onChange={(e) => setTime(e.target.value)}>
                  <MenuItem value={1.5}>1:30 PM</MenuItem>
                  <MenuItem value={2}>2:00 PM</MenuItem>
                  <MenuItem value={2.5}>2:30 PM</MenuItem>
                  <MenuItem value={3}>3:00 PM</MenuItem>
                  <MenuItem value={3.5}>3:30 PM</MenuItem>
                  <MenuItem value={4}>4:00 PM</MenuItem>
                  <MenuItem value={4.5}>4:30 PM</MenuItem>
                  <MenuItem value={5}>5:00 PM</MenuItem>
                  <MenuItem value={5.5}>5:30 PM</MenuItem>
                  <MenuItem value={6}>6:00 PM</MenuItem>
                  <MenuItem value={6.5}>6:30 PM</MenuItem>
                  <MenuItem value={7}>7:00 PM</MenuItem>
                  <MenuItem value={7.5}>7:30 PM</MenuItem>
                  <MenuItem value={8}>8:00 PM</MenuItem>
                  <MenuItem value={8.5}>8:30 PM</MenuItem>
                  <MenuItem value={9}>9:00 PM</MenuItem>
                  <MenuItem value={9.5}>9:30 PM</MenuItem>
                  <MenuItem value={10}>10:00 PM</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
        </div>
        <div className={classes.input}>
          <input
            className={classes.textfield}
            placeholder="Location, Resturant"
            label="Please input zip code or location, or Resturant"
          ></input>
          <button className="btn--outline">Next</button>{" "}
        </div>
      </div>
      <div className={classes.map}>
        <Resturant />
      </div>
    </>
  );
}

export default Gridview;
