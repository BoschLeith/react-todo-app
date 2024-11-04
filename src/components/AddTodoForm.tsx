import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../todoSlice';

export default function CreateTodo() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
