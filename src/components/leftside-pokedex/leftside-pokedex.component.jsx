import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDetailsData } from "../../redux/openedpokedex/openedpokedex.selectors";

import LeftSideContent from "../../components/leftside-content/leftside-content.component";

import { LeftSidePokedexInterfaceContainer } from "./leftside-pokedex.styles";

const LeftSidePokedex = ({ detailsData }) => (
  <LeftSidePokedexInterfaceContainer>
    <LeftSideContent {...detailsData} />
  </LeftSidePokedexInterfaceContainer>
);

const mapStateToProps = createStructuredSelector({
  detailsData: selectDetailsData,
});

export default connect(mapStateToProps)(LeftSidePokedex);
