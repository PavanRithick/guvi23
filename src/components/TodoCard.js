import React from 'react';

const TodoCard = ({ todo, onDelete, onEdit, onStatusChange }) => {
    return (
        <div className="todo-card">
            <p>Name: {todo.name}</p>
            <p>Description: {todo.description}</p>
            <div className="status">
                Status:
                <select
                    className={todo.status === "Completed" ? "completed" : ""}
                    value={todo.status}
                    onChange={(e) => onStatusChange(todo.id, e.target.value)}
                >
                    <option value="Not Completed">Not Completed</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button className="edit-btn" onClick={() => onEdit(todo)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoCard;
