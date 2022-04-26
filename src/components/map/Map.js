import React from "react";
import GoogleMapReact from "google-map-react";
import { paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlined } from "@mui/icons-material";

import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  // const coordinates = { lat: 46.9965, lng: -120.5478 };
  return (
    <div className={classes.mapContainer}>
      <Typography variant="h4"> Google map</Typography>

      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAqEXzC0ARHPnZaZt-4egTcbpYu99Q3XG4" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};
export default Map;
