import React, { useEffect, useState } from "react";
import TodoList from "./components/todolist";
import "./App.css";
import AddTodo from "./components/addtodo";
import { TodoProvider } from "./components/todoprovider";
import NavBar from "./components/navbar";
import { Jumbotron } from "react-bootstrap";

const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <NavBar />
        <Jumbotron>
          <h1>ToDo's</h1>
        </Jumbotron>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
