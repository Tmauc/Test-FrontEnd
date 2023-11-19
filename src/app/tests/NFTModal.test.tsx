import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NFTModal from "../components/NFTModal";

describe("NFTModal", () => {
  const mockNFT = {
    id: "8",
    name: "Test NFT",
    totalMinted: 5,
    price: "1.5",
    like: 9,
    forSale: 3,
    timeLeft: "10h",
    isHot: true,
    sellerId: 123,
    image: "/imgs/nfts/1.webp",
  };

  const mockSeller = {
    name: "John Doe",
    id: 2323,
    isVerified: false,
    avatar: "/imgs/avatars/6.webp",
    totalETH: 3.5,
    rank: 1,
  };

  const onClose = jest.fn();
  const handleClickSeller = jest.fn();

  test("should render NFT and Seller information correctly", () => {
    render(
      <NFTModal
        nft={mockNFT}
        seller={mockSeller}
        onClose={onClose}
        handleClickSeller={handleClickSeller}
      />
    );

    expect(screen.getByText("Test NFT")).toBeInTheDocument();
    expect(screen.getByText("1.5 ETH")).toBeInTheDocument();
    expect(screen.getByAltText("Test NFT")).toHaveAttribute(
      "src",
      "/imgs/nfts/1.webp"
    );
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByAltText("Avatar de John Doe")).toHaveAttribute(
      "src",
      "/imgs/avatars/6.webp"
    );
  });

  test("should call onClose when close button is clicked", () => {
    render(
      <NFTModal
        nft={mockNFT}
        seller={mockSeller}
        onClose={onClose}
        handleClickSeller={handleClickSeller}
      />
    );

    fireEvent.click(screen.getByTestId("close-button"));
    expect(onClose).toHaveBeenCalled();
  });

  test("should toggle like status when like button is clicked", () => {
    render(
      <NFTModal
        nft={mockNFT}
        seller={mockSeller}
        onClose={onClose}
        handleClickSeller={handleClickSeller}
      />
    );

    const likeButton = screen.getByTestId("like-button");
    fireEvent.click(likeButton);
    expect(screen.getByText(String(mockNFT.like + 1))).toBeInTheDocument();
    fireEvent.click(likeButton);
    expect(screen.getByText(String(mockNFT.like))).toBeInTheDocument();
  });

  test("should call handleClickSeller when seller is clicked", () => {
    render(
      <NFTModal
        nft={mockNFT}
        seller={mockSeller}
        onClose={onClose}
        handleClickSeller={handleClickSeller}
      />
    );

    fireEvent.click(screen.getByText("John Doe"));
    expect(handleClickSeller).toHaveBeenCalledWith("John Doe");
  });
});
