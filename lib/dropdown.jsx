import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import "./dropdown.css";

/**
 * description: Dropdown component
 * @param {Array} data - Dropdown options
 * @param {String} placeholder - Dropdown placeholder
 * @param {String} theme - Dropdown theme
 * @param {Object} styles - Dropdown styles
 * @param {Function} onSelected - Callback function when an option is selected
 * @param {Boolean} reset - Reset dropdown to placeholder
 * @param {Boolean} enableDefaultClassName - Enable default class name
 * @param {String} id - Dropdown id
 * @returns {JSX.Element} - Dropdown component
 */
const Dropdown = ({
  data,
  placeholder,
  theme,
  styles,
  onSelected,
  reset,
  enableDefaultClassName,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  /**
   * description: Toggle the dropdown to either close or open its interface.
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  /**
   * description: Handle the click event on a dropdown item. Upon selection, close the dropdown, update the state with the selected value, and display the chosen value in the dropdown interface.
   * @param {String} item - Selected item
   */
  const handleItemClick = (item) => {
    setSelected(item);
    setIsOpen(false);
    onSelected(item);
  };

  /**
   * description : Handle the Keydown event on the dropdown. If the user presses the Enter key, simulate a click on the dropdown.
   * @param {Event} e - Keydown event
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.currentTarget.click();
    }
  };

  /**
   * description : Handle the Blur event on the dropdown. If the user clicks outside the dropdown, close the dropdown.
   */
  const handleDropdownBlur = (event) => {
    const currentElement = event.relatedTarget;

    if (!dropdownRef.current.contains(currentElement)) {
      setIsOpen(false);
    }
  };

  // When reset state is updated, reset the dropdown to its placeholder
  useEffect(() => {
    setSelected(null);
  }, [reset]);

  /**
   * description : render the dropdown component
   * @returns {JSX.Element}
   */
  return (
    <div
      ref={dropdownRef}
      {...(enableDefaultClassName ? { className: "bj-react-dropdown" } : {})}
      aria-label="Toggle dropdown"
      data-theme={theme}
      style={styles.dropdown}
      onBlur={handleDropdownBlur}
      id={id}
    >
      <div
        {...(enableDefaultClassName ? { className: "dropdown__selected" } : {})}
        aria-label="Dropdown selected"
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        style={styles.dropdownSelected}
        tabIndex="0"
      >
        <span
          {...(enableDefaultClassName
            ? { className: "dropdown__selected__text" }
            : {})}
          style={styles.dropdownSelectedText}
        >
          {selected ? selected : placeholder}
        </span>
        <span>
          <span
            {...(enableDefaultClassName
              ? {
                  className: isOpen ? "arrow-open" : "arrow-close",
                }
              : {})}
            aria-hidden="true"
            style={styles.dropdownArrow}
          ></span>
          <span {...(enableDefaultClassName ? { className: "sr-only" } : {})}>
            {isOpen ? "Close dropdown" : "Open dropdown"}
          </span>
        </span>
      </div>

      <ul
        {...(enableDefaultClassName
          ? {
              className: isOpen ? "dropdown__list" : "sr-only",
            }
          : {})}
        role="listbox"
        aria-label="Dropdown options"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        style={styles.dropdownList}
      >
        {data.map((item) => (
          <li
            key={item}
            onClick={() => handleItemClick(item)}
            onKeyDown={handleKeyDown}
            tabIndex={isOpen ? "0" : "-1"}
            role="option"
            aria-label={item}
            {...(enableDefaultClassName ? { className: "dropdown__item" } : {})}
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
  onSelected: () => {},
  reset: false,
  enableDefaultClassName: true,
  id: null,
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
  onSelected: PropTypes.func,
  reset: PropTypes.bool,
  enableDefaultClassName: PropTypes.bool,
  id: PropTypes.string,
};

export default Dropdown;
