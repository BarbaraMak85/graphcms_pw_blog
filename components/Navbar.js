import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center  bg-white h-20">
      <div className="flex-2 text-red-600  font-normal text-xl text-center h-20 w-32 hover:bg-red-600 hover:text-white pt-6 hover:-translate-y-1 duration-300">
        <Link href="/">
          <a>Posty</a>
        </Link>
      </div>
      <div className="flex-2 text-red-600 text-xl text-center h-20 w-32 hover:bg-red-600 hover:text-white pt-6 hover:-translate-y-1 duration-300">
        <Link href="/about">
          <a>O mnie</a>
        </Link>
      </div>

      <div className="flex-2 text-red-600 text-xl text-center h-20 w-32 hover:bg-red-600 hover:text-white pt-6 hover:-translate-y-1 duration-300 ">
        <Link href="/contact">
          <a>Kontakt</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
