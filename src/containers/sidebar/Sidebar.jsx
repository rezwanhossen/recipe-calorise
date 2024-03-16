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
      <table className=" table w-[100%]">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
          <th></th>
        </tr>
        {additm.map((itm, index) => (
          <Itemsid
            key={itm.id}
            itm={itm}
            index={index}
            handelDelet={handelDelet}
          ></Itemsid>
        ))}
      </table>

      <hr />
      <Lowcurr
        adddelecunt={adddelecunt}
        time={time}
        calo={calo}
        Curcooking={Curcooking}
      ></Lowcurr>
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
