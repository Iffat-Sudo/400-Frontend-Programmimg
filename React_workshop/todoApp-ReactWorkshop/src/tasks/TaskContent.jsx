import React from 'react';
 
const TaskContent = () => {
    return (
        <div>
            <HeaderContent/>
        </div>
    );
};
 
const HeaderContent = () => {
     return(
        <div className='container-fluid mt-2'>
            <div className='row'>
                <div className='col-sm-4 fw-bold'><h1>Tasks</h1>
                </div>
                <div className='col-sm-4 text-center'>
                   <div class="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search tasks..." />
                        <span class="input-group-text bg-white">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
};
 
export default TaskContent;