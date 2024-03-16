import propTypes from "prop-types";
import Currently from "./Currently";
const Lowcurr = ({ Curcooking, adddelecunt, time, calo }) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center my-3">
        Currently cooking: {adddelecunt}
      </h1>
      <hr />
      <table className="table w-[100%]">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
        </tr>
        {Curcooking.map((valu, inx) => (
          <Currently key={inx} valu={valu} inx={inx}></Currently>
        ))}
      </table>
      <p>
        <b>total time: </b>
        {time} min
      </p>
      <p>
        <b>total calories: </b>
        {calo} calories
      </p>
    </div>
  );
};
Lowcurr.propTypes = {
  Curcooking: propTypes.array,
  adddelecunt: propTypes.number,
  time: propTypes.number,
  calo: propTypes.number,
};

export default Lowcurr;
