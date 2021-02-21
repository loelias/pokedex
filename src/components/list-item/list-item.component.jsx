import React from 'react';
// import { withRouter } from 'react-router-dom';

import {
  ListItemContainer,
  ContentName,
  ContentNumber,
} from './list-item.styles';

const ListItem = ({ entry_number, pokemon_species, match }) => (
  <ListItemContainer
    onClick={() => console.log('Clicked pokemon', entry_number)}
  >
		<ContentNumber># { entry_number }</ContentNumber>
		<ContentName>{ pokemon_species.name.toUpperCase()}</ContentName>
  </ListItemContainer>
);

export default ListItem;
