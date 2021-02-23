import React from 'react';

import LeftSidePokedex from '../../components/leftside-pokedex/leftside-pokedex.component';

import { OpenedPokedexInterfaceContainer } from './opened-pokedex.styles';

const OpenedPokedex = () => (
    <OpenedPokedexInterfaceContainer>
			<LeftSidePokedex />
    </OpenedPokedexInterfaceContainer>
);


export default (OpenedPokedex);