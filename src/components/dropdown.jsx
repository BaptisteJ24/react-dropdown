import PropTypes from "prop-types";
import { useState } from "react";

const Dropdown = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={toggleDropdown}>default value</div>
      <div>{selected}</div>
      <ul>
        {data.map((item) => (
          <li key={item} onClick={handleItemClick}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

export default Dropdown;
