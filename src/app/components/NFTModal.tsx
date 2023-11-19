/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { NFTProps } from "../interfaces/nft.interface";
import { BestSellerProps } from "../interfaces/bestSeller.interface";

interface NFTModalProps {
  nft: NFTProps;
  seller: BestSellerProps | undefined;
  onClose: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => void;
  handleClickSeller?: (name: string) => void;
}

const NFTModal: React.FC<NFTModalProps> = ({
  nft,
  seller,
  onClose,
  handleClickSeller,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="max-w-3xl w-1/3 bg-zinc-900 p-4 rounded-lg shadow-[-10px_-10px_20px_#0b0b0b,10px_10px_20px_#0b0b0b] transition duration-500 ease-in-out transform">
        <div className="flex justify-between mb-4">
          <button onClick={onClose} data-testid="close-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
            </svg>
          </button>
          <div className="">
            {nft.isHot && (
              <span className="text-xs mr-2 font-bold p-1 rounded bg-red-500 text-white">
                HOT 🔥
              </span>
            )}
            {nft.timeLeft && (
              <span className=" bg-amber-100 text-amber-800 text-xs font-bold py-1 px-2 rounded">
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
          </div>
        </div>
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={nft.image}
          alt={nft.name}
        />
        <div className="flex flex-col items-start mt-4 divide-y divide-stone-600">
          <div className="mb-3 w-full">
            <div className="mt-2 flex items-center justify-between">
              <h3 className="text-lg font-bold">{nft.name}</h3>
              <p className="text-sm text-emerald-500">{`${nft.forSale} for sale`}</p>
            </div>
            <p className="text-sm text-gray-400">{`${nft.totalMinted} editions minted`}</p>
            {seller && (
              <div
                className="flex items-center mt-3 cursor-pointer w-fit"
                onClick={() =>
                  handleClickSeller && handleClickSeller(seller?.name)
                }
              >
                <img
                  src={seller.avatar}
                  alt={`Avatar de ${seller.name}`}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <span>{seller.name}</span>
              </div>
            )}
          </div>
          <div className="mt-3 pt-3 flex items-center justify-between w-full">
            <span className="text-xl font-bold">{`${nft.price} ETH`}</span>
            <button
              className="flex items-center"
              data-testid="like-button"
              onClick={handleLike}
            >
              <svg
                className={`w-6 h-6 fill-current ${
                  isLiked ? "text-red-500" : "text-white"
                }`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-sm font-bold ml-1">
                {isLiked ? nft.like + 1 : nft.like}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTModal;
