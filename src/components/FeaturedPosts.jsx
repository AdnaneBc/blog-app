import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="flex flex-col gap-8 mt-8 lg:flex-row">
      <div className="flex flex-col w-full gap-4 lg:w-1/2">
        {/* Image */}
        <Image src="featured1.jpeg" className="object-cover rounded-3xl" />
        {/* Detail */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="" className="text-blue-800 lg:text-lg">
            Web design
          </Link>
          <span className="text-gray-500"> 2 days ago</span>
        </div>
        {/* Title */}
        <div className="">
          <Link
            to="/test"
            className="text-lg font-semibold lg:text-3xl lg:font-bold"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </Link>
        </div>
      </div>
      {/* Others */}
      <div className="flex flex-col w-full gap-4 lg:w-1/2">
        {/* Second */}
        <div className="flex justify-between gap-4 lg:h-1/3">
          <Image
            className="object-cover w-1/3 rounded-3xl aspect-video"
            src="featured2.jpeg"
          />
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 mb-4 text-sm lg:text-base">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-sm text-gray-500">2 days ago.</span>
            </div>
            {/* Title */}
            <Link
              to="/test"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </Link>
          </div>
        </div>
        {/* Third */}
        <div className="flex justify-between gap-4 lg:h-1/3">
          <Image
            className="object-cover w-1/3 rounded-3xl aspect-video"
            src="featured3.jpeg"
          />
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 mb-4 text-sm lg:text-base">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-sm text-gray-500">2 days ago.</span>
            </div>
            {/* Title */}
            <Link
              to="/test"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </Link>
          </div>
        </div>
        {/* Fourth */}
        <div className="flex justify-between gap-4 lg:h-1/3">
          <Image
            className="object-cover w-1/3 rounded-3xl aspect-video"
            src="featured4.jpeg"
          />
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 mb-4 text-sm lg:text-base">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-sm text-gray-500">2 days ago.</span>
            </div>
            {/* Title */}
            <Link
              to="/test"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
