import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";  // Import the ItemForm component
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // Add a new function to handle form submission
  function handleItemFormSubmit(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      {/* Include the ItemForm component and pass the handleItemFormSubmit function as a prop */}
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
