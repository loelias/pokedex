import styled from 'styled-components';

export const LeftDetailsContentContainer = styled.div`
	width: 400px;
	height: 600px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const NameNumberContainer = styled.div`
	margin-top: 100px;
  width: 85%;
  height: 300px;
  display: flex;
  padding: 2px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, white 80%, #cccccc 20%);
  border: 15px solid grey;
`;

export const TypesContainer = styled.div`
  margin-top: 20px;
  width: 95%;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: green;
  border: 2px solid black;
`;

export const PhysicalContainer = styled.div`
  margin-top: 20px;
  width: 95%;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: green;
  border: 2px solid black;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  background-repeat: no-repeat;
  background-size: 250px 250px;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  border-bottom: 2px dotted black;

  &:hover {
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  }
`;

export const TypeContent = styled.span`
	display: flex;
  font-family: 'DotGothic16', sans-serif;
  font-weight: bold;

  &:first-child {
    text-shadow: 2px 2px 1px #2E5413;
  }

  &:not(:first-child) {
    background-color: #91a1ba;
    font-size: 18px;
    padding: 7px;
    border-radius: 10px;
    border: 1px solid black
  }

  &:last-child {
    background-color: #9370b5;
  }
`;

export const PhysicalContent = styled.span`
	display: flex;
  font-family: 'DotGothic16', sans-serif;
  text-shadow: 2px 2px 1px #2E5413;
  font-weight: bold;
`;

export const PokemonContent = styled.span`
	display: flex;
  font-family: 'VT323', monospace;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 4px;
`;