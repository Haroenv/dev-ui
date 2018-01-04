import styled from 'styled-components';
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.col}, 1fr);
`;

export const Log = styled.div`
  font-family: monospace;
  white-space: pre;
`;
