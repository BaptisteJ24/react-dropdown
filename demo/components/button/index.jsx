import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: "5px", marginBottom: "10px" }}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
