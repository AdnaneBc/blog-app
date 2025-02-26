import { Link } from "react-router-dom";
import CategorieLink from "./CategorieLink";

const MainCategories = () => {
  return (
    <div className="items-center justify-center hidden gap-8 p-4 bg-white shadow-lg md:flex rounded-3xl xl:rounded-full">
      {/* Links */}
      <div className="flex flex-wrap items-center justify-between flex-1">
        <Link
          to="/posts"
          className="px-4 py-2 text-white bg-blue-800 rounded-full"
        >
          All posts
        </Link>
        <CategorieLink query="development" text="Development" />
        <CategorieLink query="databases" text="Databases" />
        <CategorieLink query="search-engines" text="Search Engines" />
        <CategorieLink query="marketing" text="Marketing" />
      </div>
      <span className="text-xl font-medium">|</span>
      {/* Search */}
      <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent "
        />
      </div>
    </div>
  );
};

export default MainCategories;
