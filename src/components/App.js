import React from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = React.useState([
    { text: "Learn React", completed: false },
    { text: "Build a React App", completed: false },
    { text: "Deploy the React App", completed: false },
  ]);

  const handleComplete = (idx) => {
    const updated = todos.map((todo, i) =>
      i === idx ? { ...todo, completed: true } : todo
    );
    setTodos(updated);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
