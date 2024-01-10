function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for you trip? 😍</h3>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <input placeholder="Item..." />
      <button>Add</button>
    </div>
  );
}

export default Form;
