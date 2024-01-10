function Packinglist() {
  return (
    <div className="list">
      <select>
        <option>Sort by input order</option>
        <option>Sort by description</option>
        <option>Sort by packed status</option>
      </select>
      <button>Clear list</button>
    </div>
  );
}

export default Packinglist;
