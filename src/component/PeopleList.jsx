import classNames from "classnames"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const PeopleList = ({ name='', isSelected=false, onSelect = () => {} }) => {
    return (
      <Link
        to={`/people/${name}`}
        className={classNames("panel-block", {
          "is-active is-flex is-justify-content-space-between": isSelected,
        })}
        onClick={onSelect}>
        {name}
        {isSelected && <span>✅</span>}
      </Link>
    );
}

PeopleList.propTypes = {
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};
