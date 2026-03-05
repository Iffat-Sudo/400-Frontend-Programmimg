import React from 'react';
 
const SidebarContent = () => {
 
 const Navlinks=[
    { id: 1, name: "Dashboard", href: "#", icons: "bi-grid" },
    { id: 2, name: "Users", href: "#" ,icons: "bi-people" },
    { id: 3, name: "Tasks", href: "#",icons: "bi-list-check" },
    { id: 4, name: "Settings", href: "#",icons: "bi-gear" },
 ];
 
 
    return (
        <div className='d-flex flex-column flex-shrink-0 p-5 bg-light' style={{height: "100vh"}}>
            <i className="bi bi-columns-gap" style={{ fontSize: "32px" }}></i>
            <ul className='nav nav-pills flex-column mb-auto mt-5'>
             
                  {
                Navlinks.map((link) => (
                <li className="nav-item">
                    <a className="nav-link link-dark" href={link.href} key={link.id}>
                        <i className={`bi ${link.icons} me-3`} ></i>
                    {link.name}
                    </a>
                </li>
                ))
                }
           
            </ul>
        <hr></hr>
        <div>
          <p>Username</p>
          <i class="bi bi-box-arrow-right"></i> Logout
        </div>
      </div>
    );
};
 
export default SidebarContent;