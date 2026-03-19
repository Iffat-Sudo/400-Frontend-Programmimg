import { useState, useEffect } from "react";
import SidebarContent from "./sidebar/SidebarContent";
import TaskContent from "./tasks/TaskContent";
import { initialTodos } from "./services/ToDoService";

function App() {
  
  const [todos, setTodos] = useState(initialTodos);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("my_task_list");
    if (savedData) {
      setTodos(JSON.parse(savedData));
    }
  }, []);

  // Save to local storage whenever 'todos' change
  useEffect(() => {
    localStorage.setItem("my_task_list", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodoData) => {
    const newTask = {
      ...newTodoData,
      id: Date.now(), // Unique ID using timestamp
      createdDate: new Date().toISOString().split('T')[0], // Formats as YYYY-MM-DD
      completed: false
    };
    // Add new task to the start of the array
    setTodos([newTask, ...todos]);
  };

  const handleDeleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos(todos.filter(task => task.id !== id));
    }
  };

  const handleToggleComplete = (id) => {
    const updated = todos.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTodos(updated);
  };

  const filteredTodos = todos.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex">
      {/* Sidebar Section */}
      <div style={{ width: '250px' }}>
        <SidebarContent />
      </div>

      {/* Main Content Section */}
      <div className="flex-grow-1 bg-light" style={{ minHeight: '100vh' }}>
        {/* Use props to pass data and functions down */}
        <TaskContent 
          todos={filteredTodos} 
          onAdd={handleAddTodo} 
          onDelete={handleDeleteTodo} 
          onToggle={handleToggleComplete}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </div>
  );
}

export default App;