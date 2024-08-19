import PropTypes from "prop-types";
const Photo = ({ photo }) => {
  return (
    <img
      width={"100%"}
      height={"100%"}
      src={`/Lloyd-Cuesta-Perez/src/assets/${photo}`}
      style={{ borderRadius: "0.375rem", objectFit: "contain" }}
    ></img>
  );
};
Photo.propTypes = {
  photo: PropTypes.string.isRequired,
  w: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
};
export default Photo;
