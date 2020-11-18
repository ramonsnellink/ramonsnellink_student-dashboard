import { Link } from "react-router-dom";

const ListItem = ({ name }) => {
  return (
    <li>
      <Link to={`/students/${name}`}>{name}</Link>
    </li>
  );
};

export default ListItem;
