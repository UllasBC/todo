import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "../src/components/Todo";
import db from "./firebase";
import "./App.css";

import firebase from 'firebase';

function App() {
  const [todos, setToDos] = useState([]);
  const [input, setInput] = useState('');

  //When the app loads, need to listen to the database and fetch new todos
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //console.log(snapshot.docs.map(doc=>doc.data));
        setToDos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const onInput = (evt) => {
    setInput(evt.target.value);
  };

  const onAddBtnClick = (evt) => {
    evt.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  //console.log(todos);

  return (
    <div className="app">
      <h1>TO-DO 📋</h1>

      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Write Todo</InputLabel>
          <Input value={input} onChange={onInput} />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={onAddBtnClick}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          // <li key={index}>{item}</li>
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
