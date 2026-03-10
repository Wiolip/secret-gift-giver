import PropTypes from "prop-types";


export const PageLayout = ({ title, children }) => {
    return (
      <>
        <h3 className="title is-3">{title}</h3>
        {children}
      </>
    );


}

PageLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
