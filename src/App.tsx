import { useState } from 'react';

import AddTodoForm from './components/AddTodoForm';
import ToDoList from './components/ToDoList';
import type { Todo } from './types/todo';

let initialTodos: Todo[] = [
  { id: 1, title: 'Clean kitchen', completed: false },
  { id: 2, title: 'Do Laundry', completed: true },
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const removeTodo = (id: number) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, title: string) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
    );
  };

  return (
    <div>
      <div>To-Do List</div>
      <ToDoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}
