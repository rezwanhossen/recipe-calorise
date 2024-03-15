import { CiSearch } from "react-icons/ci";
import author from "../../assets/img/Frame 5.jpg";
import banner from "../../assets/img/Rectangle 1.jpg";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 p-4">
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className=" navbar-end hidden md:flex">
          <div className=" flex items-center gap-2 p-2 text-xl bg-slate-200 rounded-full">
            <CiSearch></CiSearch>
            <input
              type="text"
              className=" border-none bg-slate-200"
              placeholder="Search.."
              name=""
              id=""
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={author} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
