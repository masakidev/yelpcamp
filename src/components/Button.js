import { Link } from "react-router-dom";

const Button = ({ description, link }) => {
  return (
    <Link to={link}>
      <button className="w-full mb-6 px-4 py-3 rounded-md bg-black text-white">
        {description}
      </button>
    </Link>
  );
};

export default Button;
