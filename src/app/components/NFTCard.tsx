/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import NFTModal from "../components/NFTModal";

import { NFTProps } from "../interfaces/nft.interface";
import { BestSellerProps } from "../interfaces/bestSeller.interface";

interface NFTCardProps {
  nft: NFTProps;
  seller?: BestSellerProps | undefined;
  handleClickSeller?: (name: string) => void;
}

const NFTCard: React.FC<NFTCardProps> = ({
  nft,
  seller,
  handleClickSeller,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setOpenModal(false);
  };

  return (
    <div>
      <div
        onClick={handleOpenModal}
        className="group p-4 rounded-lg shadow-[-10px_-10px_20px_#0b0b0b,10px_10px_20px_#0b0b0b] cursor-pointer"
      >
        <h3 className="text-lg font-bold mb-3 border-b pb-2 border-b-stone-600">
          {`${nft.name} ${nft.isHot ? "🔥" : ""}`}
        </h3>
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-t-lg group-hover:mix-blend-difference"
            src={nft.image}
            alt={nft.name}
          />
          <div className="absolute bottom-2 left-2 right-2">
            {nft.timeLeft && (
              <span className=" bg-amber-100 text-amber-800 text-xs font-bold py-1 px-2 mr-2 inline-block rounded">
                {nft.timeLeft}
                <svg
                  fill="currentColor"
                  className="inline-block w-4 h-4 ml-1"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 235.319 235.319"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  enableBackground="new 0 0 235.319 235.319"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path d="m201.094,29.997c2.649-0.623 4.623-2.996 4.623-5.835v-18.162c0-3.313-2.687-6-6-6h-164.114c-3.313,0-6,2.687-6,6v18.163c0,2.839 1.974,5.212 4.623,5.835 1.812,32.314 18.594,61.928 45.682,80.076l11.324,7.586-11.324,7.586c-27.089,18.147-43.871,47.762-45.682,80.076-2.649,0.623-4.623,2.996-4.623,5.835v18.163c0,3.313 2.687,6 6,6h164.114c3.313,0 6-2.687 6-6v-18.163c0-2.839-1.974-5.212-4.623-5.835-1.812-32.314-18.594-61.928-45.683-80.076l-11.324-7.586 11.324-7.586c27.089-18.148 43.871-47.763 45.683-80.077zm-159.491-17.997h152.114v6.163h-152.114v-6.163zm152.114,211.319h-152.114v-6.163h152.114v6.163zm-63.749-110.644c-1.663,1.114-2.661,2.983-2.661,4.985s0.998,3.871 2.661,4.985l18.765,12.571c23.71,15.883 38.49,41.705 40.333,69.941h-142.812c1.843-28.235 16.623-54.057 40.333-69.941l18.765-12.571c1.663-1.114 2.661-2.983 2.661-4.985s-0.998-3.871-2.661-4.985l-18.765-12.571c-23.71-15.884-38.49-41.706-40.333-69.941h142.812c-1.843,28.236-16.623,54.057-40.333,69.941l-18.765,12.571z"></path>{" "}
                      <path d="m133.307,82.66h-31.295c-2.487,0-4.717,1.535-5.605,3.858-0.888,2.324-0.25,4.955 1.604,6.613l15.647,14c1.139,1.019 2.57,1.528 4,1.528s2.862-0.509 4-1.528l15.647-14c1.854-1.659 2.492-4.29 1.604-6.613-0.885-2.323-3.115-3.858-5.602-3.858z"></path>{" "}
                      <path d="m117.414,140.581l-15.218,9.775c-13.306,8.914-21.292,23.876-21.292,39.892h76.511c0-16.016-7.986-30.978-21.292-39.892l-15.218-9.775c-1.074-0.644-2.416-0.644-3.491,0z"></path>{" "}
                    </g>
                  </g>
                </svg>
              </span>
            )}
            {nft.timeLeft && (
              <span className=" bg-emerald-50 text-emerald-500 text-xs font-bold py-1 px-2 inline-block mr-2 rounded">
                {`${nft.forSale} for sale`}
              </span>
            )}
            {nft.price && (
              <span className=" bg-sky-100 text-sky-800 text-xs font-bold py-1 px-2 mt-1 inline-block rounded">
                {`${nft.price} ETH`}
              </span>
            )}
          </div>
        </div>
      </div>
      {openModal && (
        <NFTModal
          nft={nft}
          seller={seller}
          onClose={handleCloseModal}
          handleClickSeller={handleClickSeller}
        />
      )}
    </div>
  );
};

export default NFTCard;
