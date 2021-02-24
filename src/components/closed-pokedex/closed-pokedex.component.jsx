import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import PokeList from '../../components/pokelist/pokelist.component';
import Pagination from '../../components/pagination/pagination.component';

import { selectData, selectItemsPerPage, selectCurrentPage } from '../../redux/closedpokedex/closedpokedex.selectors';

import { 
	ClosedPokedexInterfaceContainer,
	PokedexTopHeaderContainer,
	PokedexBigCircleElement,
	PokedexInnerCircleElement
 } from './closed-pokedex.styles';

export default function ClosedPokedex() {
	
	const pokemonData = useSelector(selectData)
	const itemsPerPage = useSelector(selectItemsPerPage)
	const currentPage = useSelector(selectCurrentPage)

	const dispatch = useDispatch();
  const history = useHistory();

	const indexOfLastPokemon = currentPage * itemsPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
	const currentItems = pokemonData.slice(indexOfFirstPokemon, indexOfLastPokemon)

	function handleClick() {
    history.push('/');
  }

	return (
		<ClosedPokedexInterfaceContainer>
			<PokedexTopHeaderContainer>
				<PokedexBigCircleElement>
					<PokedexInnerCircleElement
						onClick={handleClick}
					/>
				</PokedexBigCircleElement>
			</PokedexTopHeaderContainer>
			<PokeList data={ currentItems } />
			<Pagination />
    </ClosedPokedexInterfaceContainer>
	);
}