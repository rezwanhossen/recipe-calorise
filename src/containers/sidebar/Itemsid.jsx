import propTypes from "prop-types";
const Itemsid = ({ itm, index, handelDelet }) => {
  return (
    <tr className="bg-slate-200 rounded-md">
      <td>{index + 1}</td>
      <td>{itm.recipe_name}</td>
      <td>{itm.preparing_time} minutes</td>
      <td>{itm.calories} calories</td>
      <td className="btn bg-[#0BE58A]" onClick={() => handelDelet(itm)}>
        Preparing
      </td>
    </tr>
  );
};
Itemsid.propTypes = {
  itm: propTypes.object,
  index: propTypes.number,
  handelDelet: propTypes.func,
};
export default Itemsid;
