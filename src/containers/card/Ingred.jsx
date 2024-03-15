import propTypes from "prop-types";

const Ingred = ({ item }) => {
  return (
    <div>
      <ul className="list-disc list-insid ml-7">
        <li>{item}</li>
      </ul>
    </div>
  );
};
Ingred.propTypes = {
  item: propTypes.array,
};
export default Ingred;
