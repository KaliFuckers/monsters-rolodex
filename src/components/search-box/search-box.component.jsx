import "./search-box.styles.css";
import PropTypes from "prop-types";

export const SearchBox = ({ handleChange, placeholder }) => (
  <input
    className="search"
    placeholder={placeholder}
    onChange={(e) => handleChange(e.target.value)}
  />
);

SearchBox.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
