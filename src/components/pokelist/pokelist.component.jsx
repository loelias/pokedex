import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectData } from "../../redux/closedpokedex/closedpokedex.selectors";

import ListItem from '../../components/list-item/list-item.component';

import { PokeListContainer } from './pokelist.styles'

const PokeList = ({ data }) => (
  <PokeListContainer>
    {data.map((dataObject) => (
        <ListItem key={dataObject.entry_number} {...dataObject} />
    ))}
  </PokeListContainer>
);

const mapStateToProps = createStructuredSelector({
  data: selectData,
});

export default connect(mapStateToProps)(PokeList);
