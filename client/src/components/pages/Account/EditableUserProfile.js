import React, { useState } from "react";
import '../../css/Home.css';
import '../../css/Account.css';
import Group from './Group'
import { TextField, Grid, Button, FormControl, withStyles } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

export default function EditableUserProfile({
    stored,
    editCompleteCallback
}) {

    console.log("Edit User Profile");

    const [firstName, setFirstName] = useState(stored.firstName);
    const [lastName, setLastName] = useState(stored.lastName);
    const [email, setEmail] = useState(stored.Email);
    const [phone, setPhone] = useState(stored.phone);
    const [street, setStreet] = useState(stored.street);
    const [city, setCity] = useState(stored.City);
    const [zipCode, setZipCode] = useState(stored.ZipCode)
    const [state, setState] = useState(stored.State);

    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        editCompleteCallback({
            firstName, 
            lastName, 
            email, 
            phone, 
            street, 
            city,
            zipCode,
            state,
        });
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
        width: "1in",
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

    return <>
      <Grid container spacing={2}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <h3>Name:</h3>
        </Grid>
        
        <Grid item xs={2.5} sm={3} md={4} lg={4} xl={4}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="filled-required" 
              label="First Name*" 
              variant="filled" 
              size="small"
              type={Text}
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </FormControl>
        </Grid>
        
        <Grid item xs={2.5} sm={3} md={4} lg={4} xl={4}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField 
              id="filled-required"
              label="Last Name*" 
              variant="filled" 
              size="small"
              type={Text}
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <h3>Email:</h3>
        </Grid>

        <Grid item xs={2.5} sm={3} md={4} lg={4} xl={4}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="filled-required" 
              label="Email*" 
              variant="filled" 
              size="small"
              type={Text}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <h3>Phone:</h3>
        </Grid>

        <Grid item xs={2.5} sm={3} md={3} lg={3.5} xl={3.5}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="filled-required"
              label="Phone*" 
              variant="filled" 
              size="small"
              type={Text}
              value={email}
              onChange={e => setPhone(e.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2} columns={12}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}> 
          <h3>Address:</h3>
        </Grid>

        <Grid item xs={2.5} sm={3} md={4} lg={4} xl={4}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="filled-required"
              label="Street*" 
              variant="filled" 
              size="small"
              type={Text}
              value={street}
              onChange={e => setStreet(e.target.value)}
            />
          </FormControl>
        </Grid>

        <Grid item xs={2.5} sm={3} md={3.5} lg={3.5} xl={3.5}>
          <TextField
            id="filled-required"
            label="City*" 
            variant="filled" 
            size="small"
            type={Text}
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </Grid>

        <Grid item xs={1} sm={1.5} md={2} lg={2} xl={2}> 
          <TextField
            id="filled-required"
            label="Zip Code*" 
            variant="filled" 
            size="small"
            type={Text}
            value={zipCode}
            onChange={e => setZipCode(e.target.value)}
          />
        </Grid>

        <Grid item xs={1} sm={1.5} md={2} lg={2} xl={2}> 
          <TextField
            id="filled-required"
            label="State*" 
            variant="filled" 
            size="small"
            type={Text}
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </Grid>
      </Grid>
      
      <br />
      
      <Group>
          <StyledButton onClick={handleSaveClicked}>Save</StyledButton>
          <StyledButton onClick={handleCancelClicked}>Cancel</StyledButton>
      </Group>
    </>
}
