import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const NavbarItem = ({ name, href, onClick }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames("navbar-item", {
          "is-active has-background-link has-text-white": isActive,
        })
      }
      to={href}
      onClick={onClick}>
      {name}
    </NavLink>
  );
};

NavbarItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

