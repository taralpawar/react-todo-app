import React, { useContext } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { TodoContext } from "./todoprovider";

const TodoItem = (props) => {
  const [todo, setTodo, deleteTodo] = useContext(TodoContext);
  return (
    <div>
      <Row>
        <Col xs={8}>
          <h5>{props.todoname}</h5>
        </Col>
        <Col xs={4}>
          <Button
            size="sm"
            onClick={() => {
              deleteTodo(props.id);
            }}
          >
            Completed
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TodoItem;
