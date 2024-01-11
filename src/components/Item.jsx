export default function Item({ object }) {
  return (
    <li>
      <span style={object.packed ? { textDecoration: "line-through" } : {}}>
        {object.quantity} {object.description}
      </span>
      <button>❌</button>
    </li>
  );
}
