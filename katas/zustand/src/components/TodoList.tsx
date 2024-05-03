import { FC, FormEvent, useState } from "react";
import { useTodoStore } from "../store/todoStore";
import {useDarkModeStore} from "../store/darkModeStore";
import DarkModeToggle from "./DarkModeToggle";
import { Todo } from "../types/todoTypes";

const TodoList: FC = () => {
  const [todoValue, setTodoValue] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  // use selectors to only rerender when state changes
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const deleteAllTodos = useTodoStore((state) => state.deleteAllTodos);
  const completeTodo = useTodoStore((state) => state.completeTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const darkMode = useDarkModeStore((state) => state.darkMode);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todoValue);
    setTodoValue("");
  };

  const handleEdit = (todo: Todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id: string) => {
    updateTodo(id, editText);
    setEditId(null);
    setEditText("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div
      className={`w-full max-w-md p-4 shadow-md rounded-lg min-w-32 ${
        darkMode ? "bg-gray-600 text-white" : "bg-white text-gray-900"
      }`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label
          htmlFor="new-todo"
          className={`font-semibold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          New Todo
        </label>
        <input
          type="text"
          id="new-todo"
          name="newTodo"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          className={`p-2 border rounded text-gray-900 ${
            darkMode
              ? "border-gray-600 focus:ring-blue-300"
              : "border-gray-300 focus:ring-blue-500"
          } outline-none`}
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Add
        </button>
      </form>

      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 rounded mt-2 shadow ${
              darkMode ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 p-2 rounded text-gray-900 outline-none"
                />
                <button
                  onClick={() => handleSave(todo.id)}
                  className="mx-2 px-4 text-sm bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="mx-2 px-4 text-sm bg-gray-500 hover:bg-gray-600 text-white p-1 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span
                  className={`${todo.isCompleted ? "line-through" : ""} ${
                    darkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  {todo.text}
                </span>
                <div className="flex flex-row gap-4">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="px-4 text-sm bg-yellow-500 hover:bg-yellow-600 text-white p-1 rounded"
                  >
                    Edit
                  </button>
                  {!todo.isCompleted && (
                    <button
                      onClick={() => completeTodo(todo.id)}
                      className="px-4 text-sm bg-green-500 hover:bg-green-600 text-white p-1 rounded"
                    >
                      Done
                    </button>
                  )}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-4 text-sm bg-red-500 hover:bg-red-600 text-white p-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      {todos.length ? (
              <button
                onClick={() => deleteAllTodos()}
                className="p-2 my-4 w-full text-white rounded bg-red-500 hover:bg-red-600 transition duration-200"
              >
                Delete all Todos
              </button>
            ): null}
    </div>
  );
};

export default TodoList;
