//interface for one todo item
export interface Todo {
    text: string;
    id: string;
    isCompleted: boolean;
}
// interface for the functions that update the state
export interface TodoState {
    todos: Todo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: string) => void;
    completeTodo: (id: string) => void;
    updateTodo: (id: string, text: string) => void;
    deleteAllTodos: () => void;
}