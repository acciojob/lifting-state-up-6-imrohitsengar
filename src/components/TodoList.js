import React from "react";

export default function TodoList({ todos, handleComplete }) {
  return (
    <div>
      {todos.map((todo, idx) => (
        <div key={idx} style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <p>{todo.text}</p>
          {!todo.completed && (
            <button onClick={() => handleComplete(idx)}>Complete</button>
          )}
        </div>
      ))}
    </div>
  );
}
