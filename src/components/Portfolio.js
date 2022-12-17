import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from "@material-ui/icons/GitHub";
import PublicIcon from "@material-ui/icons/Public";
import { Link } from "react-router-dom";

import project1Img from "../images/shoppingnv.png";
import project2Img from "../images/forecast.png";
import project3Img from "../images/tic-tac-toe.png";
import project4Img from "../images/chat-app.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
    minHeight: "100vh",
  },

  cardContainer: {
    maxWidth: 345,
    margin: "2rem auto",
    whiteSpace: "pre-wrap",
  },
  cardImage: {
    objectFit: "fill",
    height: "180px",
  },
  cardBtns: {
    justifyContent: "center",
  },
  description: {
    height: "100px",
  },

  [theme.breakpoints.down("sm")]: {
    gridContainer: {
      justifyContent: "center",
    },
  },
}));

const projects = [
  {
    name: "ShoppingNV",
    description: `ShoppingNV is a grocery shopping website that manages new and returning customers.\nI have made this project using React, Node.js, PostgreSQL, Redux, Sequelize, Cloudinary, Material UI, React-router-dom, Axios, Formik and Bcrypt.`,
    image: project1Img,
    githubRepositoryURL: "https://github.com/nivamitay1/ShoppingNV-project",
    // demoURL: "https://online-shop-niv.herokuapp.com/",
  },
  {
    name: "Weather Forecast",
    description: `Weather Forecast is a weather prediction website. I used two APIs In this project: weatherapi and unsplash.\nI have made this project using React, Bootstrap and Axios.`,
    image: project2Img,
    githubRepositoryURL: "https://github.com/nivamitay1/Forecast-App",
    demoURL: "https://stoic-swartz-777e43.netlify.app/",
  },
  {
    name: "Tic Tac Toe",
    description: `Tic Tac Toe is a popular strategy game.\nI have made this project in order to learn how to work with complex algorithms.\nIn this app I used the minimax algorithm(when the Difficulty is set to hard), vanilla Javascript, CSS and HTML.`,
    image: project3Img,
    githubRepositoryURL: "https://github.com/nivamitay1/Tic-Tac-Toe",
    demoURL: "https://jovial-ride-815fe0.netlify.app/",
  },
  {
    name: "Chat App",
    description: `This project is a group chat app.\nI have made this project in order to learn how to work with sokets.\nIn this app I used React, Node.js, Socket.io, express, Bootstrap and react-router-dom.`,
    image: project4Img,
    githubRepositoryURL: "https://github.com/nivamitay1/Chat-App",
    // demoURL: "https://gracious-varahamihira-f5e6b0.netlify.app/",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container className={classes.gridContainer}>
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={6} lg={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardMedia
                component="img"
                alt={project.name}
                className={classes.cardImage}
                image={project.image}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.description}
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions className={classes.cardBtns}>
                <BottomNavigationAction
                  component={Link}
                  to={{ pathname: project.githubRepositoryURL }}
                  showLabel
                  target="_blank"
                  icon={<GitHubIcon />}
                  label="Github Repository"
                />
                {project.demoURL ? (
                  <BottomNavigationAction
                    component={Link}
                    to={{ pathname: project.demoURL }}
                    showLabel
                    target="_blank"
                    icon={<PublicIcon />}
                    label="Live Demo"
                    dis
                  />
                ) : (
                  <></>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
