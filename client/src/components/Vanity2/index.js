import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { ChipContext } from "../../components/Context/ChipContext";
import BeautyBag from "../BeautyBag";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import AvatarTest2 from "../../components/AvatarTesting/AvatarTest2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

export default function Vanity() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <span className={classes.paper}>
            <BeautyBag />
          </span>
        </Grid>
        <Grid item xs={4}>
          <span className={classes.paper}>
            <AvatarTest2 />
          </span>
        </Grid>
      </Grid>
    </div>
  );
}
