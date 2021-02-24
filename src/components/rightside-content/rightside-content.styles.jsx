import styled from "styled-components";

export const RightDetailsContentContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CloseContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: grey;
  border-radius: 50px;
  margin-bottom: 1px;
  font-size: 20px;
  box-shadow: 1px 1px 10px black;

  &:hover {
    cursor: pointer;
  }
`;

export const AbilitiesContainer = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: green;
  border: 2px solid black;
  box-shadow: 1px 1px 10px black;
`;

export const BaseStatsContainer = styled.div`
  width: 95%;
  height: 250px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
  background-color: green;
  border: 2px solid black;
  box-shadow: 1px 1px 10px black;
`;

export const DescriptionContainer = styled.div`
  margin-top: 20px;
  width: 95%;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: white;
`;

export const AbilitiesContent = styled.span`
  display: flex;
  font-family: "DotGothic16", sans-serif;
  font-weight: bold;

  &:first-child {
    text-shadow: 2px 2px 1px #2e5413;
  }

  &:not(:first-child) {
    background-color: #91a1ba;
    font-size: 18px;
    padding: 7px;
    border-radius: 10px;
    border: 1px solid black;
  }

  &:last-child {
    background-color: #9370b5;
  }
`;

export const BaseStatsContent = styled.span`
  display: flex;
  text-align: center;
  margin: 0px 10px 0 10px;
  font-family: "DotGothic16", sans-serif;
  text-shadow: 2px 2px 1px #2e5413;
  font-weight: bold;

  &:first-child {
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    align-self: flex-start;
    text-decoration: underline;
  }
`;

export const DescriptionContent = styled.p`
  display: flex;
`;
