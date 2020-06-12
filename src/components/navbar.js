import React, { useContext } from "react";
import { TodoContext } from "./todoprovider";
import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
  const [todo, setTodo] = useContext(TodoContext);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <h3>Total Tasks : {todo.length}</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
