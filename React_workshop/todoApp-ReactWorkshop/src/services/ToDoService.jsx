let todos = [
  {
    id: 1,
    title: "Learn React",
    description: "Study components and hooks",
    dueDate: "2025-07-10",
    assignPerson: "John Doe",
    completed: false,
    createdAt: new Date().toISOString()
  }
];

// GET
export const getTodos = () => {
  return [...todos];
};

// ADD
export const addTodo = (todo) => {
  const newTodo = {
    ...todo,
    id: Date.now(),
    completed: false,
    createdAt: new Date().toISOString()
  };
  todos.push(newTodo);
  return newTodo;
};

// DELETE
export const deleteTodo = (id) => {
  todos = todos.filter(t => t.id !== id);
};

// UPDATE (complete/edit)
export const updateTodo = (updatedTodo) => {
  todos = todos.map(t =>
    t.id === updatedTodo.id ? updatedTodo : t
  );
};