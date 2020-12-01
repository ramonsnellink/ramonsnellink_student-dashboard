import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-700 p-5 pr-10">
      <ul className="text-white flex space-x-8 justify-end">
        <li className=" hover:underline">
          <Link to="/">Dashboard</Link>
        </li>
        <li className=" hover:underline">
          <Link to="/students">Student List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
