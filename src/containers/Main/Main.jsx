import { useState } from "react";
import Cards from "../Cards/Cards";
import Sidebar from "../sidebar/Sidebar";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [Curcooking, setCurcooking] = useState([]);
  const [additm, setadditm] = useState([]);
  const [addcount, setaddcount] = useState(0);
  const [adddelecunt, setadddelecunt] = useState(0);
  const [time, settim] = useState(0);
  const [calo, setcalo] = useState(0);
  const handelWantToCook = (cd) => {
    const isExist = additm.find((itm) => itm.recipe_id == cd.recipe_id);
    if (!isExist) {
      setadditm([...additm, cd]);
      setaddcount(addcount + 1);
    } else {
      toast("Already Exist!");
    }
  };
  const handelDelet = (delet) => {
    const deletitms = additm.filter(
      (itms) => itms.recipe_id != delet.recipe_id
    );
    setadditm(deletitms);
    setaddcount(addcount - 1);
    const exist = Curcooking.find(
      (newitm) => newitm.recipe_id == delet.recipe_id
    );
    settim(time + delet.preparing_time);
    setcalo(calo + delet.calories);
    if (!exist) {
      setCurcooking([...Curcooking, delet]);
      setadddelecunt(adddelecunt + 1);
    }
  };
  // console.log(Curcooking);

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
          <div className=" ">
            <Sidebar
              additm={additm}
              addcount={addcount}
              handelDelet={handelDelet}
              Curcooking={Curcooking}
              adddelecunt={adddelecunt}
              time={time}
              calo={calo}
            ></Sidebar>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Main;
