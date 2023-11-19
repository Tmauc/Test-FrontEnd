import { calculateTotalETH } from "../utils/calculateTotalETH";
import { NFTProps } from "../interfaces/nft.interface";

describe("calculateTotalETH", () => {
  const testNFTs: NFTProps[] = [
    {
      name: "NFT 1",
      totalMinted: 100,
      price: "3.5",
      like: 10,
      forSale: 1,
      timeLeft: "10h",
      isHot: true,
      image: "img1.jpg",
      sellerId: 1,
    },
    {
      name: "NFT 2",
      totalMinted: 150,
      price: "2.0",
      like: 20,
      forSale: 0,
      timeLeft: "5h",
      isHot: false,
      image: "img2.jpg",
      sellerId: 2,
    },
    {
      name: "NFT 3",
      totalMinted: 200,
      price: "4.0",
      like: 30,
      forSale: 1,
      timeLeft: "3h",
      isHot: true,
      image: "img3.jpg",
      sellerId: 1,
    },
    {
      name: "NFT 4",
      totalMinted: 250,
      price: "1.5",
      like: 40,
      forSale: 0,
      timeLeft: "1h",
      isHot: false,
      image: "img4.jpg",
      sellerId: 3,
    },
  ];

  test("should correctly calculate total ETH for a given seller", () => {
    expect(calculateTotalETH(testNFTs, 1)).toBe(7.5);
  });

  test("should return 0 if no NFTs match the seller ID", () => {
    expect(calculateTotalETH(testNFTs, 4)).toBe(0);
  });

  test("should correctly parse and sum prices in various formats", () => {
    const diversePriceNFTs: NFTProps[] = [
      {
        name: "NFT 5",
        totalMinted: 300,
        price: "5.00",
        like: 50,
        forSale: 1,
        timeLeft: "2h",
        isHot: true,
        image: "img5.jpg",
        sellerId: 1,
      },
      {
        name: "NFT 6",
        totalMinted: 350,
        price: "2.30",
        like: 60,
        forSale: 0,
        timeLeft: "12h",
        isHot: false,
        image: "img6.jpg",
        sellerId: 1,
      },
    ];
    expect(calculateTotalETH(diversePriceNFTs, 1)).toBe(7.3);
  });

  test("should return 0 for empty NFT array", () => {
    expect(calculateTotalETH([], 1)).toBe(0);
  });
});
