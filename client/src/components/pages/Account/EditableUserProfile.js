import React, { useState } from "react";
import '../../css/Home.css';
import '../../css/Account.css';
import { TextField, Grid, Button, FormControl, withStyles  } from "@material-ui/core";
import {Stack, InputLabel, MenuItem, Select} from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import { textAlign } from "@mui/system";


export default function EditableUserProfile({
    stored,
    editCompleteCallback
}) {

    console.log("Edit User Profile");

    const [firstName, setFirstName] = useState(stored.firstName);
    const [lastName, setLastName] = useState(stored.lastName);
    const [email, setEmail] = useState(stored.email);
    const [phone, setPhone] = useState(stored.phone);
    const [street, setStreet] = useState(stored.street);
    const [unit, setUnit] = useState(stored.unit);
    const [unitNum, setUnitNum] = useState(stored.unitNum);
    const [city, setCity] = useState(stored.city);
    const [zipCode, setZipCode] = useState(stored.zipCode)
    const [state, setState] = useState(stored.state);

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
            unit,
            unitNum, 
            city,
            zipCode,
            state,
        });
    }

    const StyledButton = withStyles({
      root: {
        display: "block",
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
        
        <Grid item xs={3} sm={3} md={4} lg={4} xl={4}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="filled-required" 
              label="First Name*" 
              variant="filled" 
              size="small"
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </FormControl>
        </Grid>
        
        <Grid item xs={3} sm={3} md={4} lg={4} xl={4}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField 
              id="filled-required"
              label="Last Name*" 
              variant="filled" 
              size="small"
              type="text"
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

        <Grid item xs={3} sm={3} md={4} lg={4} xl={4}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="filled-required" 
              label="Email*" 
              variant="filled" 
              size="small"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <h3>Phone:</h3>
        </Grid>

        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="filled-required"
              label="Phone*" 
              variant="filled" 
              size="small"
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}> 
          <h3>Address:</h3>
        </Grid>

        <Grid item xs={3} sm={3} md={4} lg={4} xl={4}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="filled-required"
              label="Street*" 
              variant="filled" 
              size="small"
              type="text"
              value={street}
              onChange={e => setStreet(e.target.value)}
            />
          </FormControl>
        </Grid>

        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              label="Unit"
              variant="filled"
              size="small"
              inputProps={{
                style: { textAlign: "right" }
              }}
              fullWidth
              select
              value={unit}
              onChange={e => setUnit(e.target.value)}
            >
              <MenuItem value=""><em>Select</em></MenuItem>
              <MenuItem value="Unit">Unit</MenuItem>
              <MenuItem value="Apt.">Apartment</MenuItem>
              <MenuItem value="P.O. Box">P.O. Box</MenuItem>
            </TextField>
          </FormControl>
        </Grid>

        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="filled-required"
              label="Number" 
              variant="filled" 
              size="small"
              type="text"
              value={unitNum}
              onChange={e => setUnitNum(e.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>



      <Grid container spacing={2}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}> 
          <h3></h3>
        </Grid>
        
        <Grid item xs={2} sm={2} md={3} lg={3} xl={3}>
          <TextField
            id="filled"
            label="City*" 
            variant="filled" 
            size="small"
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </Grid>

        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}> 
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

        <Grid item> 
          <FormControl>
            <TextField
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              label="State*"
              variant="filled"
              size="small"
              select
              fullWidth
              value={state}
              onChange={e => setState(e.target.value)}
            >
              <MenuItem value=""><em>Select</em></MenuItem>
              <MenuItem value={"AL"}>Alabama</MenuItem>
              <MenuItem value={"AK"}>Alaska</MenuItem>
              <MenuItem value={"AZ"}>Arizona</MenuItem>
              <MenuItem value={"AR"}>Arkansas</MenuItem>
              <MenuItem value={"CA"}>California</MenuItem>
              <MenuItem value={"CO"}>Colorado</MenuItem>
              <MenuItem value={"CT"}>Connecticut</MenuItem>
              <MenuItem value={"DE"}>Delaware</MenuItem>
              <MenuItem value={"FL"}>Florida</MenuItem>
              <MenuItem value={"GA"}>Georgia</MenuItem>
              <MenuItem value={"HI"}>Hawaii</MenuItem>
              <MenuItem value={"ID"}>Idaho</MenuItem>
              <MenuItem value={"IL"}>Illinois</MenuItem>
              <MenuItem value={"IN"}>Indiana</MenuItem>
              <MenuItem value={"IA"}>Iowa</MenuItem>
              <MenuItem value={"KS"}>Kansas</MenuItem>
              <MenuItem value={"KY"}>Kentucky</MenuItem>
              <MenuItem value={"LA"}>Louisiana</MenuItem>
              <MenuItem value={"ME"}>Maine</MenuItem>
              <MenuItem value={"MD"}>Maryland</MenuItem>
              <MenuItem value={"MA"}>Massachusetts</MenuItem>
              <MenuItem value={"MI"}>Michigan</MenuItem>
              <MenuItem value={"MN"}>Minnesota</MenuItem>
              <MenuItem value={"MS"}>Mississippi</MenuItem>
              <MenuItem value={"MO"}>Missouri</MenuItem>
              <MenuItem value={"MT"}>Montana</MenuItem>
              <MenuItem value={"NE"}>Nebraska</MenuItem>
              <MenuItem value={"NV"}>Nevada</MenuItem>
              <MenuItem value={"NH"}>New Hampshire</MenuItem>
              <MenuItem value={"NJ"}>New Jersey</MenuItem>
              <MenuItem value={"NM"}>New Mexico</MenuItem>
              <MenuItem value={"NY"}>New York</MenuItem>
              <MenuItem value={"NC"}>North Carolina</MenuItem>
              <MenuItem value={"ND"}>North Dakota</MenuItem>
              <MenuItem value={"OH"}>Ohio</MenuItem>
              <MenuItem value={"OK"}>Oklahoma</MenuItem>
              <MenuItem value={"OR"}>Oregon</MenuItem>
              <MenuItem value={"PA"}>Pennsylvania</MenuItem>
              <MenuItem value={"RI"}>Rhode Island</MenuItem>
              <MenuItem value={"SC"}>South Carolina</MenuItem>
              <MenuItem value={"SD"}>South Dakota</MenuItem>
              <MenuItem value={"TN"}>Tennessee</MenuItem>
              <MenuItem value={"TX"}>Texas</MenuItem>
              <MenuItem value={"UT"}>Utah</MenuItem>
              <MenuItem value={"VT"}>Vermont</MenuItem>
              <MenuItem value={"VA"}>Virginia</MenuItem>
              <MenuItem value={"WA"}>Washington</MenuItem>
              <MenuItem value={"WV"}>West Virginia</MenuItem>
              <MenuItem value={"WI"}>Wisconsin</MenuItem>
              <MenuItem value={"WY"}>Wyoming</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
      </Grid>
      
      <br />
      
      <Grid container direction="column" item align="center">
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Stack spacing={2} direction="row">
            <StyledButton onClick={handleSaveClicked}>Save</StyledButton>
            <StyledButton onClick={handleCancelClicked}>Cancel</StyledButton>
          </Stack>
        </Grid>
      </Grid>
    </>
}