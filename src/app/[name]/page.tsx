"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

import data from "../data.json";
import NFTCard from "../components/NFTCard";
import { BestSellerProps } from "../interfaces/bestSeller.interface";
import { calculateTotalETH } from "../utils/calculateTotalETH";
import Header from "../components/Header";

interface SellerPageProps {
  params: { name: string };
}

interface BestSellerWithTotalProps extends BestSellerProps {
  totalETH: number;
}

const SellerPage: React.FC<SellerPageProps> = ({ params }) => {
  const decodedName = decodeURIComponent(params.name);
  const seller = data.bestSellers.find((s) => s.name === decodedName);
  const [completSellers, setCompletSellers] =
    useState<BestSellerWithTotalProps>();
  const nfts = data.nfts;
  const sellerNFTs = data.nfts.filter((nft) => nft.sellerId === seller?.id);
  const rank = data.bestSellers.findIndex((s) => s.name === decodedName) + 1;

  useEffect(() => {
    if (seller) {
      const sellersWithTotal = {
        ...seller,
        totalETH: calculateTotalETH(nfts, seller?.id),
      };
      setCompletSellers(sellersWithTotal);
    }
  }, [nfts, seller]);

  return (
    <div className="relative container mx-auto p-4">
      <Header />
      <div className="flex flex-col md:lg:flex-row mt-[10%] divide-y md:lg:divide-x md:lg:divide-y-0 divide-stone-600">
        <div className="text-center flex w-full md:lg:max-w-sm justify-center items-center mb-5 md:lg:mb-0">
          <div>
            <div className="relative inline-block">
              <img
                src={completSellers?.avatar}
                alt={`Avatar de ${completSellers?.name}`}
                className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              {seller?.isVerified && (
                <span className="absolute bottom-0 right-3 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
              )}
            </div>
            <div>
              <h1 className="whitespace-nowrap w-full text-2xl font-bold">
                {seller?.name}
              </h1>
              <p className="uppercase h-fit text-gray-400 text-sm">
                Rank: {rank}
              </p>
              <p className="text-gray-400 text-sm">
                {completSellers?.totalETH} ETH
              </p>
            </div>
          </div>
        </div>
        <div className="sm:mt-10 md:lg:pl-10 pt-5 md:lg:pt-0">
          {sellerNFTs.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold mb-4">NFTs for sale :</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sellerNFTs.map((nft) => (
                  <NFTCard key={nft.id} nft={nft} {...nft} />
                ))}
              </div>
            </>
          ) : (
            <div className="h-full flex items-center">
              <h2 className="text-2xl font-bold mb-4">
                {`No NFT from ${seller?.name} is currently on sale`}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
