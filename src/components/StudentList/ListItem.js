import { Link } from "react-router-dom";

const ListItem = () => {
  return (
    <li>
      Student naam <Link to="/studentpage">Student page</Link>
    </li>
  );
};

export default ListItem;
