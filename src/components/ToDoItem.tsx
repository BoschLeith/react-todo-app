import { useDispatch } from 'react-redux';

import { deleteTodo, editTodo, toggleTodo } from '../todoSlice';
import type { Todo } from '../types/todo';

interface ToDoItemProps {
  todo: Todo;
}

export default function ToDoItem({ todo }: ToDoItemProps) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newTitle = prompt('Edit todo title:', todo.title);
    if (newTitle) {
      dispatch(editTodo({ ...todo, title: newTitle }));
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        name={todo.title}
        id={todo.title}
        checked={todo.completed}
        onChange={() =>
          dispatch(toggleTodo({ ...todo, completed: !todo.completed }))
        }
      />
      <label
        htmlFor={todo.title}
        className={todo.completed ? 'line-through' : ''}
      >
        {todo.title}
      </label>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
}
