import PropTypes from "prop-types";
const Photo = ({ photo, alt }) => {
  return (
    <img
      alt={`${alt}`}
      width={"100%"}
      height={"100%"}
      src={`/Lloyd-Cuesta-Perez/images/${photo}`}
      style={{ borderRadius: "0.375rem", objectFit: "contain" }}
    ></img>
  );
};
Photo.propTypes = {
  alt: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
export default Photo;
