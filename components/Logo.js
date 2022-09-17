import React from "react";
import Image from "next/image";
import LogoMain from "../public/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center pb-16 pt-16">
      <Image src={LogoMain} unoptimized alt="logo" />
    </div>
  );
};

export default Logo;
