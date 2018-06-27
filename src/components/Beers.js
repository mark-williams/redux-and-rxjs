import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const SearchPanel = styled.div`
  flex: 1;
  min-width: 10rem;
  height: 100%;
  background-color: hsl(260, 16%, 40%);
  height: 100%;
  color: white;
  padding: 2rem 0 0 2rem;
`;

const Results = styled.div`
  flex: 8;
`;

const Beers = () => (
  <Container>
    <SearchPanel>Search</SearchPanel>
    <Results />
  </Container>
);

export default Beers;
