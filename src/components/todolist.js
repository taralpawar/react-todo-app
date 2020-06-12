import React, { useState, useContext } from "react";
import TodoItem from "./todoitem";
import { TodoContext } from "./todoprovider";
import { ListGroup, Container, Alert } from "react-bootstrap";
import shortid from "shortid";
const TodoList = () => {
  const [todo, setTodo] = useContext(TodoContext);

  const todolist = todo.length ? (
    <ListGroup>
      {todo.map((todoitem) => (
        <ListGroup.Item>
          <TodoItem todoname={todoitem.text} id={todoitem.id} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  ) : (
    <Alert variant="success"> No Pending Tasks !</Alert>
  );
  return (
    <div>
      <Container style={{ padding: "20px" }}>{todolist}</Container>
    </div>
  );
};

export default TodoList;
