import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, nanoid } from '@reduxjs/toolkit';

import type { Todo } from './types/todo';

interface TodoState {
  todos: Todo[];
}

const LOCAL_STORAGE_KEY = 'todos';

const loadTodosFromLocalStorage = (): Todo[] => {
  const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const saveTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

const initialState: TodoState = {
  todos: loadTodosFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo: Todo = {
        id: nanoid(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      saveTodosToLocalStorage(state.todos);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        saveTodosToLocalStorage(state.todos);
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodosToLocalStorage(state.todos);
    },
    toggleTodo: (state, action: PayloadAction<Todo>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = action.payload.completed;
        saveTodosToLocalStorage(state.todos);
      }
    },
  },
});

export const { addTodo, editTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
