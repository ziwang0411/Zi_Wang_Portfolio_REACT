import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../profile.jpg";
import Typed from "react-typed";

//CSS STYLES

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="avatar" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Welcome"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography variant="h4" className={classes.subTitle}>
        <Typed
          strings={["Web Design", "Web Development", "Web Application"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
