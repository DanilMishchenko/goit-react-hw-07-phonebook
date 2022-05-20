import styled from '@emotion/styled';

export const List = styled.ul`
  border-radius: 8px;
  outline: 2px solid blue;
  padding: 16px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
  padding: 4px;

  :hover {
    cursor: pointer;
    color: yellow;
    background: #030091;
    box-shadow: inset 2px 2px 5px rgba(217, 255, 0, 0.3),
      1px 1px 5px rgba(255, 255, 255, 1);
  }
`;

export const Information = styled.span`
  margin-left: 4px;
  border-bottom: 1px solid black;
`;

export const DeleteButton = styled.button`
  padding: 4px 8px;
  margin-right: 4px;
  font-size: 12px;
  font-weight: 500;
  color: blue;
  outline: 1px solid blue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.75s;

  :hover {
    color: #030091;
    background: yellow;
    box-shadow: inset 2px 2px 5px rgba(217, 255, 0, 0.3),
      1px 1px 5px rgba(255, 255, 255, 1);
  }
`;
