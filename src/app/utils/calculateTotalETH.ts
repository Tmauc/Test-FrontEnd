import { NFTProps } from "../interfaces/nft.interface";

export const calculateTotalETH = (nfts: NFTProps[], sellerId: number) => {
  return nfts
    .filter((nft) => nft.sellerId === sellerId)
    .reduce((acc, nft) => acc + parseFloat(nft.price), 0);
};
