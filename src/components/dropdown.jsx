import PropTypes from "prop-types";
import { useState } from "react";

const Dropdown = ({ data, placeholder, classname, defaultclassname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div
      className={
        defaultclassname ? `lib-react-dropdown ${classname}` : classname
      }
    >
      <div onClick={toggleDropdown}>
        <span>{selected ? selected : placeholder}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul>
          {data.map((item) => (
            <li key={item} onClick={handleItemClick}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  data: ["Option 1", "Option 2", "Option 3"],
  placeholder: "Select an option",
  classname: "",
  defaultclassname: true,
};

Dropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  classname: PropTypes.string,
  defaultclassname: PropTypes.bool,
};

export default Dropdown;
