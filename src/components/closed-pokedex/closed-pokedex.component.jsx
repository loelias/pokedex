import React from "react";
import { useSelector, useDispatch } from "react-redux";

import PokeList from "../../components/pokelist/pokelist.component";
import Pagination from "../../components/pagination/pagination.component";
import SearchBox from "../../components/search-box/search-box.component";
import pokedexLogo from "../../assets/retropokedex.png";

import {
  selectData,
  selectItemsPerPage,
  selectCurrentPage,
  selectPageNumbers,
  selectSearchField,
} from "../../redux/closedpokedex/closedpokedex.selectors";

import {
  setPageNumbers,
  setCurrentPage,
  setSearchField,
} from "../../redux/closedpokedex/closedpokedex.actions";

import {
  ClosedPokedexInterfaceContainer,
  PokedexTopHeaderContainer,
  PokedexBigCircleElement,
  PokedexInnerCircleElement,
  PokedexImageHeader,
} from "./closed-pokedex.styles";

export default function ClosedPokedex() {
  const pokemonData = useSelector(selectData);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const currentPage = useSelector(selectCurrentPage);
  const pageNumbers = useSelector(selectPageNumbers);
  const searchField = useSelector(selectSearchField);

  const dispatch = useDispatch();

  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
  const filteredItems = pokemonData.filter((pokemon) =>
    pokemon.pokemon_species.name
      .toLowerCase()
      .includes(searchField.toLowerCase())
  );
  const itemsToList = filteredItems.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  console.log(filteredItems);
  console.log(searchField);

  function NumberOfPages() {
    for (let i = 1; i <= Math.ceil(filteredItems.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  if (pageNumbers.length == []) {
    NumberOfPages();
  }

  const handleClick = (event) => {
    dispatch(setCurrentPage(parseInt(event.target.innerHTML)));
  };

  const handleChange = (event) => {
    dispatch(setSearchField(event.target.value));
    dispatch(setPageNumbers([]));
    dispatch(setCurrentPage(1));
  };

  return (
    <ClosedPokedexInterfaceContainer>
      <PokedexTopHeaderContainer>
        <PokedexBigCircleElement>
          <PokedexInnerCircleElement />
        </PokedexBigCircleElement>
        <PokedexImageHeader className="image" imageUrl={pokedexLogo} />
      </PokedexTopHeaderContainer>
      <PokeList data={itemsToList} />
      <Pagination
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        handleClick={handleClick}
      />
      <SearchBox placeholder={"Seach by name..."} handleChange={handleChange} />
    </ClosedPokedexInterfaceContainer>
  );
}
