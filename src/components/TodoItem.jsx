import React, { useState } from "react";
import { TodoContext, useTodo } from "../contexts";

function TodoItem({ todo }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div className={`group relative bg-gray-800/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
            todo.completed 
                ? "border-emerald-500/30 bg-emerald-900/20" 
                : "border-gray-700 hover:border-cyan-500/50"
        }`}>
            <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Checkbox */}
                <div className="flex-shrink-0">
                    <button
                        onClick={toggleCompleted}
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                            todo.completed
                                ? "bg-emerald-500 border-emerald-500 text-white shadow-lg"
                                : "border-gray-600 hover:border-cyan-400 hover:bg-gray-700"
                        }`}
                    >
                        {todo.completed && (
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Todo Text */}
                <div className="flex-1 min-w-0">
                    <input
                        type="text"
                        className={`w-full bg-transparent text-base sm:text-lg font-medium transition-all duration-200 ${
                            isTodoEditable 
                                ? "border-2 border-cyan-500 rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/20" 
                                : "border-transparent"
                        } ${
                            todo.completed 
                                ? "line-through text-gray-500" 
                                : "text-gray-100"
                        }`}
                        value={todoMsg}
                        onChange={(e) => setTodoMsg(e.target.value)}
                        readOnly={!isTodoEditable}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && isTodoEditable) {
                                editTodo();
                            }
                            if (e.key === 'Escape' && isTodoEditable) {
                                setTodoMsg(todo.todo);
                                setIsTodoEditable(false);
                            }
                        }}
                    />
                </div>

                {/* Action Buttons Container */}
                <div className="flex flex-col items-center space-y-1 sm:space-y-2 flex-shrink-0">
                    {/* Status Badge */}
                    <span className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                        todo.completed
                            ? "bg-emerald-900/50 text-emerald-300 border border-emerald-500/30"
                            : "bg-amber-900/50 text-amber-300 border border-amber-500/30"
                    }`}>
                        {todo.completed ? "Completed" : "Pending"}
                    </span>
                    
                    {/* Buttons Row */}
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        {/* Edit Button */}
                        <button
                            className={`p-1.5 sm:p-2 lg:p-2.5 rounded-lg sm:rounded-xl transition-all duration-200 ${
                                todo.completed
                                    ? "text-gray-600 cursor-not-allowed"
                                    : isTodoEditable
                                    ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
                                    : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/20"
                            }`}
                            onClick={() => {
                                if (todo.completed) return;
                                if (isTodoEditable) {
                                    editTodo();
                                } else {
                                    setIsTodoEditable(true);
                                }
                            }}
                            disabled={todo.completed}
                            title={isTodoEditable ? "Save changes" : "Edit task"}
                        >
                            {isTodoEditable ? (
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            )}
                        </button>

                        {/* Delete Button */}
                        <button
                            className="p-1.5 sm:p-2 lg:p-2.5 text-gray-400 hover:text-red-400 hover:bg-red-500/20 rounded-lg sm:rounded-xl transition-all duration-200"
                            onClick={() => deleteTodo(todo.id)}
                            title="Delete task"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
