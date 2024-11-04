import AddTodoForm from './components/AddTodoForm';
import ThemeToggle from './components/ThemeToggle';
import ToDoList from './components/ToDoList';

export default function App() {
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-center text-3xl font-semibold text-gray-800 dark:text-gray-100">
          To-Do List
        </h1>
        <ThemeToggle />
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 mt-4 space-y-4">
        <AddTodoForm />
        <ToDoList />
      </div>
    </div>
  );
}
