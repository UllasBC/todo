import React, { useState } from "react";
import "./App.css";
//import { InputTextBox } from "./components/InputTextBox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


function App() {
  const [toDo, setToDo] = useState('');
  const [itemList, setItemList] = useState(()=>{
    let itemStr = localStorage.getItem('toDo');
    if(itemStr == null){
      return [];
    }else{
      let item = JSON.parse(itemStr);
      return item;
    }
  });

  const updateItemList = (list)=>{
    setItemList(list);
    localStorage.setItem('toDo',JSON.stringify(list))
  }

  const onInputChange = (evt) => {
    setToDo(evt.target.value);
  };

  const onAddItemClick = () => {
    updateItemList(itemList.concat({ text: toDo, completed: false }));
  };

  const onTaskDone = (index) => {
    let list = [...itemList];
    list[index].completed = !list[index].completed;
    updateItemList(list);
  };

  const onDeleteTask = (index) => {
    let list = [...itemList];
    list.splice(index, 1);
    updateItemList(list);

    console.log("OnDelete Function called");
  };

  const onClearBtnClick=()=>{
    updateItemList([]);   

  };

  console.log(itemList);
  return (
    <div className="App">
      <div className="body-appear">
        <TextField
          id="outlined-basic"
          label="Task"
          variant="outlined"
          onChange={onInputChange}
          value={toDo}
        />

        <span>
          <Button variant="contained" color="primary" onClick={onAddItemClick}>
            Add To DO
          </Button>
        </span>
      </div>
      <div>
        {itemList.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              onChange={() => {
                onTaskDone(index);
              }}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <span>{item.completed}</span>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                onDeleteTask(index);
              }}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={onClearBtnClick}>Clear All</Button>
      </div>
    </div>
  );
}

export default App;
