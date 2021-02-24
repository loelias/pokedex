import styled from "styled-components";

export const ClosedPokedexInterfaceContainer = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border-style: solid;
  background-color: red;
  border-radius: 0px 30px;
  box-shadow: 3px 3px 5px black;
`;

export const PokedexTopHeaderContainer = styled.div`
  display: flex;
  margin-top: 10px;
  border-bottom: 3px solid black;
  width: 100%;
  height: 80px;
  border-radius: 0px 30px 0px 0px;
`;

export const PokedexBigCircleElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  margin: 10px 0px 0px 30px;
  border-radius: 50px;
`;

export const PokedexInnerCircleElement = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  background-color: lightblue;
  border-radius: 50px;
`;

export const PokedexImageHeader = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction; row;
  margin-top: -5px;
  margin-left: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: flex-end;
  background-size: 300px 80px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
