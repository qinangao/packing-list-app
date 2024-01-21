import Form from "./components/Form";
import Logo from "./components/Logo";
import Packinglist from "./components/Packinglist";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleAddItems} />
      <Packinglist
        items={items}
        onDelete={handleDeleteItems}
        onToggle={handleToggleItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
