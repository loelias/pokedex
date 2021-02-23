import React from 'react';

import LeftSidePokedex from '../../components/leftside-pokedex/leftside-pokedex.component';
import RightSidePokedex from '../../components/rightside-pokedex/rightside-pokedex.component';

import { OpenedPokedexInterfaceContainer } from './opened-pokedex.styles';

const OpenedPokedex = () => (
    <OpenedPokedexInterfaceContainer>
			<LeftSidePokedex />
			<RightSidePokedex />
    </OpenedPokedexInterfaceContainer>
);


export default (OpenedPokedex);