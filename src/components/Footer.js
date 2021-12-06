import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        component={Link}
        to={{ pathname: "https://www.linkedin.com/in/niv-amitay-393231206" }}
        target="_blank"
        icon={<LinkedInIcon />}
        className={classes.root}
        label="Linkedin Profile"
      />
      <BottomNavigationAction
        component={Link}
        to={{ pathname: "https://github.com/nivamitay1" }}
        target="_blank"
        icon={<GitHubIcon />}
        className={classes.root}
        label="Github Profile"
      />
    </BottomNavigation>
  );
};
export default Footer;
