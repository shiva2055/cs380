import {
  CircularProgress,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  Select,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import PlaceDetails from "./PlaceDetails/PlaceDetails";

const List = ({ places }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4">Resturants Near You</Typography>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
