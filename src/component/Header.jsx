import PropTypes from "prop-types";

export const Header = ({ title, subtitle }) => {
  return (
    <section className="hero is-info mb-4">
      <div className="hero-body">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle p-1">{subtitle}</h3>
      </div>
    </section>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

