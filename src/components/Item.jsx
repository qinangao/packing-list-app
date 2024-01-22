export default function Item({ object, onDelete, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={object.packed}
        onChange={() => onToggle(object.id)}
      />
      <span style={object.packed ? { textDecoration: "line-through" } : {}}>
        {object.quantity} {object.description}
      </span>
      <button onClick={() => onDelete(object.id)}>❌</button>
    </li>
  );
}
