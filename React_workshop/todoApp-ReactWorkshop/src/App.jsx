
import SidebarContent from "./sidebar/SidebarContent"
import TaskContent from "./task/TaskContent"
 
function App() {
 
 
  return (
    <>
     <div className="d-flex">
      <div style={{width:'250px'}}>
        <SidebarContent/>
      </div>
      <div className="flex-grow-1">
        <TaskContent/>
 
      </div>
     </div>
    </>
  )
}
 
export default App