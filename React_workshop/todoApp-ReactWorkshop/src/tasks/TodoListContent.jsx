import React from 'react';

const TodoListContent = ({ todos, onDelete, onToggle }) => {
    return (
        <div className="bg-white rounded border shadow-sm mt-4 mb-5">
            <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0">Todos ({todos.length})</h5>
            </div>

            <ul className="list-group list-group-flush">
                {todos.map((task) => (
                    <li key={task.id} className="list-group-item p-3">
                        <div className="row align-items-center">
                            <div className="col">
                                <p className={`fw-bold mb-0 ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                                    {task.title}
                                </p>
                                <p className="small text-secondary mb-1">{task.description}</p>
                                
                                <div className="d-flex flex-wrap gap-2 align-items-center mt-2">
                                    <span className="small text-muted">
                                        <i className="bi bi-calendar-event me-1"></i>
                                        Due: {task.dueDate.replace('T', ' ')}
                                    </span>
                                    
                                    {task.assignPerson && (
                                        <span className="badge bg-info text-dark">
                                            <i className="bi bi-person me-1"></i>{task.assignPerson}
                                        </span>
                                    )}

                                    {/* ATTACHMENT BADGE  */}
                                    {task.attachments > 0 && (
                                        <span className="badge bg-secondary text-white">
                                            <i className="bi bi-paperclip me-1"></i>
                                            {task.attachments} {task.attachments === 1 ? 'attachment' : 'attachments'}
                                        </span>
                                    )}
                                </div>
                            </div>
                            
                            <div className="col-auto">
                                <div className="btn-group">
                                    <button onClick={() => onToggle(task.id)} className={`btn btn-sm ${task.completed ? 'btn-success' : 'btn-outline-success'}`}>
                                        <i className="bi bi-check-lg"></i>
                                    </button>
                                    <button onClick={() => onDelete(task.id)} className="btn btn-sm btn-outline-danger">
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListContent;