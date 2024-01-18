import Item from "./Item";

function Packinglist({ items, onDelete, onToggle }) {
  return (
    <div className="list">
      <ul>
        {items.map((x) => (
          <Item object={x} key={x.id} onDelete={onDelete} onToggle={onToggle} />
        ))}
      </ul>
    </div>
  );
}

export default Packinglist;
