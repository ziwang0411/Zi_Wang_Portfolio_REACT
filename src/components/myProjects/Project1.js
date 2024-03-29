import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/styles";
import ArrowBack from "@material-ui/icons/ArrowBack";

import Home from "../../images/Project1/Home.png";
import Search from "../../images/Project1/Search.png";
import Checkout from "../../images/Project1/Checkout.png";
import OrderTracking from "../../images/Project1/OrderTracking.png";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "center",
    width: "80%",
    margin: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: { textAlign: "center" },
  title: { paddingTop: "1%" },
}));

function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container className={classes.title}>
        <Grid item>
          <IconButton aria-label="settings" component={Link} to="/projects">
            <ArrowBack />
          </IconButton>
        </Grid>
        <Grid item>
          <CardHeader className={classes.card} title={props.item.title} />
        </Grid>
      </Grid>
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {props.item.description}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={props.item.image}
        title="Paella dish"
      />
    </Card>
  );
}

function ProjectCarousel(props) {
  var items = [
    {
      title: "eCommerce & Management System",
      description: (
        <Typography>
          Built with<b>Angular.js</b> Front-end and <b>Spring Boot</b> Back-end
        </Typography>
      ),
      image: Home,
    },
    {
      title: "Shop home and search page",
      description: "View and Search for Different Products",
      image: Search,
    },
    {
      title: "Checkout items",
      description: "Purchase item(s) as a member/guest",
      image: Checkout,
    },
    {
      title: "Check Order Status",
      description: "Check order history and track shipping status",
      image: OrderTracking,
    },
  ];

  return (
    <Carousel navButtonsAlwaysVisible="true">
      {items.map((item, i) => (
        <Grid container justify="center" alignItems="center">
          <React.Fragment>
            {/* <Item key={i} item={item} /> */}
            <RecipeReviewCard key={i} item={item} />
          </React.Fragment>
        </Grid>
      ))}
    </Carousel>
  );
}

// function Item(props) {
//   return (
//     <Paper>
//       <h2>{props.item.name}</h2>
//       <p>{props.item.description}</p>

//       <Button className="CheckButton">Check it out!</Button>
//     </Paper>
//   );
// }
const project1 = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ProjectCarousel />
    </React.Fragment>
  );
};
export default project1;
