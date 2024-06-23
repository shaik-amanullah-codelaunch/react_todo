import React from 'react';

const TodoItem = ({ todo, index, removeTodo, toggleTodo }) => {
  return (
    <div className="todo-item">
      <span
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
        onClick={() => toggleTodo(index)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(index)}>x</button>
    </div>
  );
};

export default TodoItem;
