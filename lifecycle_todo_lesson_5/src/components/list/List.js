import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function List({ data, deleteTodo }) {
  const classes = useStyles();

  return data.map(todo => (
    <Card key={todo.id} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.icapps.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fwide_image%2Fpublic%2FReact%2520Native%2520image.jpg%3Fitok%3Dv9IZyGx9&f=1&nofb=1"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {todo.todo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {todo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => deleteTodo(todo.id)}
          size="small"
          color="primary"
        >
          DELETE
        </Button>
        {/* <Button size="small" color="primary">
          show Name
        </Button> */}
      </CardActions>
    </Card>
  ));
}
