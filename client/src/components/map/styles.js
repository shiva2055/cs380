import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  paper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100px",
  },
  mapContainer: {
    height: "80vh",
    width: "100%",
  },
  markerContainer: {
    position: "absolute",
    Transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    curser: "pointer",
  },
  map: {
    marginTop: "100vh",
  },
}));
