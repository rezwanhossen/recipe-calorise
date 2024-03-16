import { useState } from "react";
import Cards from "../Cards/Cards";
import Sidebar from "../sidebar/Sidebar";

const Main = () => {
  const [additm, setadditm] = useState([]);
  const [addcount, setaddcount] = useState(0);
  const handelWantToCook = (cd) => {
    const isExist = additm.find((itm) => itm.recipe_id == cd.recipe_id);
    if (!isExist) {
      setadditm([...additm, cd]);
      setaddcount(addcount + 1);
    } else {
      alert("aaa");
    }
  };

  return (
    <div>
      <section className=" mt-10 ">
        <div className=" text-center">
          <h1 className="text-3xl lg:text-5xl font-bold mt-5">Our Recipes</h1>
          <p className="my-5">
            Discover culinary delight with Our Recipes! From comforting classics
            to exotic delights, <br /> Our Recipes offers a treasure trove of
            mouthwatering dishes.
          </p>
        </div>
        <div className=" flex flex-col sm:flex-row  gap-4">
          <Cards handelWantToCook={handelWantToCook}></Cards>
          <div className="  ">
            <Sidebar additm={additm} addcount={addcount}></Sidebar>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
