/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full mb-10 pb-4 flex justify-center border-b">
      <Link href="/" className="w-full h-20 flex justify-center">
        <img className="w-40" src="/logo.svg" alt="logo" />
      </Link>
    </div>
  );
};

export default Header;
