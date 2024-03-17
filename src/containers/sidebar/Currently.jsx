import propTypes from "prop-types";
const Currently = ({ valu, inx }) => {
  return (
    <div>
      <tbody>
        <tr>
          <td>{inx + 1}</td>
          <td>{valu.recipe_name}</td>
          <td>{valu.preparing_time} minutes</td>
          <td>{valu.calories} calories</td>
          <td></td>
        </tr>
      </tbody>
    </div>
  );
};
Currently.propTypes = {
  valu: propTypes.object,
  inx: propTypes.number,
};

export default Currently;
