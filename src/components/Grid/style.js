import { makeStyles } from "@material-ui/core";
import { spacing } from "@mui/system";
export default makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 1rem 0 1rem",
    backgroundColor: "#e2f0f3",
    height: "30%",

    opacity: "89%",
  },
  item: {
    paddingTop: "1rem",
  },
  icon: {
    color: "black",
    marginLeft: "auto",
    marginRight: "auto",
    marginLeft: "10rem",
    marginBottom: "0rem",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#e2f0f3",
      transition: "all 0.3s ease-out",
      color: "rgb(0, 0, 0)",
      transition: "250ms",
      border: "6px solid #fff",
    },
  },
  textfield: {
    fontSize: "20px",
    marginLeft: "10rem",
    padding: "20px",
    width: "500px",
    borderRadius: "20px",
    boxShadow: "0 0 15px 4px rgba(0,0,0,0.06)",
  },
  text: {
    color: "black",

    marginLeft: "10rem",
    fontSize: "20px",
  },
  input: {
    display: "flex",

    alignItems: "center",
    padding: "5rem",
    textContent: "center",
  },
  drag: {
    display: "flex",
    textContent: "center",
    alignItems: "center",
    marginLeft: "5rem",
  },
  drag_inside: {
    paddingLeft: "5rem",
  },
  search: {
    position: "relative",
  },
  map: {
    width: "100%",
    marginTop: "60vh",
    paddingBottom: "400px",
  },
  FormControl: {
    margin: spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
});
