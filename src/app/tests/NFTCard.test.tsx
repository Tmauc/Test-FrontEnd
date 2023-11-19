import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NFTCard from "../components/NFTCard";

jest.mock("../components/NFTModal", () => {
  const NFTModalMock = (props: { onClose: () => void }) => (
    <div data-testid="nft-modal" onClick={props.onClose}>
      Mocked Modal
    </div>
  );

  NFTModalMock.displayName = "NFTModalMock";
  return NFTModalMock;
});

describe("NFTCard", () => {
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

  test("should render NFT information correctly", () => {
    render(<NFTCard nft={mockNFT} />);
    expect(screen.getByText("Test NFT 🔥")).toBeInTheDocument();
    expect(screen.getByText("10h")).toBeInTheDocument();
    expect(screen.getByText("3 for sale")).toBeInTheDocument();
    expect(screen.getByText("1.5 ETH")).toBeInTheDocument();
    expect(screen.getByAltText("Test NFT")).toHaveAttribute(
      "src",
      "/imgs/nfts/1.webp"
    );
  });

  test("should open and close modal on click", () => {
    render(<NFTCard nft={mockNFT} />);
    const card = screen.getByText("Test NFT 🔥").closest("div");
    if (card) {
      fireEvent.click(card);
      expect(screen.getByTestId("nft-modal")).toBeInTheDocument();
      fireEvent.click(screen.getByTestId("nft-modal"));
      expect(screen.queryByTestId("nft-modal")).not.toBeInTheDocument();
    } else {
      throw new Error("Element not found");
    }
  });
});
