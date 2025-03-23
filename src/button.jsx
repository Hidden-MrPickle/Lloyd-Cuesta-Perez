import PropTypes from "prop-types";
const Button = ({ op }) => {
  return <button> {{ op }} </button>;
};
export default Button;
Button.propTypes = {
  op: PropTypes.string.isRequired,
};
