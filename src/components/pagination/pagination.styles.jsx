import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 80%;
  height: 25px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  border: 1px solid grey;
  background-color: lightgrey;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px;
`;

export const PaginationButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: #0066ff;
  border-radius: 10px;
  text-weigth: 900;
  color: white;
  margin: 2px 0 2px 0;
  font-family: "VT323", monospace;
  box-shadow: 1px 1px 1px;

  &:hover {
    cursor: pointer;
  }

  &.active {
    background-color: green;
  }
`;
