import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedOut } from "@clerk/clerk-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between w-full h-16 md:h-20">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="Lama logo" width={32} height={32} />
        <span>lamalog.</span>
      </Link>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className="text-3xl cursor-pointer"
          onClick={() => {
            setOpen((open) => !open);
          }}
        >
          {open ? "X" : "☰"}
        </div>
        {/* MOBILE LINK LIST\ */}
        <div
          className={`absolute font-medium flex items-center justify-center w-full h-screen flex-col top-16 gap-4 ${
            open ? "-right-0" : "-right-full"
          } transition-all duration-300`}
        >
          <Link to="/">Home</Link>
          <Link to="">Trending</Link>
          <Link to="">Most popular</Link>
          <Link to="">About</Link>
          <SignedOut>
            <Link to="login">
              <button className="px-4 py-2 text-white bg-blue-800 rounded-3xl">
                Login
              </button>
            </Link>
          </SignedOut>
        </div>
      </div>
      {/* Desktop menu */}
      <div className="items-center hidden gap-8 font-medium md:flex xl:gap-12">
        <Link to="/">Home</Link>
        <Link to="">Trending</Link>
        <Link to="">Most popular</Link>
        <Link to="">About</Link>
        <SignedOut>
          <Link to="login">
            <button className="px-4 py-2 text-white bg-blue-800 rounded-3xl">
              Login
            </button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
