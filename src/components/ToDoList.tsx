import type { Todo } from '../types/todo';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

function ToDoList({ todos, toggleTodo }: ToDoListProps) {
  const renderTodos = todos.map((todo) => {
    return <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
  });

  return renderTodos;
}

export default ToDoList;
