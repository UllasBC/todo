import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Modal,
  Button,
  Input,
} from "@material-ui/core";
import db from "../../src/firebase";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { makeStyles } from "@material-ui/core/styles";
import "./Todo.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "releative",
    width: 250,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: "auto",
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  // const handelOpen = () => {
  //   setOpen(true);
  // };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };

  return (
    <div className="list__container">
      <Modal open={open} onClose={(evt) => setOpen(false)}>
        <div className={classes.paper}>
          <Input
            placeholder={props.todo.todo}
            value={input}
            onChange={(evt) => setInput(evt.target.value)}
          />

          <Button
            onClick={updateTodo}
            type="submit"
            variant="contained"
            color="primary"
          >
            Click here to UPDATE
          </Button>
        </div>
      </Modal>
      <div className="todo__list">
        <List>
          <ListItem>
            <ListItemText primary={props.todo.todo} />
          </ListItem>
        </List>
        <HighlightOffIcon
          onClick={(evt) => db.collection("todos").doc(props.todo.id).delete()}
        />
        <Button onClick={(evt) => setOpen(true)} >
          <b>Click here to EDIT</b>
        </Button>
      </div>
    </div>
  );
}

export default Todo;
