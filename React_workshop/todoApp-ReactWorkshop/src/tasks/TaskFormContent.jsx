import React, { useState, useRef } from 'react';
import TodoListContent from './TodoListContent';
import { userList } from '../services/ToDoService';

const TaskFormContent = ({ onAdd, todos, onDelete, onToggle }) => {
    const fileInputRef = useRef(null); // Used to clear the file input easily
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dueDate: '',
        assignPerson: '',
        attachments: 0 
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, attachments: files.length });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleClearFiles = () => {
        if (fileInputRef.current) fileInputRef.current.value = "";
        setFormData({ ...formData, attachments: 0 });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim() || !formData.dueDate) {
            alert("Title and Due Date are required!");
            return;
        }
        onAdd(formData);
        
        // Reset everything
        setFormData({ title: '', description: '', dueDate: '', assignPerson: '', attachments: 0 });
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className="container-lg" style={{ maxWidth: '1000px' }}>
            <div className="bg-white border shadow-sm p-4 rounded">
                <form onSubmit={handleSubmit}>
                    {/* Title */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Title</label>
                        <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} />
                    </div>

                    {/* Description */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Description</label>
                        <textarea name="description" className="form-control" rows="3" value={formData.description} onChange={handleChange}></textarea>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label fw-bold">Due Date</label>
                            <input type="datetime-local" name="dueDate" className="form-control" value={formData.dueDate} onChange={handleChange} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label fw-bold">Assign to Person (Optional)</label>
                            <select name="assignPerson" className="form-select" value={formData.assignPerson} onChange={handleChange}>
                                <option value="">-- Select Person (Optional) --</option>
                                {userList.map(user => <option key={user} value={user}>{user}</option>)}
                            </select>
                        </div>
                    </div>

                    {/* ATTACHMENTS SECTION  */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Attachments (Optional)</label>
                        <div className="input-group">
                            <input 
                                type="file" 
                                className="form-control" 
                                ref={fileInputRef}
                                onChange={handleChange}
                                multiple 
                            />
                            <button 
                                className="btn btn-outline-secondary" 
                                type="button" 
                                onClick={handleClearFiles}
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                    </div>

                    <div className="text-end">
                        <button type="submit" className="btn btn-primary px-4">+ Add Todo</button>
                    </div>
                </form>
            </div>

            <TodoListContent todos={todos} onDelete={onDelete} onToggle={onToggle} />
        </div>
    );
};

export default TaskFormContent;