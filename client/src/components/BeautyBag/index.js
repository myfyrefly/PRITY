import React, { useContext } from "react";
import ChipContext from "../Context/ChipContext";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, IconButton } from "@material-ui/core/";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import { Chip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  root2: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  listItemStyle: {
    backgroundColor: "#f7c4c4",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    borderColor: "#C47CA8",
    borderStyle: "outset",
  },
}));

const BeautyBag = () => {
  const classes = useStyles();

  const { chipObj, setChipObj } = useContext(ChipContext);

  function deleteItem(name, type) {
    let newChipObj = [...chipObj];
    const idx = newChipObj.findIndex(
      (p) => p.name === name && p.productType === type
    );
    if (idx > -1) {
      newChipObj.splice(idx, 1);
      setChipObj(newChipObj);
    }
  }

  return (
    <Container>
      <Typography variant="h4">My Products:</Typography>
      <Typography variant="subtitle1">Click a Color to Try a Look!</Typography>

      {chipObj.map((product) => {
        const itemKey = product.hexColor + product.productType;
        console.log("itemKey");
        console.log(itemKey);
        const chipColor = {
          backgroundColor: product.hexColor,
        };

        return (
          <List className={classes.root}>
            <ListItem key={itemKey}>
              <ListItemAvatar>
                <Chip variant="outlined" style={chipColor} />
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={product.productType}
              />
              <IconButton>
                <DeleteIcon
                  onClick={() => deleteItem(product.name, product.productType)}
                />
              </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        );
      })}
    </Container>
  );
};

export default BeautyBag;
