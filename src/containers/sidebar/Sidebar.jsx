import PropTypes from "prop-types";
import Itemsid from "./Itemsid";
import Lowcurr from "./Lowcurr";

const Sidebar = ({
  additm,
  addcount,
  handelDelet,
  Curcooking,
  adddelecunt,
  time,
  calo,
}) => {
  return (
    <div className=" border border-1 rounded-md p-3 ">
      <h2 className="text-xl font-bold text-center my-3">
        Want to cook: {addcount}
      </h2>
      <hr />
      <table className=" table w-full overflow-x-auto">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
          <th></th>
        </tr>
        <tbody>
          {additm.map((itm, index) => (
            <Itemsid
              key={itm.id}
              itm={itm}
              index={index}
              handelDelet={handelDelet}
            ></Itemsid>
          ))}
        </tbody>
      </table>

      <hr />
      <div className="overflow-x-auto">
        <table className=" table w-full">
          <Lowcurr
            adddelecunt={adddelecunt}
            time={time}
            calo={calo}
            Curcooking={Curcooking}
          ></Lowcurr>
        </table>
      </div>
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
Sidebar.PropTypes = {
  additm: PropTypes.array,
  addcoun: PropTypes.number,
  handelDelet: PropTypes.func,
  Curcooking: PropTypes.array,
  adddelecunt: PropTypes.number,
  time: PropTypes.number,
  calo: PropTypes.number,
};

export default Sidebar;
