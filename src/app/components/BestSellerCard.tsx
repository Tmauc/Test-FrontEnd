/* eslint-disable @next/next/no-img-element */
import React from "react";

import { BestSellerProps } from "../interfaces/bestSeller.interface";

interface BestSellerCardProps extends BestSellerProps {
  handleClickSeller?: (name: string) => void;
  totalETH: number;
  rank: number;
}

const BestSellerCard: React.FC<BestSellerCardProps> = ({
  name,
  rank,
  avatar,
  totalETH,
  handleClickSeller,
}) => {
  const formattedRank = String(rank).padStart(2, "0");

  return (
    <div
      onClick={() => handleClickSeller && handleClickSeller(name)}
      className="shadow-[-10px_-10px_20px_var(--shadow-color),10px_10px_20px_var(--shadow-color)] cursor-pointer p-4 rounded-lg flex items-center hover:scale-95 transition ease-in-out"
    >
      <div className="text-l text-gray-400 mr-4">{formattedRank}</div>
      <div className="w-16 h-16 mr-4">
        <img
          src={avatar}
          alt={`Avatar de ${name}`}
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div>
        <div className="text-lg font-bold">{name}</div>
        <div className="text-sm text-gray-500">{`${totalETH?.toFixed(
          2
        )} ETH`}</div>
      </div>
    </div>
  );
};

export default BestSellerCard;
