/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full mb-10 pb-4 flex justify-center border-b">
      <Link href="/" className="w-full h-20 flex justify-center">
        <picture>
          <source
            srcSet="/logo-light.svg"
            media="(prefers-color-scheme: dark)"
          />
          <img className="w-40" alt="logo" src="/logo-dark.svg" />
        </picture>
      </Link>
    </div>
  );
};

export default Header;
