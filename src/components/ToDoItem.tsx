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
    <div className="border rounded flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-700">
      <div className="flex items-center">
        <input
          type="checkbox"
          name={todo.title}
          id={todo.id}
          checked={todo.completed}
          onChange={() =>
            dispatch(toggleTodo({ ...todo, completed: !todo.completed }))
          }
          className="mr-2"
        />
        <label
          htmlFor={todo.id}
          className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-black dark:text-white'}`}
        >
          {todo.title}
        </label>
      </div>
      <div>
        <button
          onClick={handleEdit}
          className="bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600 px-2 py-1 mr-2 rounded transition"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="bg-red-600 dark:bg-red-700 text-white hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 px-2 py-1 rounded transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
