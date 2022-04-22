import styled from '@emotion/styled';

export const PhonebookForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  outline: 2px solid white;
  padding: 16px;
`;

export const PhonebookLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const InputName = styled.input`
  width: 200px;
  height: 20px;
  margin-bottom: 16px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 12px;
`;

export const ButtonAddContact = styled.button`
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  color: blue;
  background-color: yellow;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.75s;

  :hover {
    color: yellow;
    background: #030091;
    box-shadow: inset 2px 2px 5px rgba(217, 255, 0, 0.3),
      1px 1px 5px rgba(255, 255, 255, 1);
  }
`;
