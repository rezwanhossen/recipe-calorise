import propTypes from "prop-types";
const Itemsid = ({ itm, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{itm.recipe_name}</td>
      <td>{itm.preparing_time} minutes</td>
      <td>{itm.calories}</td>
      <td>Preparing</td>
    </tr>
  );
};
Itemsid.propTypes = {
  itm: propTypes.object,
  index: propTypes.number,
};
export default Itemsid;
