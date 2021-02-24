import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDetailsData } from "../../redux/openedpokedex/openedpokedex.selectors";

import RightSideContent from "../../components/rightside-content/rightside-content.component";

import { RightSidePokedexInterfaceContainer } from "./rightside-pokedex.styles";

const RightSidePokedex = ({ detailsData }) => (
  <RightSidePokedexInterfaceContainer>
    <RightSideContent {...detailsData} />
  </RightSidePokedexInterfaceContainer>
);

const mapStateToProps = createStructuredSelector({
  detailsData: selectDetailsData,
});

export default connect(mapStateToProps)(RightSidePokedex);
