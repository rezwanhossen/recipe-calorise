import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import Ingred from "./Ingred";
const Card = ({ card, handelWantToCook }) => {
  const {
    recipe_name,
    recipe_img,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = card;
  return (
    <div>
      <div className=" p-4 border-1 rounded-md border w-full shadow-xl space-y-3">
        <img
          className=" w-[100%] h-[250px] rounded-md"
          src={recipe_img}
          alt="Recipe imeags"
        />
        <h1 className=" text-xl font-bold ">{recipe_name}</h1>
        <p>{short_description}</p>

        <hr />
        <p>ingredients: {ingredients.length}</p>
        {ingredients.map((item, itmID) => (
          <Ingred key={itmID} item={item}></Ingred>
        ))}
        <hr />
        <div className=" flex justify-between">
          <p className=" flex gap-2 items-center">
            <IoTimeOutline></IoTimeOutline> {preparing_time} minutes
          </p>
          <p className=" flex gap-2 items-center">
            <FaFire /> {calories} calories
          </p>
        </div>
        <button
          className="btn bg-[#0BE58A] text-xl"
          onClick={() => handelWantToCook(card)}
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};
Card.PropTypes = {
  card: PropTypes.object.isRequired,
  handelWantToCook: PropTypes.func,
};
export default Card;
