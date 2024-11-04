import type { Todo } from '../types/todo';

interface ToDoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
}

export default function ToDoItem({
  todo,
  toggleTodo,
  removeTodo,
  editTodo,
}: ToDoItemProps) {
  const handleEdit = () => {
    const newTitle = prompt('Edit todo title:', todo.title);
    if (newTitle) {
      editTodo(todo.id, newTitle);
    }
  };

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
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
}
