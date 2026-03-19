import { useState, useEffect } from "react";
import SidebarContent from "./sidebar/SidebarContent";
import TaskContent from "./tasks/TaskContent";

// 1. Correct Case-Sensitive Import from your folder
import { initialTodos } from "./services/ToDoService";

function App() {
  // 2. Declare states
  // 'todos' holds the master list
  const [todos, setTodos] = useState(initialTodos);
  // 'searchTerm' holds the text from the search bar
  const [searchTerm, setSearchTerm] = useState("");

  // 6. useEffect() - Optional: Load from local storage on first render
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

  // 7. Implement Add Task
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

  // 7. Implement Delete Task
  const handleDeleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos(todos.filter(task => task.id !== id));
    }
  };

  // 7. Implement Update Task (Toggle Completed)
  const handleToggleComplete = (id) => {
    const updated = todos.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTodos(updated);
  };

  // 8. Filter Logic for Search
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
        {/* 3. Use props to pass data and functions down */}
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