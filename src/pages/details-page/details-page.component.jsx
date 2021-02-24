import React from "react";
import { connect } from "react-redux";

import OpenedPokedex from "../../components/opened-pokedex/opened-pokedex.component";

import { DetailsPageContainer } from "./details-page.styles";

import { fetchDetailsDataStartAsync } from "../../redux/openedpokedex/openedpokedex.actions";

class DetailsPage extends React.Component {
  componentDidMount() {
    const { fetchDetailsDataStartAsync } = this.props;
    fetchDetailsDataStartAsync(this.props.match.params.pokemonId);
  }

  render() {
    return (
      <DetailsPageContainer>
        <OpenedPokedex />
      </DetailsPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDetailsDataStartAsync: (value) =>
    dispatch(fetchDetailsDataStartAsync(value)),
});

export default connect(null, mapDispatchToProps)(DetailsPage);
