import { Link } from "react-router-dom";

const ListItem = ({ name }) => {
  return (
    <Link
      className="bg-blue-400 text-white p-10 text-xl text-center hover:bg-blue-200 transition"
      to={`/students/${name}`}
    >
      <li>{name}</li>
    </Link>
  );
};

export default ListItem;
