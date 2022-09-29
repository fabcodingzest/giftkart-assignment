const DropdownItem = ({ active, text, handleActiveChange }) => {
  const isActive = active === text;
  return (
    <button
      onClick={() => handleActiveChange(text)}
      style={{ color: isActive ? "grey" : "black" }}>
      {text}
    </button>
  );
};

export default DropdownItem;