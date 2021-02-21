import styled from "styled-components";

export const ListItemContainer = styled.div`
  height: 40px;
  width: 95%;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: black;
		color: white;
  }
`;

export const ContentName = styled.span`
  margin-right: 5px;
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
`;

export const ContentNumber = styled.span`
  margin-left: 5px;
  font-weight: bold;
  font-size: 16px;
`;
