import React from "react";
import { useSelector, useDispatch } from "react-redux";

import PokeList from "../../components/pokelist/pokelist.component";
import Pagination from "../../components/pagination/pagination.component";
import pokedexLogo from "../../assets/retropokedex.png";

import {
  selectData,
  selectItemsPerPage,
  selectCurrentPage,
} from "../../redux/closedpokedex/closedpokedex.selectors";

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

  const dispatch = useDispatch();

  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
  const currentItems = pokemonData.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  return (
    <ClosedPokedexInterfaceContainer>
      <PokedexTopHeaderContainer>
        <PokedexBigCircleElement>
          <PokedexInnerCircleElement />
        </PokedexBigCircleElement>
        <PokedexImageHeader className="image" imageUrl={pokedexLogo} />
      </PokedexTopHeaderContainer>
      <PokeList data={currentItems} />
      <Pagination />
    </ClosedPokedexInterfaceContainer>
  );
}
