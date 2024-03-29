import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/styles";

import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Project1 from "./components/myProjects/Project1";
import Project2 from "./components/myProjects/Project2";
import Project3 from "./components/myProjects/Project3";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "100%",
  },
  footer: {
    padding: "2%",
    marginTop: "auto",
    marginLeft: "auto",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Route path="/" exact component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Project1" component={Project1} />
      <Route path="/Project2" component={Project2} />
      <Route path="/Project3" component={Project3} />
    </div>
  );
}

export default App;
