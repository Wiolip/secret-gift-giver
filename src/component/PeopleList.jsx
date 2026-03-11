import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const PeopleList = ({
  name = "",
  id,
  isSelected = false,
  onSelect = () => {},
  onDelete = () => {},
}) => {
  return (
    <div className="is-flex is-align-items-center mb-1">
      <Link
        to={`/people/${id}`}
        className={classNames("panel-block", { "is-active": isSelected })}
        onClick={onSelect}
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <span>{name}</span>
        {isSelected && <span>✅</span>}
      </Link>
      <button
        className="button is-small is-white has-text-danger"
        onClick={(e) => {
          e.stopPropagation(); 
          onDelete();
        }}
        title="Delete participant">
        🗑️
      </button>
    </div>
  );
};

PeopleList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
  onDelete: PropTypes.func,
};
