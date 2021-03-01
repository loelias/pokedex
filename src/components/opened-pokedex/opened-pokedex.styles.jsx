import styled from "styled-components";

export const OpenedPokedexInterfaceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  box-sizing: border-box;
  
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 50%;
    heigth: 50%;
    margin-top: 5px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    heigth: 100%;
    margin-top: 50px;
  }
`;

// export const OpenedPokedexInterfaceContainer = styled.div`
//   width: 800px;
//   height: 600px;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-end;
//   margin-top: 20px;
// `;