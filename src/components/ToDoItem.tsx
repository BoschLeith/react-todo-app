import type { Todo } from '../types/todo';

interface ToDoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

export default function ToDoItem({ todo, toggleTodo }: ToDoItemProps) {
  return (
    <div>
      <input
        type="checkbox"
        name={todo.title}
        id={todo.title}
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <label
        htmlFor={todo.title}
        className={todo.completed ? 'line-through' : ''}
      >
        {todo.title}
      </label>
    </div>
  );
}
