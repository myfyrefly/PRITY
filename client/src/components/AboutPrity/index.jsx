import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  // ***just experimenting with styling paper components
  const paperStyle = {
    backgroundColor: "green",
  };

  return (
    <Grid conatainer spacing={2}>
      <Grid item>
        <h1>Enhance Your Beauty with PRITY...</h1>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.root}>
          <Paper elevation={3} style={paperStyle}>
            Words
          </Paper>
          <Paper elevation={3}>Go</Paper>
          <Paper elevation={3}>Here</Paper>
        </div>
      </Grid>
    </Grid>
  );
}
