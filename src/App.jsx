import TodoForm from './components/TodoForm';
import { useState, useEffect } from 'react';
import { TodoProvider } from './contexts/TodoContext';
import TodoItem from './components/TodoItem';
import ProgressBar from './components/ProgressBar';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.filter(todo => !todo.completed).length;
  const totalCount = todos.length;

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_75%,transparent_75%)] bg-[length:20px_20px]"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight leading-tight">
                Task Master
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
                Organize your life with precision. Professional task management for the modern workflow.
              </p>
              
              {/* Stats Dashboard */}
              <div className="mt-8 sm:mt-12 flex justify-center">
                <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-800/50 w-full max-w-4xl">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    <div className="text-center group">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                        {totalCount}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                        Total Tasks
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                        {pendingCount}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                        Pending
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                        {completedCount}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                        Completed
                      </div>
                    </div>
                    <div className="text-center group">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                        {totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0}%
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                        Progress
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 space-y-1 sm:space-y-0">
                      <span className="font-medium">Task Completion Rate</span>
                      <span className="font-medium">{completedCount} of {totalCount} tasks</span>
                    </div>
                    <ProgressBar completed={completedCount} total={totalCount} />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-800/50 overflow-hidden">
              {/* Form Section */}
              <div className="p-4 sm:p-6 lg:p-8 xl:p-10 border-b border-gray-800">
                <TodoForm />
              </div>

              {/* Todos Section */}
              <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
                {todos.length === 0 ? (
                  <div className="text-center py-12 sm:py-16">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-6 sm:mb-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-2 sm:mb-3">
                      No tasks yet
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto px-4">
                      Start by adding your first task above. Your productivity journey begins here.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {todos.map((todo) => (
                      <div key={todo.id} className="animate-fadeIn">
                        <TodoItem todo={todo} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
