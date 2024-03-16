import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className=" hero min-h-screen bg-cover bg rounded-xl text-white ">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              Discover an exceptional cooking <br />
              class tailored for you!
            </h1>
            <p className="py-6">
              Unleash your culinary potential with our bespoke cooking classes!
              Dive into a personalized journey where our <br /> expert chefs
              will guide you through every step, from mastering basic techniques
              to crafting gourmet delights.
            </p>
            <button className="btn bg-[#0BE58A] border-none text-xl rounded-full m-5">
              Explore Now
            </button>
            <button className="btn btn-outline text-white text-xl border-white rounded-full">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
