import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function Packinglist() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((x) => (
          <Item object={x} key={x.id} />
        ))}
      </ul>
    </div>
  );
}

export default Packinglist;
