import styled from 'styled-components';
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.col}, 1fr);
`;

export const Wrapper = styled.section`
  overflow: auto;
`;

export const Log = styled.pre`
  overflow: auto;
  padding-bottom: 1em;
`;
