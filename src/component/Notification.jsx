import PropTypes from "prop-types";
import classNames from "classnames";

export const Notification = ({
  children,
  type = "is-info",
  className = "",
}) => {
  return (
    <div className={classNames("notification", type, "is-light", className)}>
      {children}
    </div>
  );
};

Notification.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
};
