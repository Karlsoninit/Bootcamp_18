import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { ShopContext } from "../context/shopContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSize({ size }) {
  const { dispatch } = useContext(ShopContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => dispatch({ type: "filterSIze", payload: size })}
      >
        <p>{size}</p>
      </Fab>
    </div>
  );
}
