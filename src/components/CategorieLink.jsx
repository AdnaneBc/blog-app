import { Link } from "react-router-dom";

const CategorieLink = ({query, text}) => {
  return (
    <Link
      to={`/posts?cat=${query}`}
      className="px-4 py-2 rounded-full text- hover:bg-blue-50"
    >
      {text}
    </Link>
  );
};

export default CategorieLink;
