import React, { useState } from "react";
import '../../css/Home.css';
import '../../css/Account.css';
import Group from './Group'
import EditableUserProfile from './EditableUserProfile';
import UserProfile from './UserProfile.js';
import { Button, Menu, MenuItem, withStyles } from "@material-ui/core";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link, useNavigate } from "react-router-dom";

function Account() {
  
  const defaultFirstName = "Katherine";
  const defaultLastName = "Reynolds";
  const defaultName = defaultFirstName + " " + defaultLastName;
  const defaultEmail = "ReynoldsK@cwu.edu";
  const defaultPhone = "509-895-4301";
  const defaultStreet = "400 E. University Way";
  const defaultUnit = "";
  const defaultCity = "Ellensburg";
  const defaultZipCode = "98926";
  const defaultState = "WA";
  const defaultAddressLine1 = defaultStreet + " " + defaultUnit;
  const defaultAddressLine2 = defaultCity + ", " + defaultState;
  const defaultAddressLine3 = defaultZipCode;
  
  const [editMode, setEditMode] = useState(false);

  const [firstName, setFirstName] = useState(defaultFirstName);
  const [lastName, setLastName] = useState(defaultLastName);
  const [name, setName] = useState(defaultName)
  const [email, setEmail] = useState(defaultEmail);
  const [phone, setPhone] = useState(defaultPhone);
  const [street, setStreet] = useState(defaultStreet);
  const [city, setCity] = useState(defaultCity);
  const [zipCode, setZipCode] = useState(defaultZipCode)
  const [state, setState] = useState(defaultState);
  const [addressLine1, setAddressLine1] = useState(defaultAddressLine1);
  const [addressLine2, setAddressLine2] = useState(defaultAddressLine2);
  const [addressLine3, setAddressLine3] = useState(defaultAddressLine3);

  
  const stored = {
    firstName, 
    lastName,
    name, 
    email, 
    phone,
    street,
    city,
    zipCode,
    state,
    addressLine1,
    addressLine2,
    addressLine3
  }

  function handleEditComplete(result) {
    console.log("handleEditComplete", result);
    if (result != null) {
        setFirstName(result.firstName);
        setLastName(result.lastName);
        setName(result.Name);
        setEmail(result.email);
        setPhone(result.phone);
        setStreet(result.street);
        setCity(result.city);
        setZipCode(result.zipCode);
        setState(result.state);
        setAddressLine1(result.addressLine1);
        setAddressLine2(result.addressLine2);
        setAddressLine3(result.addressLine3);
    }
    setEditMode(false);
  }

  const StyledButton = withStyles({
    root: {
      display: "block",
      marginLeft: "400px",
      marginRight: "400px",
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
  
  return (
    <div className="Home">
      
      <br />

      <div className="box">
        <div className="App">
          <Group>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <StyledButton variant="contained" {...bindTrigger(popupState)}>
                      Account
                    </StyledButton>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Profile</MenuItem>
                      <MenuItem onClick={popupState.close}>Reservations</MenuItem>
                      <MenuItem onClick={popupState.close}>Billing</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Group>
          
          <br /> 
          
          {
            editMode
              ? <>
                  <EditableUserProfile
                    stored={stored}
                    editCompleteCallback={handleEditComplete}                            
                  />
                </>
                : <>
                    <UserProfile
                      stored={stored}
                      startEditCallback={() => setEditMode(true)}
                    />
                  </>
          }            
        </div>
      </div>
    </div>
  );
}

export default Account;
