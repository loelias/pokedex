import React from "react";

import ListItem from "../../components/list-item/list-item.component";

import { PokeListContainer } from "./pokelist.styles";

const PokeList = ({ data }) => (
  <PokeListContainer>
    {data.map((dataObject) => (
      <ListItem key={dataObject.entry_number} {...dataObject} />
    ))}
  </PokeListContainer>
);

export default PokeList;
