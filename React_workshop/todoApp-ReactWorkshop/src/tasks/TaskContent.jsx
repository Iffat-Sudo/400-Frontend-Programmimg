import React from 'react';
import TaskFormContent from './TaskFormContent';

const TaskContent = ({ todos, onAdd, onDelete, onToggle }) => {
    return (
        <div>
            <HeaderContent />
            <hr />
            {/* Passing props down one more level */}
            <TaskFormContent 
                onAdd={onAdd} 
                todos={todos} 
                onDelete={onDelete} 
                onToggle={onToggle} 
            />
        </div>
    );
};

const HeaderContent = () => {
    return (
        <div className='container-fluid mt-2'>
            <div className='row'>
                <div className='col-sm-4 fw-bold'><h1>Tasks</h1></div>
                <div className='col-sm-4'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control border-end-0" placeholder="Search tasks..." />
                        <span className="input-group-text bg-white"><i className="bi bi-search"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskContent;