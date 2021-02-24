import styled from "styled-components";

export const ListItemContainer = styled.div`
  height: 40px;
  width: 95%;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;

  &:first-child {
    margin-top: 10px;
  }

  &:last-child {
    margin-bottom: 10px;
  }

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

export const ContentName = styled.span`
  margin-right: 5px;
  font-weight: 900;
  margin-bottom: 6px;
  font-size: 22px;
  font-family: "DotGothic16", sans-serif;
  letter-spacing: 8px;
`;

export const ContentNumber = styled.span`
  margin-left: 5px;
  font-weight: bold;
  font-size: 16px;
  font-family: "DotGothic16", sans-serif;
  letter-spacing: 8px;
`;
