import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import IconButton from '@mui/material/IconButton';
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import StripeCheckoutButton from "../stripButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ComplexGrid(props) {
  // const totalPrice = 58;
  const classes = useStyles();

  const { title, text, totalPrice, hplaps } = props;

  return (
    <div className="body">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="" src={hplaps} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {text}
                </Typography>
                <Typography variant="body2" color="textSecondary"></Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ cursor: "pointer" }}
                ></Typography>
              </Grid>
            </Grid>
            <Grid item>
              {/* <Typography variant="subtitle1">$19.00</Typography> */}
            </Grid>
          </Grid>
        </Grid>
        <p>Pay Total of $ {totalPrice}</p>
        <p>
          <StripeCheckoutButton price={totalPrice} />
        </p>
        {/* <IconButton color="primary" aria-label="add to shopping cart"> */}
        {/* <AddShoppingCartIcon /> */}
        {/* </IconButton> */}
      </Paper>
    </div>
  );
}
