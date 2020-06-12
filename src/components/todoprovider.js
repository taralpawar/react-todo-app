import React, { useState, createContext } from "react";
import shortid from "shortid";
export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todo, setTodo] = useState([
    { text: "Drink enough water", id: shortid.generate() },
  ]);

  const deleteTodo = (id) => {
    const todos = todo.filter((item) => {
      return item.id !== id;
    });
    console.log(id);
    setTodo(todos);
  };

  return (
    <TodoContext.Provider value={[todo, setTodo, deleteTodo]}>
      {props.children}
    </TodoContext.Provider>
  );
};
