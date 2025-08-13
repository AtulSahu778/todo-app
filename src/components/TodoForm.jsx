import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <div className="w-full">
      <form onSubmit={add} className="relative group">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your task here..."
            className="w-full px-4 sm:px-6 py-3 sm:py-4 lg:py-5 pr-20 sm:pr-24 text-base sm:text-lg bg-gray-800/90 backdrop-blur-xl border-2 border-gray-700 rounded-xl sm:rounded-2xl shadow-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 outline-none transition-all duration-300 placeholder-gray-500 text-gray-100 font-medium"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          
          {/* Add Button */}
          <button
            type="submit"
            disabled={!todo.trim()}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-1 sm:space-x-2 border border-cyan-500/30 text-xs sm:text-sm lg:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="hidden sm:inline">Add Task</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
        
        {/* Subtle hint */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 text-center px-2">
          Press Enter or click Add Task to create your task
        </p>
      </form>
    </div>
  );
}

export default TodoForm;
