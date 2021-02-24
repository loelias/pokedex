import styled from 'styled-components';

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
  margin-left: 30px;
  border-radius: 50px;
`;

export const PokedexInnerCircleElement = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  background-color: lightblue;
  border-radius: 50px;

  &:hover {
    cursor: pointer;
  }
`;