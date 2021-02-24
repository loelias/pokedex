import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/closedpokedex/closedpokedex.actions";

import {
  selectData,
  selectItemsPerPage,
  selectPageNumbers,
} from "../../redux/closedpokedex/closedpokedex.selectors";

import { PaginationContainer, PaginationButton } from "./pagination.styles";

export default function Pagination() {
  const itemsPerPage = useSelector(selectItemsPerPage);
  const pokemonData = useSelector(selectData);
  const pageNumbers = useSelector(selectPageNumbers);
  const dispatch = useDispatch();

  if(pageNumbers.length == 0) {
    for(let i = 1; i <= Math.ceil(pokemonData.length / itemsPerPage); i++) {
      pageNumbers.push(i)
    }
  }
  
  const handleClick = (event) => {
    dispatch(setCurrentPage(parseInt(event.target.innerHTML)))
  }

  return (
    <PaginationContainer>
      {
        pageNumbers.map(number => (
          <PaginationButton 
          key={number}
          onClick={handleClick}
          >{ number }</PaginationButton>
        ))
      }
      
    </PaginationContainer>
  );
}
