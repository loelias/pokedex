import React from "react";
import { connect } from "react-redux";

import ClosedPokedex from "../../components/closed-pokedex/closed-pokedex.component";

import { HomePageContainer } from "./homepage.styles";

import { fetchDataStartAsync } from "../../redux/closedpokedex/closedpokedex.actions";
class HomePage extends React.Component {
  componentDidMount() {
    const { fetchDataStartAsync } = this.props;

    fetchDataStartAsync();
  }

  render() {
    return (
      <HomePageContainer>
        <ClosedPokedex />
      </HomePageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDataStartAsync: () => dispatch(fetchDataStartAsync()),
});

export default connect(null, mapDispatchToProps)(HomePage);
