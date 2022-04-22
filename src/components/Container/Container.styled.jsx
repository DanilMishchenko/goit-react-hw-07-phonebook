import styled from '@emotion/styled';

export const SectionContainer = styled.div`
  padding: 16px;
  color: #fff;
  background-color: blue;

  :nth-of-type(2n) {
    padding: 16px;
    color: blue;
    background-color: yellow;
  }
`;
