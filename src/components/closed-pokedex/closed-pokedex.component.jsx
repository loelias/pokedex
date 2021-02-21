import React from 'react';

import PokeList from '../../components/pokelist/pokelist.component';

import { ClosedPokedexInterfaceContainer } from './closed-pokedex.styles';

const ClosedPokedex = () => (
    <ClosedPokedexInterfaceContainer>
			<PokeList />
    </ClosedPokedexInterfaceContainer>
);

export default (ClosedPokedex);