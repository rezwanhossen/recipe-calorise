import Cards from "../Cards/Cards";

const Main = () => {
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
          <Cards></Cards>
          <div className=" w-1/3">
            <h1>sidebar</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
