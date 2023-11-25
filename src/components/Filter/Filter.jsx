const Filter = ({ value, onChange }) => {
  return (
    <label>
      <input
        type="text"
        name="search"
        className="contact-input"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
export default Filter;
