// import React from 'react';
import PropTypes from "prop-types";
import Itemsid from "./Itemsid";
import { useState } from "react";

const Sidebar = ({ additm, addcount }) => {
  return (
    <div className=" border border-1 rounded-md p-3 ">
      <h2 className="text-3xl font-bold text-center my-3">
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
          <Itemsid key={itm.id} itm={itm} index={index}></Itemsid>
        ))}
      </table>
    </div>
  );
};
Sidebar.PropTypes = {
  additm: PropTypes.array,
  addcoun: PropTypes.number,
};

export default Sidebar;
