import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import "./dropdown.css";

const Dropdown = ({ data, placeholder, theme, styles }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`bj-react-dropdown`}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-label="Toggle dropdown"
      data-theme={theme}
      style={styles.dropdown}
    >
      <div
        className="dropdown__selected"
        aria-labelledby="dropdown__selected"
        onClick={toggleDropdown}
        style={styles.dropdownSelected}
      >
        <span
          id="dropdown__selected"
          className="dropdown__selected__text"
          style={styles.dropdownSelectedText}
        >
          {selected ? selected : placeholder}
        </span>
        <span>
          <span
            className={`${isOpen ? "arrow-open" : "arrow-close"}`}
            aria-hidden="true"
            style={styles.dropdownArrow}
          ></span>
          <span className="sr-only">
            {isOpen ? "Close dropdown" : "Open dropdown"}
          </span>
        </span>
      </div>

      <ul
        id="dropdown__list"
        className={`${isOpen ? "dropdown__list" : "sr-only"}`}
        role="listbox"
        aria-labelledby="dropdown__selected"
        style={styles.dropdownList}
      >
        {data.map((item, index) => (
          <li
            key={index + item}
            onClick={() => handleItemClick(item)}
            tabIndex="0"
            role="option"
            aria-label={item}
            className="dropdown__item"
            data-selected={selected === item}
            style={styles.dropdownItem}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

Dropdown.defaultProps = {
  data: ["Option 1", "Option 2", "Option 3"],
  placeholder: "Select an option...",
  theme: "light",
  styles: {
    dropdown: {},
    dropdownSelected: {},
    dropdownSelectedText: {},
    dropdownArrow: {},
    dropdownList: {},
    dropdownItem: {},
  },
};

Dropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  styles: PropTypes.shape({
    dropdown: PropTypes.object,
    dropdownSelected: PropTypes.object,
    dropdownSelectedText: PropTypes.object,
    dropdownArrow: PropTypes.object,
    dropdownList: PropTypes.object,
    dropdownItem: PropTypes.object,
  }),
};

export default Dropdown;
