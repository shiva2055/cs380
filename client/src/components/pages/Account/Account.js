import React, { useState } from "react";
import '../../css/Home.css';
import '../../css/Account.css';
import Reservations from "./Reservations";
import Billing from "./Billing";
import Profile from './Profile';
import Stack from '@mui/material/Stack';
import { Button, Menu, MenuItem, withStyles, Grid } from "@material-ui/core";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link, useNavigate } from "react-router-dom";

const StyledButton = withStyles({
  root: {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontSize: "20px",
    width: "2in",
    borderRadius: "20px",
    cursor: "pointer",
    flexGrow: 1,
    background: "#232e3a",
    color: "#fff",
    transform: "none",
    transition: "background .3s,border-color .3s,color .3s",
    "&:hover": {
      backgroundColor: "#4fa9ba",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

function Account() {

  const [myAccount, setMyAccount] = useState('profile');
  
  return (
    <div className="Home">
      
      <br />

      <div className="box">
        <div className="App">
          <Grid container direction="column" item align="center">
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Stack spacing={2} direction="row">
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <StyledButton variant="contained" {...bindTrigger(popupState)}>
                        Account
                      </StyledButton>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={() => setMyAccount("profile")}>Profile</MenuItem>
                          <MenuItem onClick={() => setMyAccount("reservations")}>Reservations</MenuItem>
                          <MenuItem onClick={() => setMyAccount("billing")}>Billing</MenuItem>
                        </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </Stack>
            </Grid>
          </Grid>
          
          <br /> 
          
          {myAccount === "profile" && (
            <Profile />
          )}
          
          {myAccount === "reservations" && (
            <Reservations />
          )}

          {myAccount === "billing" && (
            <Billing />
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Account;