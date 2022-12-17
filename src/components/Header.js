import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import { Button } from "@material-ui/core";
import pdf from "../files/Niv-Amitay's-Resume.pdf";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  downloadCVBtbn: {
    background: "#222",
    color: "tomato",
    marginTop: "2rem",
    "&:hover": {
      background: "tan",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Niv Amitay" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Niv Amitay"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Full Stack Developer",
            "Frontend Developer",
            "Backend Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <Button
        variant="contained"
        size="large"
        className={classes.downloadCVBtbn}
        href={pdf}
        target="_blank"
      >
        Download CV
      </Button>
    </Box>
  );
};

export default Header;
