import type { Todo } from '../types/todo';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

function ToDoList({ todos, toggleTodo, removeTodo }: ToDoListProps) {
  const renderTodos = todos.map((todo) => {
    return (
      <ToDoItem
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    );
  });

  return renderTodos;
}

export default ToDoList;
