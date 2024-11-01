import React from 'react';

const TodoFilter = ({ filterStatus, setFilterStatus }) => {
    return (
        <div className="todo-filter">
            Status Filter:
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed</option>
            </select>
        </div>
    );
};

export default TodoFilter;
