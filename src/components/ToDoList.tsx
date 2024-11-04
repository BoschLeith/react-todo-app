import { useSelector } from 'react-redux';

import { RootState } from '../store';
import ToDoItem from './ToDoItem';

function ToDoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);

  let content;
  if (todos.length === 0) {
    content = (
      <div className="text-gray-500 text-lg text-center dark:text-gray-400">
        No todos found
      </div>
    );
  } else {
    content = (
      <div className="space-y-4">
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }

  return <div className="text-gray-800 dark:text-gray-100">{content}</div>;
}

export default ToDoList;
