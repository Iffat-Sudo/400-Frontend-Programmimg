import React, { useState } from 'react';
import Menu from "./components/Menu";
import Order from "./components/Order";
import ThemeToggle from "./components/ThemeToggle";
import menuData from "./data/menuData";

function App() {
  const [order, setOrder] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

  const addToOrder = (item) => {
      const exist = order.find((i) => i.id === item.id);
      
      if (exist) {
        setOrder(order.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      } else {
        setOrder([...order, { ...item, quantity: 1 }]);
      }
    };

  const updateQuantity = (id, change) => {
      setOrder(order.map((item) => item.id === id ? { ...item, quantity: item.quantity + change } : item)
      .filter((item) => item.quantity > 0));
    };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-dark text-white min-vh-100" : "bg-light min-vh-100"}>
      <div className="container py-4">

        <h1 className="text-center mb-4">
          Fast Food Ordering App
        </h1>

        <ThemeToggle toggleTheme={toggleTheme} />

        <h3>Menu</h3>

        <Menu
          menu={menuData}
          addToOrder={addToOrder}
        />

        <Order
          order={order}
          updateQuantity={updateQuantity}
        />

      </div>
    </div>
  );
    
}

export default App;
