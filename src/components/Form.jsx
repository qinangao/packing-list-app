import { useState } from "react";

function Form() {
  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!input) return alert("input can not be emply");
    setInput("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for you trip? 😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (a, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        placeholder="Item..."
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
