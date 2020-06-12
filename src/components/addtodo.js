import React, { useState, useContext } from "react";
import { TodoContext } from "./todoprovider";
import {
  Form,
  Button,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import shortid from "shortid";
const AddTodo = () => {
  const [todo, setTodo] = useContext(TodoContext);
  const [newtodo, setNewTodo] = useState("");
  const updateNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    console.log(newtodo);
    setNewTodo("");

    setTodo((prevTodo) => [
      { text: newtodo, id: shortid.generate() },
      ...prevTodo,
    ]);
  };

  return (
    <Container>
      <Form onSubmit={addNewTodo}>
        <InputGroup>
          <FormControl
            placeholder="Add new todo..."
            value={newtodo}
            onChange={updateNewTodo}
          />
          <InputGroup.Append>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default AddTodo;
