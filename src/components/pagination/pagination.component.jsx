import React from "react";
import { PaginationContainer, PaginationButton } from "./pagination.styles";

export default function Pagination({ currentPage, pageNumbers, handleClick }) {
  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PaginationButton
          className={number == currentPage ? "active" : ""}
          key={number}
          onClick={handleClick}
        >
          {number}
        </PaginationButton>
      ))}
    </PaginationContainer>
  );
}
