import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col gap-8 xl:flex-row">
      <div className="md:hidden xl:block xl:w-1/3 ">
        <Image src="postImg.jpeg" className="object-cover rounded-2xl " />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link className="text-4xl font-semibold text-gray-800" to="/slug">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
        </Link>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="text-gray-400">Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web design</Link>
          <span>2 days ago</span>
        </div>
        <p className="text-sm text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, hic!
          Unde, ad commodi voluptatibus nostrum iure est. Nemo mollitia minus
          iusto dicta ullam neque autem delectus alias, ipsam fuga repellat.
        </p>
        <Link to="/slug" className="text-sm text-blue-800 underline">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
