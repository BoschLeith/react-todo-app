import AddTodoForm from './components/AddTodoForm';
import ToDoList from './components/ToDoList';

export default function App() {
  return (
    <div>
      <div>To-Do List</div>
      <ToDoList />
      <AddTodoForm />
    </div>
  );
}
