"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import BestSellerCard from "./components/BestSellerCard";
import NFTCard from "./components/NFTCard";

import { calculateTotalETH } from "./utils/calculateTotalETH";
import data from "./data.json";

import { BestSellerProps } from "./interfaces/bestSeller.interface";
import Header from "./components/Header";

interface BestSellerWithTotalProps extends BestSellerProps {
  totalETH: number;
}

const Home: React.FC = () => {
  const router = useRouter();
  const [sortedBestSellers, setSortedBestSellers] = useState<
    BestSellerWithTotalProps[]
  >([]);

  const bestSellers = data.bestSellers;
  const nfts = data.nfts;

  const handleClickSeller = (name: string | undefined) => {
    router.push(`/${name}`);
  };

  useEffect(() => {
    const sellersWithTotal = bestSellers.map((seller) => ({
      ...seller,
      totalETH: calculateTotalETH(nfts, seller.id),
    }));

    const sortedSellers = sellersWithTotal.sort(
      (a, b) => b.totalETH - a.totalETH
    );
    setSortedBestSellers(sortedSellers);
  }, [bestSellers, nfts]);

  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="flex flex-col gap-20">
        <section>
          <h2 className="text-2xl font-bold">Best Sellers 🏆</h2>
          <p className="text-l mb-6">{"Best Seller of the week's NFTs"}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedBestSellers.map((seller, index) => {
              return (
                <BestSellerCard
                  key={seller.id}
                  id={seller.id}
                  name={seller.name}
                  rank={index + 1}
                  avatar={seller.avatar}
                  totalETH={seller.totalETH}
                  handleClickSeller={handleClickSeller}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Live NFT 🔥</h2>
          <p className="text-l mb-6">Enjoy! The latest NFT</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nfts.map((nft) => {
              return (
                <NFTCard
                  key={nft.id}
                  nft={nft}
                  seller={bestSellers.find(
                    (seller) => seller.id === nft.sellerId
                  )}
                  handleClickSeller={handleClickSeller}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
