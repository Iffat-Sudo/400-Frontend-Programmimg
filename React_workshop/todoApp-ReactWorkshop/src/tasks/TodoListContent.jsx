import React from 'react';

const TodoListContent = () => {
    return (
        <div className="bg-white rounded border shadow-sm mt-4 mb-5" >
           <FilterContent/> 
           <hr className='my-0'></hr>
           <ListContent/>
        </div>
        
    );
};


const FilterContent = () => {
    return(
       <div className="d-flex justify-content-between align-items-center p-3">
            <h5 className="h5 mb-0 fw-bold">Todos</h5>
               <div className="btn-group">
                <button className="btn btn-outline-secondary btnFilter">
                  <i className="bi bi-funnel"></i>
                </button>
                <button className="btn btn-outline-secondary btnSort">
                  <i className="bi bi-sort-down"></i>
                </button>
            </div>
        </div>
    );

};

const ListContent = () => {
    return(
        <div>
<ul className="list-group m-3" id="todoList">
      
          <li className="list-group-item todoItemList">
            <div className="container-lg px-0">
              <div className="row">
                <div className="col-auto order-1 me-auto">
                  <p className="fw-semibold m-0 todoTitle">Example Todo 1</p> 
                  <p className="my-1 small text-secondary todoDescription">Description goes here</p>
                </div>
                <div className="col-sm-auto order-3 order-sm-2 mb-1 pe-0 small text-secondary">
                  Created: <span className="text-nowrap todoCreatedDate">2025-07-01</span>
                </div>
                <div className="col-auto order-2 mb-1 order-sm-3 text-end">
                  <div className="btn-group" aria-label="Edit">
                    <button type="button" className="btn btn-sm btn-outline-success acceptBtn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                      </svg>
                    </button>
                    <button type="button" className="btn btn-sm btn-outline-primary editBtn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                      </svg>
                    </button>
                   
                    <button type="button" className="btn btn-sm btn-outline-danger btnDelete">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="col-12 order-4 small text-secondary">
                  <div className="row gx-2">
                    <div className="col-sm-auto">
                      <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="me-1" viewBox="0 0 16 16">
                          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                        </svg>
                        Due:<span className="ms-1 text-nowrap todoDueDate">2025-07-10</span>
                      </div>
                    </div>
                    <div className="col-sm-auto mt-2 mt-sm-0 d-flex align-items-center gap-2">
                      <span className="badge text-bg-info text-white py-1 spanAssignedPerson">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="align-text-bottom" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                       <span className="todoAssignedPerson">John Doe</span>
                      </span>
                      <span className="badge text-bg-secondary text-white py-1 spanAttachment">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="align-text-bottom" viewBox="0 0 16 16">
                          <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
                        </svg>
                       <span className="todoAttachement">2 attachments</span> 
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        
        </ul>
        </div>
    );

};

export default TodoListContent;