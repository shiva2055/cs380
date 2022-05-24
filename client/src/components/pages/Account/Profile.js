import React, { useState } from "react";
import '../../css/Home.css';
import '../../css/Account.css';
import EditableUserProfile from './EditableUserProfile';
import UserProfile from './UserProfile.js';
import { Link, useNavigate } from "react-router-dom";

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