import React, { useState } from "react";
import '../../css/Home.css';
import '../../css/Account.css';
import EditableUserProfile from './EditableUserProfile';
import UserProfile from './UserProfile.js';
import { Button, withStyles} from "@material-ui/core";
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

export default function Profile() {
  
  const defaultFirstName = "Katherine";
  const defaultLastName = "Reynolds";
  const defaultEmail = "ReynoldsK@cwu.edu";
  const defaultPhone = "509-895-4301";
  const defaultStreet = "400 E. University Way";
  const defaultUnit = "";
  const defaultUnitNum = "";
  const defaultCity = "Ellensburg";
  const defaultZipCode = "98926";
  const defaultState = "WA";
  
  const [editMode, setEditMode] = useState(false);
  const [myAccount, setMyAccount] = useState('');

  const [firstName, setFirstName] = useState(defaultFirstName);
  const [lastName, setLastName] = useState(defaultLastName);
  const [email, setEmail] = useState(defaultEmail);
  const [phone, setPhone] = useState(defaultPhone);
  const [street, setStreet] = useState(defaultStreet);
  const [unit, setUnit] = useState(defaultUnit);
  const [unitNum, setUnitNum] = useState(defaultUnitNum);
  const [city, setCity] = useState(defaultCity);
  const [zipCode, setZipCode] = useState(defaultZipCode)
  const [state, setState] = useState(defaultState);
  
  const stored = {
    firstName, 
    lastName,
    email, 
    phone,
    street,
    unit,
    unitNum,
    city,
    zipCode,
    state,
  }

  function handleEditComplete(result) {
    console.log("handleEditComplete", result);
    if (result != null) {
        setFirstName(result.firstName);
        setLastName(result.lastName);
        setEmail(result.email);
        setPhone(result.phone);
        setStreet(result.street);
        setUnit(result.unit);
        setUnitNum(result.unitNum);
        setCity(result.city);
        setZipCode(result.zipCode);
        setState(result.state);
    }
    setEditMode(false);
  }
  
  return (
    <>
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
    </>
  );
}