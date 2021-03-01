import styled from "styled-components";

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
  margin-top: 10px;
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
  box-shadow: 0px 0px 20px black;
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
  box-shadow: 1px 1px 10px black;
`;

export const PhysicalContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 95%;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: green;
  border: 2px solid black;
  box-shadow: 1px 1px 10px black;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 81%;
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

export const PhysicalContent = styled.span`
  display: flex;
  font-family: "DotGothic16", sans-serif;
  text-shadow: 2px 2px 1px #2e5413;
  font-weight: bold;
`;

export const PokemonContent = styled.span`
  display: flex;
  font-family: "VT323", monospace;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 4px;
`;

export const PokedexTopHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 3px solid black;
  box-shadow: -2px 5px 5px black;
  width: 100%;
  height: 80px;
  border-radius: 0px 30px 0px 0px;
  margin-bottom: 25px;
`;

export const PokedexBigCircleElement = styled.div`
  align-self: flex-start;
  align-items: center;
  text-align: center;
  width: 51px;
  height: 49px;
  background-color: white;
  margin: 10px 0px 0px 30px;
  border-radius: 50px;
  box-shadow: 2px 2px 8px black;

  &:hover {
    background-color: yellow;
    box-shadow: 2px 2px 8px yellow;
  }
`;

export const PokedexInnerCircleElement = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: white;
  width: 90%;
  height: 90%;
  background-color: #356bbc;
  border-radius: 50px;
  margin: 2px 0 2px 1px;

  &:hover {
    cursor: pointer;
    color: yellow;
  }
`;

export const PokedexImageHeader = styled.div`
  width: 78%;
  height: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: flex-end;
  background-size: 200px 40px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: right center;
  margin-right: 20px;
`;

// export const LeftDetailsContentContainer = styled.div`
//   width: 400px;
//   height: 600px;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// export const NameNumberContainer = styled.div`
//   margin-top: 10px;
//   width: 85%;
//   height: 300px;
//   display: flex;
//   padding: 2px;
//   flex-wrap: wrap;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   background: linear-gradient(to bottom, white 80%, #cccccc 20%);
//   border: 15px solid grey;
//   box-shadow: 0px 0px 20px black;
// `;

// export const TypesContainer = styled.div`
//   margin-top: 20px;
//   width: 95%;
//   height: 50px;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-around;
//   background-color: green;
//   border: 2px solid black;
//   box-shadow: 1px 1px 10px black;
// `;

// export const PhysicalContainer = styled.div`
//   margin-top: 10px;
//   margin-bottom: 10px;
//   width: 95%;
//   height: 50px;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-around;
//   background-color: green;
//   border: 2px solid black;
//   box-shadow: 1px 1px 10px black;
// `;

// export const BackgroundImage = styled.div`
//   width: 100%;
//   height: 80%;
//   display: flex;
//   background-repeat: no-repeat;
//   background-size: 250px 250px;
//   background-position: center;
//   background-image: ${({ imageUrl }) => `url(${imageUrl})`};
//   border-bottom: 2px dotted black;

//   &:hover {
//     background-image: ${({ imageUrl }) => `url(${imageUrl})`};
//   }
// `;

// export const TypeContent = styled.span`
//   display: flex;
//   font-family: "DotGothic16", sans-serif;
//   font-weight: bold;

//   &:first-child {
//     text-shadow: 2px 2px 1px #2e5413;
//   }

//   &:not(:first-child) {
//     background-color: #91a1ba;
//     font-size: 18px;
//     padding: 7px;
//     border-radius: 10px;
//     border: 1px solid black;
//   }

//   &:last-child {
//     background-color: #9370b5;
//   }
// `;

// export const PhysicalContent = styled.span`
//   display: flex;
//   font-family: "DotGothic16", sans-serif;
//   text-shadow: 2px 2px 1px #2e5413;
//   font-weight: bold;
// `;

// export const PokemonContent = styled.span`
//   display: flex;
//   font-family: "VT323", monospace;
//   font-weight: bold;
//   font-size: 20px;
//   letter-spacing: 4px;
// `;

// export const PokedexTopHeaderContainer = styled.div`
//   display: flex;
//   border-bottom: 3px solid black;
//   box-shadow: -2px 5px 5px black;
//   width: 100%;
//   height: 80px;
//   border-radius: 0px 30px 0px 0px;
// `;

// export const PokedexBigCircleElement = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 51px;
//   height: 49px;
//   background-color: white;
//   margin: 10px 0px 0px 30px;
//   margin-left: 20px;
//   border-radius: 50px;
//   box-shadow: 2px 2px 8px black;

//   &:hover {
//     background-color: yellow;
//     box-shadow: 2px 2px 8px yellow;
//   }
// `;

// export const PokedexInnerCircleElement = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: 35px;
//   font-weight: bold;
//   color: white;
//   width: 90%;
//   height: 90%;
//   background-color: #356bbc;
//   border-radius: 50px;
//   margin-left: 1px;

//   &:hover {
//     cursor: pointer;
//     color: yellow;
//   }
// `;

// export const PokedexImageHeader = styled.div`
//   width: 300px;
//   height: 80px;
//   margin-left: 20px;
//   display: flex;
//   flex-direction; row;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: flex-end;
//   background-size: 200px 40px;
//   background-image: ${({ imageUrl }) => `url(${imageUrl})`};
//   background-position: right center;
// `;
