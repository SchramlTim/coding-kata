import { create } from "zustand";
import { uid } from "react-uid";
import { TodoState } from "../types/todoTypes";

// create a store
export const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    addTodo: (text: string) =>
        set((state) => ({
            todos: [
                ...state.todos,
                {
                    text: text,
                    id: uid(`${text}-${state.todos.length}`),
                    isCompleted: false
                }
            ]
        })),
    deleteTodo: (id: string) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id)
        })),
    completeTodo: (id: string) =>
        set((state) => ({
            todos: state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isCompleted: true
                    };
                }
                return todo;
            })
        })),
        updateTodo: (id: string, text: string) =>
        set((state) => ({
            todos: state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        text: text
                    };
                }
                return todo;
            })
        })),
        deleteAllTodos: () => set({todos: []})
}));
