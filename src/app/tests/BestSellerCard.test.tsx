import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BestSellerCard from "../components/BestSellerCard";

describe("BestSellerCard", () => {
  const mockBestSeller = {
    name: "John Doe",
    id: 2323,
    isVerified: false,
    avatar: "/imgs/avatars/6.webp",
    totalETH: 3.5,
    rank: 1,
  };

  test("should render BestSeller information correctly", () => {
    render(<BestSellerCard {...mockBestSeller} />);

    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("3.50 ETH")).toBeInTheDocument();
    expect(screen.getByAltText("Avatar de John Doe")).toHaveAttribute(
      "src",
      "/imgs/avatars/6.webp"
    );
  });

  test("should call handleClickSeller when clicked", () => {
    const handleClickSeller = jest.fn();
    render(
      <BestSellerCard
        {...mockBestSeller}
        handleClickSeller={handleClickSeller}
      />
    );

    fireEvent.click(screen.getByText("John Doe"));
    expect(handleClickSeller).toHaveBeenCalledWith("John Doe");
  });
});
