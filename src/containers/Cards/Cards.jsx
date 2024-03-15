import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/Card";

const Cards = () => {
  const [cards, setcards] = useState([]);
  useEffect(() => {
    fetch("jsondata.json")
      .then((res) => res.json())
      .then((data) => setcards(data));
  }, []);
  //   console.log(cards);
  return (
    <div className="w-[100%] lg:w-2/3">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
        {cards.map((card) => (
          <Card key={card.recipe_id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
