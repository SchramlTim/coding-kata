import { FC } from "react";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DarkModeToggle from "./components/DarkModeToggle";
import { useDarkModeStore } from "./store/darkModeStore";
import Calendar from "./components/Calendar";

const App: FC = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);
  return (
    <Router>
      <div
        className={`flex flex-col items-center justify-center p-4 min-h-screen ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        <h1 className="mt-5 text-3xl font-bold justify-center mb-10">
          Zustand
        </h1>
        <DarkModeToggle />
        <Navbar />
        <Routes>
          <Route path="/todo" element={<TodoList />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
