import { useState } from "react";
import Item from "./Item";

function Packinglist({ items, onDelete, onToggle }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  const a = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  console.log(a);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((x) => (
          <Item object={x} key={x.id} onDelete={onDelete} onToggle={onToggle} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

export default Packinglist;
