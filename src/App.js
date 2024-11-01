import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard';
import TodoFilter from './components/TodoFilter';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [filterStatus, setFilterStatus] = useState('All');

    const addTodo = (newTodo) => {
        setTodos([...todos, { ...newTodo, id: uuidv4() }]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editTodo = (editedTodo) => {
        setTodos(todos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo)));
    };

    const changeStatus = (id, status) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, status } : todo)));
    };

    const filteredTodos = todos.filter((todo) =>
        filterStatus === 'All' ? true : todo.status === filterStatus
    );

    return (
        <div className="App">
            <h1>My Todo</h1>
            <TodoForm addTodo={addTodo} />
            <TodoFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
            
            {/* My Todos Heading */}
            <h2 className="todos-heading">My Todos</h2>
            
            <div className="todo-list">
                {filteredTodos.length > 0 ? (
                    filteredTodos.map((todo) => (
                        <TodoCard
                            key={todo.id}
                            todo={todo}
                            onDelete={deleteTodo}
                            onEdit={editTodo}
                            onStatusChange={changeStatus}
                        />
                    ))
                ) : (
                    <p>No todos available</p>
                )}
            </div>
        </div>
    );
};

export default App;
