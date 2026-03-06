import React from 'react';
import TodoListContent from './TodoListContent';

const TaskFormContent = () => {
    return (
        <div className="container-lg" style={{width:'1000px'}}>
             <div className="bg-white border shadow-sm p-4 rounded">
        <form id="todoForm">
        <div className="mb-3">
          <label htmlFor="txtTitle" className="form-label">Title</label>
          <input type="text" name="title" className="form-control" id="txtTitle" required/>
        </div>
           <div className="mb-3">
          <label htmlFor="txtDescription" className="form-label">Description</label>
          <textarea className="form-control" name="description" rows="3" id="txtDescription"></textarea>
        </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="dueDateInput" className="form-label">Due Date</label>
              <input type="datetime-local" className="form-control" name="dueDate" id="dueDateInput" required/>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="assignPerson" className="form-label">Assign to Person(Optional)</label>
              <select className="form-select" id="assignPerson" name="assignPerson">
                <option value="0">-- Select Person (optional) -- </option>
                <option value="Mattias Hellman">Mattias Hellman</option>
                <option value="Sindhuja Parthasarathy">Sindhuja Parthasarathy</option>
                <option value="Iffat Zabin">Iffat Zabin</option>
                <option value="Zackaria Azzoug">Zackaria Azzoug</option>
                <option value="Alexander Haitin">Alexander Haitin</option>
              </select>
            </div>
          </div>
           <div className="mb-3">
              <label htmlFor="fileAttachments" className="form-label me-2">Attachments (Optional)</label>
              <div className="input-group">
              <input type="file" className="form-control" id="fileAttachments" name="attachements" multiple />
              <button  id="clearBtn" className="btn btn-outline-secondary" type="btn-close"><i className="bi bi-x-lg"></i></button>
              </div>
            </div>
            <div className="mb-3">
             <ul id="fileList" className="list-group"></ul>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary" id="btnAddTodo">+ Add Todo</button>
            </div>
      </form> 
      
    </div>
    <TodoListContent/>
        </div>
    );
};

export default TaskFormContent;