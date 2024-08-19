import PropTypes from "prop-types";
const List = ({ social, name, alt, logo }) => {
  return (
    <li className="hover:rotate-[30deg] hover:ease-linear z-[8] w-10 h-10 mr-8 text-slate-200">
      <a href={`${social}`}>
        <figure className="">
          <img
            alt={alt}
            src={`/Lloyd-Cuesta-Perez/src/assets/${logo}.svg`}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          ></img>

          <figcaption className="flex text-[0.8rem]"> {name}</figcaption>
        </figure>
      </a>
    </li>
  );
};
List.propTypes = {
  social: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
export default List;
