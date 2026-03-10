import PropTypes from "prop-types";

export const Searchbar = ({ onSearch }) => {
    return (
      <>
        <p className="control has-icons-left mb-4">
          <input
            type="text"
            placeholder="Search"
            className="input is-info"
            onChange={(event) => onSearch(event.target.value)}
          />
          <span className="icon is-left">
            <i>&#128269;</i>
          </span>
        </p>
      </>
    );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
