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
	margin-top: 130px;
  width: 95%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
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
  background-color: white;
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
  background-color: white;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 60%;
  display: fles;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  &:hover {
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  }
`;

export const TypeContent = styled.span`
	display: flex;

  &:not(:first-child) {
    background-color: grey;
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;
  }
`;

export const PhysicalContent = styled.span`
	display: flex;
`;

export const PokemonContent = styled.span`
	display: flex;
`;