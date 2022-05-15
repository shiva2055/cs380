import React from "react";
import '../../css/Home.css';
import '../../css/Account.css';
import Stack from '@mui/material/Stack'
import { Button, withStyles, Paper, Grid} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

export default function EditableUserProfile({
  stored,
  startEditCallback
})  {

    console.log()

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

    return <div>
        <Grid>
          <Paper>
            <h3>Name:</h3>
            <h3>{stored.firstName} {stored.lastName}</h3>
          </Paper>
        </Grid>
        <br />
        <Grid>
          <Paper>
            <h3>Email:</h3>
            <h3>{stored.email}</h3>
          </Paper>
        </Grid>
        <br />
        <Grid>
          <Paper>
            <h3>Phone:</h3>
            <h3>{stored.phone}</h3>
          </Paper>
        </Grid>
        <br />
        <Grid>
          <Paper>
            <h3>Address:</h3>
            <h3>{stored.street} {stored.unit}</h3>
            <h3>{stored.city}, {stored.state}</h3>
            <h3>{stored.zipCode}</h3>
          </Paper>
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
            <StyledButton onClick={startEditCallback}>
              Edit
            </StyledButton>
          </Stack>
        </Grid>
      </Grid>
  </div>
}