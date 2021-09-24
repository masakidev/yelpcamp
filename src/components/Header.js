import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";

const Header = () => {
  return (
    <div className="p-4">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Header;
