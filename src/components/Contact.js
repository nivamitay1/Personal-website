import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { BottomNavigationAction } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  wrapper: {
    marginTop: "2rem",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  info: {
    color: "tomato",
    textAlign: "center",
    marginBottom: "1rem",
    textDecoration: "none",
  },
  root: {
    width: "100%",
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
      },
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="div" className={classes.wrapper}>
          <Typography variant="h5" className={classes.heading}>
            Contact me
          </Typography>
          <a href={`mailto: nivamitay1@gmail.com`} className={classes.info}>
            <Typography variant="subtitle1">
              Email: nivamitay1@gmail.com
            </Typography>
          </a>
          <Typography variant="subtitle1" className={classes.info}>
            Phone Number: 0509430857
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
