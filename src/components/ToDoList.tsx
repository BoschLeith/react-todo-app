import { useSelector } from 'react-redux';

import { RootState } from '../store';
import ToDoItem from './ToDoItem';

function ToDoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);

  let content;
  if (todos.length === 0) {
    content = <div>No todos found</div>;
  } else {
    content = (
      <div>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
}

export default ToDoList;
